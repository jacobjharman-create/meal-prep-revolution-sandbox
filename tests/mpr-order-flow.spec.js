const { test, expect } = require("@playwright/test");

const sampleOrderResponse = {
  stored: true,
  server_backed: true,
  request_id: "MPR-E2E-001",
  checkout_url: "https://ordermealpreprevolution.square.site/",
  payment_status: "Pending checkout",
  recurring_prompt: true,
};

const sampleAdminPayload = {
  orders: [
    {
      id: "MPR-E2E-201",
      status: "Ready",
      payment_status: "Paid",
      checkout_url: "https://ordermealpreprevolution.square.site/",
      created_at: "2026-06-13T15:00:00Z",
      updated_at: "2026-06-13T15:00:00Z",
      customer: {
        name: "Sarah Martinez",
        phone: "7145550100",
        email: "",
        fulfillment: "pickup",
        date: "2026-06-14",
        window: "morning",
        notes: "",
        allergies: "",
        contact_preference: "text",
        address: { street: "", unit: "", city: "" },
      },
      fulfillment: {
        type: "pickup",
        date: "2026-06-14",
        window: "morning",
        notes: "",
        allergies: "",
        address: { street: "", unit: "", city: "" },
        contact_preference: "text",
      },
      total_meals: 12,
      estimated_total: 156,
      line_items: [
        {
          name: "medium custom meal build",
          quantity: 12,
          unit_price: 13,
          line_total: 156,
          summary: "Chicken + Jasmine Rice + Broccoli + Chimichurri",
          builder_groups: [
            { id: "protein", label: "Protein", selected: ["Chicken"] },
            { id: "grain", label: "Grain", selected: ["Jasmine Rice"] },
            { id: "vegetables", label: "Vegetables", selected: ["Broccoli"] },
            { id: "sauce", label: "Sauce", selected: ["Chimichurri"] },
          ],
        },
      ],
      cart: [],
      events: [],
    },
  ],
  opsState: {
    "MPR-E2E-201": {
      station: "Packout",
      priority: false,
      paid: true,
      note: "Label pickup bag.",
      history: ["Imported"],
    },
  },
  customerInsights: {
    total_customers: 1,
    returning_customers: 0,
    recurring_interested: 0,
    lifetime_meals: 12,
  },
  customerFollowups: [],
  source: "test",
  updated_at: "2026-06-13T15:00:00Z",
};

test.describe("customer checkout review", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });

  test("creates a concise checkout review with wallet and repeat options", async ({ page }) => {
    let submittedOrder;
    let recurringEvent;

    await page.addInitScript(() => localStorage.clear());
    await page.route("**/api/orders.php", async (route) => {
      submittedOrder = route.request().postDataJSON();
      await route.fulfill({ status: 201, json: sampleOrderResponse });
    });
    await page.route("**/api/order-event.php", async (route) => {
      recurringEvent = route.request().postDataJSON();
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.goto("/");
    await expect(page.locator("#addMeal")).toBeVisible();

    await page.locator("#addMeal").click();
    await expect(page.locator(".cart-item")).toHaveCount(1);
    await expect(page.locator(".cart-meal-thumb img")).toHaveAttribute("src", /protein-steak/);
    await expect(page.locator("#cartMealTotal")).toHaveText("12");
    await expect(page.locator("#cartPriceTotal")).toHaveText("$156.00");
    await expect(page.locator(".cart-item")).toContainText("12 meals in cart");
    await expect(page.locator(".cart-item")).not.toContainText("AI MEAL PHOTO");

    await page.locator("#customerName").fill("Jacob Harman");
    await page.locator("#customerPhone").fill("7148093485");
    await page.locator("#submitOrder").click();

    await expect(page.locator("#purchaseActions")).toBeVisible();
    await expect(page.locator("#submitOrder")).toHaveText("Checkout Ready");
    await expect(page.locator("[data-checkout-wallet='Apple Pay']")).toBeVisible();
    await expect(page.locator("[data-checkout-wallet='Amazon Pay']")).toBeVisible();
    await expect(page.locator("#orderDetailsCompact")).toBeVisible();
    await expect(page.locator("#orderIntake")).toBeHidden();

    await page.locator("[data-recurring='weekly']").click();
    await expect(page.locator("[data-recurring='weekly']")).toHaveClass(/is-selected/);
    await expect(page.locator("#checkoutStatus")).toContainText("weekly");

    expect(submittedOrder.total_meals).toBe(12);
    expect(submittedOrder.line_items[0].preview_image).toContain("protein-steak");
    expect(submittedOrder.line_items[0].summary).toContain("Protein: Steak");
    expect(recurringEvent).toMatchObject({
      request_id: "MPR-E2E-001",
      event: "recurring_selected",
      frequency: "weekly",
    });
  });
});

test.describe("admin owner handoff", () => {
  test.use({
    viewport: { width: 1280, height: 900 },
    permissions: ["clipboard-read", "clipboard-write"],
  });

  test("copies a useful handoff summary from the owner panel", async ({ page, context, baseURL }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin: baseURL });
    await page.route("**/api/admin-orders.php?preview=1", async (route) => {
      await route.fulfill({ status: 200, json: sampleAdminPayload });
    });

    await page.goto("/admin.html?preview=1");
    await expect(page.locator("body")).not.toHaveClass(/admin-locked/);
    await expect(page.locator("[data-action='copy-handoff']")).toBeVisible();

    await page.locator("[data-action='copy-handoff']").first().click();
    await expect(page.locator("[data-action='copy-handoff']").first()).toHaveText("Copied");

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toContain("HANDOFF - Sarah Martinez / MPR-E2E-201");
    expect(clipboard).toContain("12 meals / pickup");
    expect(clipboard).toContain("Payment: Paid");
    expect(clipboard).toContain("Verify payment, labels, bags, and handoff details before release.");
  });
});
