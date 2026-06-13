const storageKeys = {
  queue: "mprOrderOsQueue",
  customer: "mprCustomerProfile",
  ops: "mprAdminOpsState",
  auth: "mprAdminGateSession",
};

const statuses = ["New", "In prep", "Ready", "Fulfilled"];
const stationOptions = ["Unassigned", "Grill", "Cold line", "Sauce", "Packout", "Delivery"];
const capacityTarget = 96;
const authConfig = {
  previewSalt: "ba8940a42c10b551816c524aa618376e",
  previewHash: "4ad21813fe8a3e0f58932a29d1c9281e8982a2fae04364db4c5ee093d9fccb26",
  previewHosts: ["beige-cattle-772158.hostingersite.com"],
  maxAgeMs: 1000 * 60 * 60 * 12,
};

const elements = {
  gate: document.querySelector("#adminGate"),
  gateForm: document.querySelector("#adminGateForm"),
  gatePasscode: document.querySelector("#adminPasscode"),
  gateError: document.querySelector("#adminGateError"),
  app: document.querySelector("#adminApp"),
  adminDate: document.querySelector("#adminDate"),
  adminTime: document.querySelector("#adminTime"),
  kitchenKpis: document.querySelector("#kitchenKpis"),
  ownerMetrics: document.querySelector("#ownerMetrics"),
  dailyBrief: document.querySelector("#dailyBrief"),
  copyDailyBrief: document.querySelector("#copyDailyBrief"),
  paymentWatch: document.querySelector("#paymentWatch"),
  paymentSignal: document.querySelector("#paymentSignal"),
  kitchenTickets: document.querySelector("#kitchenTickets"),
  prepBoard: document.querySelector("#prepBoard"),
  ticketCount: document.querySelector("#ticketCount"),
  pipelineBars: document.querySelector("#pipelineBars"),
  pipelineSignal: document.querySelector("#pipelineSignal"),
  customerFollowups: document.querySelector("#customerFollowups"),
  followupSignal: document.querySelector("#followupSignal"),
  handoffList: document.querySelector("#handoffList"),
  deliveryRoute: document.querySelector("#deliveryRoute"),
  routeSignal: document.querySelector("#routeSignal"),
  allergyWatch: document.querySelector("#allergyWatch"),
  allergySignal: document.querySelector("#allergySignal"),
  fulfillmentMix: document.querySelector("#fulfillmentMix"),
  capacityFill: document.querySelector("#capacityFill"),
  capacityText: document.querySelector("#capacityText"),
  activityFeed: document.querySelector("#activityFeed"),
  statusFilter: document.querySelector("#statusFilter"),
  fulfillmentFilter: document.querySelector("#fulfillmentFilter"),
  ticketSearch: document.querySelector("#ticketSearch"),
  emptyTemplate: document.querySelector("#emptyStateTemplate"),
};

let orders = [];
let opsState = {};
let customerInsights = {};
let customerFollowups = [];
let serverBacked = false;
let latestDailyBrief = "";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function sha256Hex(value) {
  if (!window.crypto?.subtle) {
    throw new Error("Secure browser crypto is not available.");
  }
  const data = new TextEncoder().encode(value);
  const buffer = await window.crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function readAuthSession() {
  try {
    return JSON.parse(sessionStorage.getItem(storageKeys.auth)) || {};
  } catch {
    return {};
  }
}

function authSessionIsValid() {
  const session = readAuthSession();
  return Boolean(session.server || session.preview) && Date.now() - Number(session.unlockedAt || 0) < authConfig.maxAgeMs;
}

function localPreviewIsAllowed() {
  const host = window.location?.hostname || "";
  const isLocal = ["127.0.0.1", "localhost", "::1", ""].includes(host);
  const params = new URLSearchParams(window.location?.search || "");
  return isLocal && params.get("preview") === "1";
}

async function hostedPreviewIsAllowed() {
  const host = window.location?.hostname || "";
  const params = new URLSearchParams(window.location?.search || "");
  if (!authConfig.previewHosts.includes(host) || params.get("preview") !== "1") return false;
  const token = params.get("token") || "";
  if (!token) return false;
  try {
    return await sha256Hex(`${authConfig.previewSalt}:${token}`) === authConfig.previewHash;
  } catch {
    return false;
  }
}

function apiPath(path) {
  const joiner = path.includes("?") ? "&" : "?";
  return localPreviewIsAllowed() ? `${path}${joiner}preview=1` : path;
}

async function apiJson(path, options = {}) {
  const response = await fetch(apiPath(path), {
    credentials: "same-origin",
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Admin API request failed.");
  return data;
}

function applyServerData(data) {
  orders = Array.isArray(data.orders) ? data.orders : [];
  opsState = data.opsState && typeof data.opsState === "object" ? data.opsState : {};
  customerInsights = data.customerInsights && typeof data.customerInsights === "object" ? data.customerInsights : {};
  customerFollowups = Array.isArray(data.customerFollowups) ? data.customerFollowups : [];
  serverBacked = true;
  saveState();
  render();
}

function updateSyncStatus(message) {
  if (elements.pipelineSignal) elements.pipelineSignal.textContent = message;
}

async function loadServerState() {
  try {
    const data = await apiJson("api/admin-orders.php");
    applyServerData(data);
    updateSyncStatus("Server source");
  } catch (error) {
    serverBacked = false;
    updateSyncStatus("Local fallback");
  }
}

async function serverAuthIsValid() {
  try {
    const data = await apiJson("api/admin-auth.php");
    return Boolean(data.authenticated);
  } catch {
    return false;
  }
}

function showGateError(message) {
  elements.gateError.textContent = message;
}

function showAdminApp() {
  document.body.classList.remove("admin-locked");
  elements.app.removeAttribute("inert");
  elements.app.setAttribute("aria-hidden", "false");
  elements.gate.setAttribute("aria-hidden", "true");
  loadState();
  render();
  loadServerState();
}

function showAdminGate() {
  document.body.classList.add("admin-locked");
  elements.app.setAttribute("inert", "");
  elements.app.setAttribute("aria-hidden", "true");
  elements.gate.setAttribute("aria-hidden", "false");
  elements.gatePasscode.value = "";
  showGateError("");
  window.setTimeout(() => elements.gatePasscode.focus(), 50);
}

async function submitAdminGate(event) {
  event.preventDefault();
  const passcode = elements.gatePasscode.value.trim();
  if (!passcode) {
    showGateError("Enter the internal passcode.");
    return;
  }

  try {
    await apiJson("api/admin-auth.php", {
      method: "POST",
      body: JSON.stringify({ passcode }),
    });
    sessionStorage.setItem(storageKeys.auth, JSON.stringify({ server: true, unlockedAt: Date.now() }));
    showAdminApp();
  } catch (error) {
    showGateError(error.message || "That passcode did not match.");
    elements.gatePasscode.select();
  }
}

function lockAdmin() {
  sessionStorage.removeItem(storageKeys.auth);
  apiJson("api/admin-auth.php", { method: "DELETE" }).catch(() => {});
  showAdminGate();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function dollars(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value) || 0);
}

function compactDollars(value) {
  return dollars(value).replace(".00", "");
}

function customerName(order) {
  return order?.customer?.name || order?.customer?.phone || order?.customer?.email || "Walk-in customer";
}

function orderStatusNext(status) {
  return {
    New: "In prep",
    "In prep": "Ready",
    Ready: "Fulfilled",
    Fulfilled: "New",
  }[status] || "New";
}

function statusClass(status) {
  return `status-${String(status).toLowerCase().replaceAll(" ", "-")}`;
}

function formatDate(value) {
  if (!value) return "Unscheduled";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function formatTime(value) {
  return new Date(value).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function formatAddress(address = {}) {
  const parts = [address.street, address.unit, address.city].filter(Boolean);
  return parts.join(", ");
}

function orderAllergies(order) {
  return order.fulfillment?.allergies || order.customer?.allergies || "";
}

function orderPaymentStatus(order) {
  const rawStatus = String(order.payment_status || "").trim();
  const ops = ensureOps(order);
  if (ops.paid || rawStatus.toLowerCase() === "paid") return "Paid";
  return rawStatus || "Pending checkout";
}

function paymentNeedsAttention(order) {
  return order.status !== "Fulfilled" && orderPaymentStatus(order).toLowerCase() !== "paid";
}

function checkoutStatusText(order) {
  if (!order.checkout_started_at) return "Checkout not opened";
  const wallet = order.checkout_wallet ? ` via ${order.checkout_wallet}` : "";
  return `Checkout opened ${formatTime(order.checkout_started_at)}${wallet}`;
}

function orderEventLabel(event = {}) {
  if (event.event === "order_created") return "Order ticket created";
  if (event.event === "checkout_started") return `Checkout opened${event.wallet ? ` / ${event.wallet}` : ""}`;
  if (event.event === "recurring_selected") return `Repeat selected${event.frequency ? ` / ${event.frequency}` : ""}`;
  if (event.event === "demo_imported") return "Demo ticket imported";
  return String(event.event || "Customer activity").replaceAll("_", " ");
}

function customerActivityMarkup(order) {
  const rows = Array.isArray(order.events) ? order.events.slice(-3).reverse() : [];
  if (!rows.length) return "";
  return `
    <div class="ticket-activity" aria-label="Customer activity for ${escapeHtml(order.id)}">
      <strong>Customer activity</strong>
      ${rows.map((event) => `
        <span>
          <small>${escapeHtml(event.at ? formatTime(event.at) : "Now")}</small>
          ${escapeHtml(orderEventLabel(event))}
        </span>
      `).join("")}
    </div>
  `;
}

function nowIso() {
  return new Date().toISOString();
}

function activeOrders(list = orders) {
  return list.filter((order) => order.status !== "Fulfilled");
}

function totalMeals(list = orders) {
  return list.reduce((sum, order) => sum + (Number(order.total_meals) || 0), 0);
}

function totalRevenue(list = orders) {
  return list.reduce((sum, order) => sum + (Number(order.estimated_total) || 0), 0);
}

function ensureOps(order) {
  const existing = opsState[order.id] || {};
  opsState[order.id] = {
    station: existing.station || "Unassigned",
    priority: Boolean(existing.priority),
    paid: Boolean(existing.paid),
    note: existing.note || "",
    history: Array.isArray(existing.history) ? existing.history : [`Ticket imported ${formatTime(order.created_at || nowIso())}`],
  };
  return opsState[order.id];
}

function loadState() {
  orders = readJson(storageKeys.queue, []);
  opsState = readJson(storageKeys.ops, {});
  orders.forEach(ensureOps);
  writeJson(storageKeys.ops, opsState);
}

function saveState() {
  writeJson(storageKeys.queue, orders);
  writeJson(storageKeys.ops, opsState);
}

function orderItems(order) {
  return Array.isArray(order.cart) && order.cart.length ? order.cart : (Array.isArray(order.line_items) ? order.line_items : []);
}

function lineSummary(order) {
  return orderItems(order)
    .map((item) => {
      const quantity = item.quantity ? `${item.quantity}x ` : "";
      const title = item.title || item.name || "Custom meal";
      const summary = item.summary || item.compactDescription || item.description || (item.builder_groups || [])
        .map((group) => `${group.label}: ${(group.selected || []).join(", ")}`)
        .join(" / ");
      return `${quantity}${title}${summary ? ` - ${summary}` : ""}`;
    })
    .slice(0, 4);
}

function selectedGroups(order) {
  return orderItems(order)
    .flatMap((item) =>
      (item.groups || item.builder_groups || []).map((group) => ({
        label: group.label === "Grain" ? "Carbs" : group.label,
        quantity: Number(item.quantity) || 0,
        selections: (group.selected || []).map((selection) => selection.name || selection),
      })),
    )
    .filter((group) => group.label && group.selections.length);
}

function prepBuckets(list) {
  const buckets = {
    Protein: {},
    Carbs: {},
    Vegetables: {},
    Sauce: {},
  };

  activeOrders(list).forEach((order) => {
    selectedGroups(order).forEach((group) => {
      const bucket = buckets[group.label];
      if (!bucket) return;
      group.selections.forEach((name) => {
        bucket[name] = (bucket[name] || 0) + group.quantity;
      });
    });
  });

  return buckets;
}

function topBucketItems(bucket, limit = 2) {
  return Object.entries(bucket || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => `${name} ${count}`)
    .join(", ");
}

function filteredOrders() {
  const status = elements.statusFilter.value;
  const fulfillment = elements.fulfillmentFilter.value;
  const query = elements.ticketSearch.value.trim().toLowerCase();

  return orders.filter((order) => {
    const includeFulfilled = status === "Fulfilled";
    const activeMatch = includeFulfilled || order.status !== "Fulfilled";
    const statusMatch = status === "all" || order.status === status;
    const fulfillmentMatch = fulfillment === "all" || order.fulfillment?.type === fulfillment;
    const haystack = [
      order.id,
      customerName(order),
      order.customer?.phone,
      order.customer?.email,
      order.fulfillment?.notes,
      ensureOps(order).note,
      ...lineSummary(order),
    ]
      .join(" ")
      .toLowerCase();
    return activeMatch && statusMatch && fulfillmentMatch && (!query || haystack.includes(query));
  });
}

function renderClock() {
  const now = new Date();
  elements.adminDate.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  elements.adminTime.textContent = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function renderKpis() {
  const active = activeOrders();
  const ready = orders.filter((order) => order.status === "Ready");
  const inPrep = orders.filter((order) => order.status === "In prep");
  const next = active
    .slice()
    .sort((a, b) => String(a.fulfillment?.date || "").localeCompare(String(b.fulfillment?.date || "")))[0];

  elements.kitchenKpis.innerHTML = [
    ["Open tickets", active.length, `${inPrep.length} currently in prep`],
    ["Active meals", totalMeals(active), "Not yet fulfilled"],
    ["Ready", ready.length, "Awaiting handoff"],
    ["Next handoff", next ? formatDate(next.fulfillment?.date) : "Clear", next ? `${next.fulfillment?.type || "pickup"} / ${next.fulfillment?.window || "window"}` : "No active tickets"],
  ]
    .map(([label, value, helper]) => metricMarkup(label, value, helper))
    .join("");

  const avg = orders.length ? totalRevenue() / orders.length : 0;
  elements.ownerMetrics.innerHTML = [
    ["Estimated revenue", compactDollars(totalRevenue()), `${orders.length} tickets tracked`],
    ["Meals sold", totalMeals(), `${totalMeals(active)} active`],
    ["Avg ticket", compactDollars(avg), `${customerInsights.returning_customers || 0} returning customers`],
    ["Recurring interest", customerInsights.recurring_interested || 0, "Selected after checkout"],
  ]
    .map(([label, value, helper]) => metricMarkup(label, value, helper))
    .join("");
}

function metricMarkup(label, value, helper) {
  return `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(helper)}</small>
    </div>
  `;
}

function ticketMarkup(order) {
  const ops = ensureOps(order);
  const lines = lineSummary(order);
  const itemRows = lines.length
    ? lines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")
    : `<span>No meal lines recorded.</span>`;
  const history = (ops.history || []).slice(-2).map((entry) => `<span>${escapeHtml(entry)}</span>`).join("");
  const allergies = order.fulfillment?.allergies || order.customer?.allergies || "";
  const address = formatAddress(order.fulfillment?.address || order.customer?.address || {});
  const contactPreference = order.fulfillment?.contact_preference || order.customer?.contact_preference || "text";
  const paymentStatus = orderPaymentStatus(order);
  const checkoutStatus = order.checkout_started_at ? `Checkout: ${order.checkout_wallet || "opened"}` : "";
  const recurring = order.recurring_frequency ? `Repeat: ${order.recurring_frequency}` : "";
  const activity = customerActivityMarkup(order);

  return `
    <article class="ticket-card${ops.priority ? " priority" : ""}" data-ticket-id="${escapeHtml(order.id)}">
      <div class="ticket-top">
        <div class="ticket-title">
          <span class="ticket-id">${escapeHtml(order.id)}</span>
          <h4>${escapeHtml(customerName(order))}</h4>
        </div>
        <span class="status-pill ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
      </div>
      <div class="ticket-meta">
        <span>${escapeHtml(order.fulfillment?.type || "pickup")} / ${escapeHtml(formatDate(order.fulfillment?.date))} / ${escapeHtml(order.fulfillment?.window || "window")} / ${escapeHtml(contactPreference)}</span>
        <strong>${escapeHtml(order.total_meals || 0)} meals / ${escapeHtml(compactDollars(order.estimated_total || 0))}</strong>
      </div>
      <div class="ticket-tags">
        <span>${escapeHtml(paymentStatus)}</span>
        ${checkoutStatus ? `<span>${escapeHtml(checkoutStatus)}</span>` : ""}
        ${recurring ? `<span>${escapeHtml(recurring)}</span>` : ""}
      </div>
      ${address ? `<div class="ticket-alert neutral"><strong>Delivery</strong><span>${escapeHtml(address)}</span></div>` : ""}
      ${allergies ? `<div class="ticket-alert"><strong>Allergies</strong><span>${escapeHtml(allergies)}</span></div>` : ""}
      ${activity}
      <div class="ticket-items">${itemRows}</div>
      <div class="ticket-controls">
        <label class="ticket-field">
          <span>Status</span>
          <select data-field="status" data-ticket="${escapeHtml(order.id)}">
            ${statuses.map((status) => `<option value="${escapeHtml(status)}"${status === order.status ? " selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
        </label>
        <label class="ticket-field">
          <span>Station</span>
          <select data-field="station" data-ticket="${escapeHtml(order.id)}">
            ${stationOptions.map((station) => `<option value="${escapeHtml(station)}"${station === ops.station ? " selected" : ""}>${escapeHtml(station)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="ticket-flags">
        <label class="flag-toggle">
          <input type="checkbox" data-field="priority" data-ticket="${escapeHtml(order.id)}"${ops.priority ? " checked" : ""}>
          Priority
        </label>
        <label class="flag-toggle">
          <input type="checkbox" data-field="paid" data-ticket="${escapeHtml(order.id)}"${ops.paid ? " checked" : ""}>
          Paid
        </label>
      </div>
      <label class="note-field">
        <span>Kitchen note</span>
        <textarea data-field="note" data-ticket="${escapeHtml(order.id)}" placeholder="Expo notes, allergies, packaging, handoff details">${escapeHtml(ops.note)}</textarea>
      </label>
      <div class="ticket-control-row">
        <button class="ticket-action" type="button" data-action="bump" data-ticket="${escapeHtml(order.id)}">Bump Status</button>
        <div class="ticket-history">${history}</div>
      </div>
    </article>
  `;
}

function renderTickets() {
  const list = filteredOrders();
  elements.ticketCount.textContent = `${list.length} ticket${list.length === 1 ? "" : "s"}`;
  if (!list.length) {
    elements.kitchenTickets.innerHTML = elements.emptyTemplate.innerHTML;
    return;
  }
  elements.kitchenTickets.innerHTML = list
    .sort((a, b) => {
      const ap = ensureOps(a).priority ? 0 : 1;
      const bp = ensureOps(b).priority ? 0 : 1;
      return ap - bp || statuses.indexOf(a.status) - statuses.indexOf(b.status) || String(a.fulfillment?.date || "").localeCompare(String(b.fulfillment?.date || ""));
    })
    .map(ticketMarkup)
    .join("");
}

function renderPrepBoard() {
  const buckets = prepBuckets(orders);
  elements.prepBoard.innerHTML = Object.entries(buckets)
    .map(([label, items]) => {
      const rows = Object.entries(items)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([name, count]) => `<li><span>${escapeHtml(name)}</span><strong>${count}</strong></li>`)
        .join("");
      return `
        <div class="prep-bucket">
          <h4>${escapeHtml(label)}</h4>
          <ul>${rows || `<li><span>No active tickets</span><strong>0</strong></li>`}</ul>
        </div>
      `;
    })
    .join("");
}

function percent(value, denominator) {
  if (!denominator) return 0;
  return Math.round((value / denominator) * 100);
}

function renderPipeline() {
  const max = Math.max(...statuses.map((status) => orders.filter((order) => order.status === status).length), 1);
  elements.pipelineBars.innerHTML = statuses
    .map((status) => {
      const count = orders.filter((order) => order.status === status).length;
      return `
        <div class="pipeline-row">
          <span>${escapeHtml(status)}</span>
          <div class="bar-track"><span style="--fill: ${percent(count, max)}%"></span></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");
}

function buildDailyBriefText() {
  const active = activeOrders();
  const deliveries = active.filter((order) => order.fulfillment?.type === "delivery");
  const allergyOrders = active.filter((order) => orderAllergies(order).trim() !== "");
  const pendingPayments = active.filter(paymentNeedsAttention);
  const ready = active.filter((order) => order.status === "Ready");
  const next = active
    .slice()
    .sort((a, b) =>
      String(a.fulfillment?.date || "").localeCompare(String(b.fulfillment?.date || ""))
      || String(a.fulfillment?.window || "").localeCompare(String(b.fulfillment?.window || ""))
    )[0];
  const buckets = prepBuckets(active);
  const prepFocus = [
    topBucketItems(buckets.Protein) && `Protein: ${topBucketItems(buckets.Protein)}`,
    topBucketItems(buckets.Carbs) && `Carbs: ${topBucketItems(buckets.Carbs)}`,
    topBucketItems(buckets.Vegetables) && `Veg: ${topBucketItems(buckets.Vegetables)}`,
    topBucketItems(buckets.Sauce) && `Sauce: ${topBucketItems(buckets.Sauce)}`,
  ].filter(Boolean).join(" | ");
  const followup = customerFollowups[0];

  return [
    `MPR Daily Ops Brief - ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}`,
    `Open tickets: ${active.length} / Active meals: ${totalMeals(active)} / Est. revenue: ${compactDollars(totalRevenue(active))}`,
    `Next handoff: ${next ? `${customerName(next)} - ${next.fulfillment?.type || "pickup"} / ${formatDate(next.fulfillment?.date)} / ${next.fulfillment?.window || "window"}` : "Clear"}`,
    `Ready: ${ready.length} / Pending payment: ${pendingPayments.length} / Delivery stops: ${deliveries.length} / Allergy flags: ${allergyOrders.length}`,
    `Prep focus: ${prepFocus || "No active prep load"}`,
    `Follow-up: ${followup ? `${followup.name} - ${followup.next_action}` : "No customer follow-up queued"}`,
  ].join("\n");
}

function renderDailyBrief() {
  if (!elements.dailyBrief) return;
  latestDailyBrief = buildDailyBriefText();
  elements.dailyBrief.innerHTML = latestDailyBrief
    .split("\n")
    .map((line, index) => index === 0 ? `<strong>${escapeHtml(line)}</strong>` : `<span>${escapeHtml(line)}</span>`)
    .join("");
}

function renderPaymentWatch() {
  if (!elements.paymentWatch) return;
  const pendingPayments = activeOrders()
    .filter(paymentNeedsAttention)
    .slice()
    .sort((a, b) =>
      Number(Boolean(b.checkout_started_at)) - Number(Boolean(a.checkout_started_at))
      || String(b.checkout_started_at || b.created_at || "").localeCompare(String(a.checkout_started_at || a.created_at || ""))
      || customerName(a).localeCompare(customerName(b))
    );

  if (elements.paymentSignal) {
    elements.paymentSignal.textContent = pendingPayments.length ? `${pendingPayments.length} pending` : "Clear";
  }

  if (!pendingPayments.length) {
    elements.paymentWatch.innerHTML = `
      <div class="empty-state">
        <strong>Payment queue clear.</strong>
        <span>No active orders are waiting on wallet checkout.</span>
      </div>
    `;
    return;
  }

  elements.paymentWatch.innerHTML = pendingPayments.slice(0, 6).map((order) => `
    <div class="payment-item${order.checkout_started_at ? " checkout-started" : ""}">
      <div>
        <strong>${escapeHtml(customerName(order))}</strong>
        <span>${escapeHtml(checkoutStatusText(order))}</span>
        <small>${escapeHtml(order.id)} / ${escapeHtml(formatDate(order.fulfillment?.date))} / ${escapeHtml(order.fulfillment?.window || "window")}</small>
      </div>
      <strong>${escapeHtml(compactDollars(order.estimated_total || 0))}</strong>
    </div>
  `).join("");
}

function renderCustomerFollowups() {
  if (!elements.customerFollowups) return;
  if (elements.followupSignal) {
    elements.followupSignal.textContent = customerFollowups.length ? `${customerFollowups.length} queued` : "Clear";
  }

  if (!customerFollowups.length) {
    elements.customerFollowups.innerHTML = elements.emptyTemplate.innerHTML;
    return;
  }

  elements.customerFollowups.innerHTML = customerFollowups
    .slice(0, 6)
    .map((customer) => `
      <div class="followup-item">
        <div>
          <strong>${escapeHtml(customer.name || "Customer")}</strong>
          <span>${escapeHtml(customer.reason || "Follow-up")} / ${escapeHtml(customer.contact_preference || "text")}${customer.recurring_frequency ? ` / ${escapeHtml(customer.recurring_frequency)}` : ""}</span>
        </div>
        <div class="followup-meta">
          <span>${escapeHtml(customer.next_action || "Follow up")}</span>
          <small>${escapeHtml(customer.last_total_meals || 0)} meals / ${escapeHtml(compactDollars(customer.last_estimated_total || 0))} last order</small>
        </div>
      </div>
    `)
    .join("");
}

function renderDeliveryRoute() {
  if (!elements.deliveryRoute) return;
  const deliveries = activeOrders()
    .filter((order) => order.fulfillment?.type === "delivery")
    .slice()
    .sort((a, b) =>
      String(a.fulfillment?.date || "").localeCompare(String(b.fulfillment?.date || ""))
      || String(a.fulfillment?.window || "").localeCompare(String(b.fulfillment?.window || ""))
      || customerName(a).localeCompare(customerName(b))
    );

  if (elements.routeSignal) {
    elements.routeSignal.textContent = deliveries.length ? `${deliveries.length} stops` : "Clear";
  }

  if (!deliveries.length) {
    elements.deliveryRoute.innerHTML = elements.emptyTemplate.innerHTML;
    return;
  }

  elements.deliveryRoute.innerHTML = deliveries.slice(0, 6).map((order) => {
    const address = formatAddress(order.fulfillment?.address || order.customer?.address || {});
    const contactPreference = order.fulfillment?.contact_preference || order.customer?.contact_preference || "text";
    return `
      <div class="route-item">
        <div>
          <strong>${escapeHtml(customerName(order))}</strong>
          <span>${escapeHtml(formatDate(order.fulfillment?.date))} / ${escapeHtml(order.fulfillment?.window || "window")} / ${escapeHtml(contactPreference)}</span>
          <small>${escapeHtml(address || "Address needed")}</small>
        </div>
        <strong>${escapeHtml(order.total_meals || 0)} meals</strong>
      </div>
    `;
  }).join("");
}

function renderAllergyWatch() {
  if (!elements.allergyWatch) return;
  const allergyOrders = activeOrders().filter((order) => orderAllergies(order).trim() !== "");

  if (elements.allergySignal) {
    elements.allergySignal.textContent = allergyOrders.length ? `${allergyOrders.length} flagged` : "Clear";
  }

  if (!allergyOrders.length) {
    elements.allergyWatch.innerHTML = elements.emptyTemplate.innerHTML;
    return;
  }

  elements.allergyWatch.innerHTML = allergyOrders.slice(0, 6).map((order) => `
    <div class="allergy-item">
      <div>
        <strong>${escapeHtml(customerName(order))}</strong>
        <span>${escapeHtml(orderAllergies(order))}</span>
        <small>${escapeHtml(formatDate(order.fulfillment?.date))} / ${escapeHtml(order.fulfillment?.window || "window")} / ${escapeHtml(order.fulfillment?.type || "pickup")}</small>
      </div>
      <strong>${escapeHtml(order.total_meals || 0)} meals</strong>
    </div>
  `).join("");
}

function renderOwnerLists() {
  const active = activeOrders();
  const sorted = active.slice().sort((a, b) => String(a.fulfillment?.date || "").localeCompare(String(b.fulfillment?.date || "")));
  elements.handoffList.innerHTML = sorted.length
    ? sorted.slice(0, 7).map((order) => `
      <div class="handoff-item">
        <span>${escapeHtml(customerName(order))}<br>${escapeHtml(order.fulfillment?.type || "pickup")} / ${escapeHtml(formatDate(order.fulfillment?.date))} / ${escapeHtml(order.fulfillment?.window || "window")}</span>
        <strong>${escapeHtml(order.total_meals || 0)} meals</strong>
      </div>
    `).join("")
    : elements.emptyTemplate.innerHTML;

  const recent = orders
    .flatMap((order) => (ensureOps(order).history || []).map((entry) => ({ order, entry })))
    .slice(-8)
    .reverse();
  elements.activityFeed.innerHTML = recent.length
    ? recent.map(({ order, entry }) => `
      <div class="feed-item">
        <span>${escapeHtml(entry)}<br>${escapeHtml(customerName(order))}</span>
        <strong>${escapeHtml(order.status)}</strong>
      </div>
    `).join("")
    : elements.emptyTemplate.innerHTML;
}

function renderCapacity() {
  const activeMealCount = totalMeals(activeOrders());
  const load = Math.min(100, percent(activeMealCount, capacityTarget));
  elements.capacityFill.style.setProperty("--fill", `${load}%`);
  elements.capacityText.textContent =
    activeMealCount > capacityTarget
      ? `${activeMealCount} active meals. Kitchen is over the planned ${capacityTarget}-meal daily comfort target.`
      : `${activeMealCount} active meals against a ${capacityTarget}-meal comfort target.`;

  const pickup = orders.filter((order) => order.fulfillment?.type === "pickup").length;
  const delivery = orders.filter((order) => order.fulfillment?.type === "delivery").length;
  elements.fulfillmentMix.innerHTML = [
    ["Pickup", pickup, `${percent(pickup, Math.max(orders.length, 1))}% of tickets`],
    ["Delivery", delivery, `${percent(delivery, Math.max(orders.length, 1))}% of tickets`],
  ]
    .map(([label, value, helper]) => `
      <div class="mini-stat">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(helper)}</small>
      </div>
    `)
    .join("");
}

function render() {
  renderClock();
  renderKpis();
  renderTickets();
  renderPrepBoard();
  renderPipeline();
  renderDailyBrief();
  renderPaymentWatch();
  renderCustomerFollowups();
  renderDeliveryRoute();
  renderAllergyWatch();
  renderOwnerLists();
  renderCapacity();
}

function addHistory(order, message) {
  const ops = ensureOps(order);
  ops.history = [...(ops.history || []), `${message} ${formatTime(nowIso())}`].slice(-10);
}

async function persistTicketUpdate(id, field, value) {
  if (!serverBacked) return;
  try {
    const data = await apiJson("api/admin-orders.php", {
      method: "POST",
      body: JSON.stringify({ action: "update_ticket", id, field, value }),
    });
    applyServerData(data);
    updateSyncStatus("Server source");
  } catch {
    serverBacked = false;
    updateSyncStatus("Local fallback");
  }
}

function updateTicket(id, field, value) {
  const order = orders.find((item) => item.id === id);
  if (!order) return;
  const ops = ensureOps(order);

  if (field === "status") {
    order.status = value;
    addHistory(order, `Status moved to ${value}`);
  } else if (field === "station") {
    ops.station = value;
    addHistory(order, `Station set to ${value}`);
  } else if (field === "priority") {
    ops.priority = Boolean(value);
    addHistory(order, value ? "Priority flagged" : "Priority removed");
  } else if (field === "paid") {
    ops.paid = Boolean(value);
    addHistory(order, value ? "Payment marked" : "Payment unmarked");
  } else if (field === "note") {
    ops.note = value;
  }

  saveState();
  render();
  persistTicketUpdate(id, field, value);
}

async function loadDemoDay() {
  if (serverBacked) {
    try {
      const data = await apiJson("api/admin-orders.php", {
        method: "POST",
        body: JSON.stringify({ action: "seed_demo_day" }),
      });
      applyServerData(data);
      updateSyncStatus("Server source");
      return;
    } catch {
      serverBacked = false;
      updateSyncStatus("Local fallback");
    }
  }

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const isoToday = today.toISOString().slice(0, 10);
  const isoTomorrow = tomorrow.toISOString().slice(0, 10);
  orders = [
    makeDemoOrder("MPR-DEMO-101", "Sarah Martinez", "pickup", isoToday, "morning", "In prep", 18, 224.5, "Chicken", "Jasmine Rice", ["Broccoli", "Peppers"], "Chimichurri"),
    makeDemoOrder("MPR-DEMO-102", "Trevor Blake", "delivery", isoToday, "midday", "New", 12, 156, "Steak", "Potatoes", ["Green Beans"], "Garlic Aioli"),
    makeDemoOrder("MPR-DEMO-103", "HB Training Club", "pickup", isoToday, "evening", "Ready", 32, 416, "Salmon", "Quinoa", ["Asparagus"], "Lemon Herb"),
    makeDemoOrder("MPR-DEMO-104", "Jessica Lee", "delivery", isoTomorrow, "morning", "New", 10, 105, "Eggs", "Potatoes", ["Peppers"], "Salsa"),
  ];
  opsState = {
    "MPR-DEMO-101": { station: "Grill", priority: true, paid: true, note: "Sauce on side for 6 meals.", history: ["Demo ticket imported", "Station set to Grill"] },
    "MPR-DEMO-102": { station: "Unassigned", priority: false, paid: false, note: "Confirm gate code before delivery.", history: ["Demo ticket imported"] },
    "MPR-DEMO-103": { station: "Packout", priority: false, paid: true, note: "Group order. Label bags by athlete.", history: ["Demo ticket imported", "Status moved to Ready"] },
    "MPR-DEMO-104": { station: "Cold line", priority: false, paid: true, note: "", history: ["Demo ticket imported"] },
  };
  saveState();
  render();
}

function makeDemoOrder(id, name, type, date, window, status, meals, total, protein, carb, vegetables, sauce) {
  return {
    id,
    status,
    created_at: nowIso(),
    customer: {
      name,
      phone: "7145550100",
      email: "",
    },
    fulfillment: {
      type,
      date,
      window,
      notes: "",
    },
    total_meals: meals,
    estimated_total: total,
    cart: [
      {
        title: "medium custom meal build",
        quantity: meals,
        unitPrice: Number((total / meals).toFixed(2)),
        total,
        summary: `${protein} + ${carb} + ${vegetables.join(" + ")} + ${sauce}`,
        groups: [
          { label: "Protein", selected: [{ name: protein }] },
          { label: "Grain", selected: [{ name: carb }] },
          { label: "Vegetables", selected: vegetables.map((name) => ({ name })) },
          { label: "Sauce", selected: [{ name: sauce }] },
        ],
      },
    ],
  };
}

function exportDay() {
  const payload = {
    exported_at: nowIso(),
    source: "meal-prep-revolution-admin",
    orders,
    opsState,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mpr-admin-export-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelector("#refreshAdmin").addEventListener("click", () => {
  loadState();
  render();
  loadServerState();
});

document.querySelector("#lockAdmin").addEventListener("click", lockAdmin);
document.querySelector("#seedDemoDay").addEventListener("click", () => {
  loadDemoDay();
});
document.querySelector("#printKitchen").addEventListener("click", () => window.print());
document.querySelector("#exportDay").addEventListener("click", exportDay);
elements.copyDailyBrief?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(latestDailyBrief || buildDailyBriefText());
    elements.copyDailyBrief.textContent = "Copied";
    window.setTimeout(() => {
      elements.copyDailyBrief.textContent = "Copy";
    }, 1400);
  } catch {
    elements.copyDailyBrief.textContent = "Select text";
    window.setTimeout(() => {
      elements.copyDailyBrief.textContent = "Copy";
    }, 1800);
  }
});
elements.gateForm.addEventListener("submit", submitAdminGate);

document.querySelector("#clearFulfilled").addEventListener("click", () => {
  if (!window.confirm("Clear fulfilled tickets from this admin queue?")) return;
  if (serverBacked) {
    apiJson("api/admin-orders.php", {
      method: "POST",
      body: JSON.stringify({ action: "clear_fulfilled" }),
    })
      .then((data) => {
        applyServerData(data);
        updateSyncStatus("Server source");
      })
      .catch(() => {
        serverBacked = false;
        updateSyncStatus("Local fallback");
      });
    return;
  }
  orders = orders.filter((order) => order.status !== "Fulfilled");
  saveState();
  render();
});

[elements.statusFilter, elements.fulfillmentFilter].forEach((control) => {
  control.addEventListener("change", renderTickets);
});

elements.ticketSearch.addEventListener("input", renderTickets);

elements.kitchenTickets.addEventListener("change", (event) => {
  const target = event.target;
  const id = target.dataset.ticket;
  const field = target.dataset.field;
  if (!id || !field) return;
  const value = target.type === "checkbox" ? target.checked : target.value;
  updateTicket(id, field, value);
});

elements.kitchenTickets.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.field !== "note") return;
  const order = orders.find((item) => item.id === target.dataset.ticket);
  if (!order) return;
  ensureOps(order).note = target.value;
  saveState();
});

elements.kitchenTickets.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='bump']");
  if (!button) return;
  const order = orders.find((item) => item.id === button.dataset.ticket);
  if (!order) return;
  updateTicket(order.id, "status", orderStatusNext(order.status));
});

window.addEventListener("storage", (event) => {
  if (![storageKeys.queue, storageKeys.ops].includes(event.key)) return;
  if (!authSessionIsValid()) return;
  loadState();
  render();
});

async function bootAdmin() {
  if (await serverAuthIsValid()) {
    sessionStorage.setItem(storageKeys.auth, JSON.stringify({ server: true, unlockedAt: Date.now() }));
    showAdminApp();
  } else if (localPreviewIsAllowed() || await hostedPreviewIsAllowed()) {
    sessionStorage.setItem(storageKeys.auth, JSON.stringify({ preview: true, unlockedAt: Date.now() }));
    showAdminApp();
  } else {
    showAdminGate();
  }
}

bootAdmin();
window.setInterval(renderClock, 30000);
