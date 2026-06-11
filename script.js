const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const mealImages = {
  chicken: "assets/images/black-container-builder/protein-chicken.png",
  steak: "assets/images/black-container-builder/protein-steak.png",
  salmon: "assets/images/black-container-builder/protein-salmon.png",
  salad: "assets/images/black-container-builder/veg-asparagus.png",
  breakfast: "assets/images/breakfast-black-container.png",
  pack: "assets/images/black-container-builder/protein-chicken.png",
};

const builderItemImages = {
  chicken: "assets/images/black-container-builder/protein-chicken.png",
  steak: "assets/images/black-container-builder/protein-steak.png",
  salmon: "assets/images/black-container-builder/protein-salmon.png",
  turkey: "assets/images/black-container-builder/protein-turkey.png",
  shrimp: "assets/images/black-container-builder/protein-shrimp.png",
  tofu: "assets/images/black-container-builder/protein-tofu.png",
  eggs: "assets/images/black-container-builder/protein-eggs.png",
  meatballs: "assets/images/black-container-builder/protein-meatballs.png",
  "jasmine-rice": "assets/images/black-container-builder/grain-jasmine-rice.png",
  "sweet-potato": "assets/images/black-container-builder/grain-sweet-potato.png",
  quinoa: "assets/images/black-container-builder/grain-quinoa.png",
  "brown-rice": "assets/images/black-container-builder/grain-brown-rice.png",
  potatoes: "assets/images/black-container-builder/grain-potatoes.png",
  "cauli-rice": "assets/images/black-container-builder/grain-cauli-rice.png",
  noodles: "assets/images/black-container-builder/grain-noodles.png",
  "black-beans": "assets/images/black-container-builder/grain-black-beans.png",
  broccoli: "assets/images/black-container-builder/veg-broccoli.png",
  asparagus: "assets/images/black-container-builder/veg-asparagus.png",
  peppers: "assets/images/black-container-builder/veg-peppers.png",
  "green-beans": "assets/images/black-container-builder/veg-green-beans.png",
  spinach: "assets/images/black-container-builder/veg-spinach.png",
  carrots: "assets/images/black-container-builder/veg-carrots.png",
  zucchini: "assets/images/black-container-builder/veg-zucchini.png",
  sprouts: "assets/images/black-container-builder/veg-sprouts.png",
  "lemon-herb": "assets/images/black-container-builder/sauce-lemon-herb.png",
  chimichurri: "assets/images/black-container-builder/sauce-chimichurri.png",
  teriyaki: "assets/images/black-container-builder/sauce-teriyaki.png",
  buffalo: "assets/images/black-container-builder/sauce-buffalo.png",
  "garlic-aioli": "assets/images/black-container-builder/sauce-garlic-aioli.png",
  "salsa-verde": "assets/images/black-container-builder/sauce-salsa-verde.png",
  tahini: "assets/images/black-container-builder/sauce-tahini.png",
  none: "assets/images/black-container-builder/sauce-none.png",
};

const menus = {
  build: [
    ["Lemon Herb Chicken", "Jasmine rice, roasted broccoli, red bell peppers.", "$12.49+", mealImages.chicken],
    ["Garlic Steak Plate", "Mashed potatoes, green beans, chimichurri.", "$14.49+", mealImages.steak],
    ["Honey Garlic Salmon", "Quinoa, asparagus, lemon tahini.", "$14.49+", mealImages.salmon],
    ["Custom Performance Bowl", "Pick your protein, carb, vegetables, and sauce.", "Build", mealImages.pack],
  ],
  favorites: [
    ["Buffalo Chicken Bowl", "Rice, broccoli, carrots, and cooling ranch on the side.", "$12.49+", mealImages.chicken],
    ["Steakhouse Prep", "Lean steak, potatoes, green beans, and house seasoning.", "$14.49+", mealImages.steak],
    ["Teriyaki Chicken", "White rice, vegetables, and sweet-savory sauce.", "$12.49+", mealImages.pack],
    ["Salmon Power Plate", "Salmon, quinoa, asparagus, and lemon.", "$14.49+", mealImages.salmon],
  ],
  breakfast: [
    ["Protein Breakfast Bowl", "Eggs, potatoes, turkey, and fresh salsa.", "$10.49+", mealImages.breakfast],
    ["Clean Morning Stack", "Balanced breakfast built for busy mornings.", "$10.49+", mealImages.pack],
    ["Greek Yogurt Cup", "Fruit-forward, simple, and ready fast.", "$7.49+", mealImages.breakfast],
    ["Breakfast Pack", "Stock the fridge for the early part of the week.", "Order", mealImages.breakfast],
  ],
  salads: [
    ["Buffalo Chicken Salad", "Romaine, cucumber, tomato, carrots, blue cheese.", "$11.49+", mealImages.salad],
    ["Steak Green Bowl", "Greens, steak, crisp vegetables, and house dressing.", "$13.49+", mealImages.steak],
    ["Salmon Citrus Salad", "Fresh greens, salmon, citrus, and lemon.", "$13.49+", mealImages.salmon],
    ["Build Your Salad", "Start fresh, then add the protein that fits your day.", "Build", mealImages.salad],
  ],
  packs: [
    ["Family Protein Pack", "A flexible base for dinners and lunches.", "Order", mealImages.pack],
    ["Workweek Stack", "Meals grouped for a cleaner Monday through Friday.", "Order", mealImages.chicken],
    ["Challenge Meal Pack", "Simple, repeatable meals for a focused block.", "Order", mealImages.steak],
    ["Mixed Prep Pack", "Variety without committing to a subscription.", "Order", mealImages.salmon],
  ],
  bulk: [
    ["Bulk Chicken", "Perfect for high-protein weeks and simple dinners.", "Order", mealImages.chicken],
    ["Bulk Steak", "Prepared protein ready for meals your way.", "Order", mealImages.steak],
    ["Bulk Carbs", "Rice, potatoes, and sides for faster planning.", "Order", mealImages.pack],
    ["Flavor Station", "Sauces and add-ons to keep the week moving.", "Order", mealImages.salad],
  ],
};

const recommendations = {
  protein: "Build a Meal, Bulk Items, and Stacks & Packs are the fastest path for high-protein weeks.",
  lean: "Start with Build a Meal and Salads for lighter plates with clean proteins and fresh vegetables.",
  balanced: "Fan Favorites and Build a Meal give you enough variety without planning every lunch from scratch.",
  family: "Stacks & Packs make it easier to cover more people without locking into a subscription.",
  bulk: "Bulk Items and Flavor Station let you stock proteins, carbs, and sauces for flexible meals all week.",
};

const portionPricing = {
  breakfast: {
    small: 9.5,
    medium: 10.5,
    large: 12.5,
  },
  lunch: {
    small: 11,
    medium: 13,
    large: 15,
  },
};

const builderCatalog = {
  breakfast: {
    label: "Breakfast",
    mealLabel: "breakfast",
    hero: "assets/images/breakfast-black-container.png",
    defaultPortion: "medium",
    defaultGroup: "protein",
    groups: [
      {
        id: "protein",
        label: "Protein",
        icon: "icon-protein",
        multi: false,
        options: [
          { id: "eggs", name: "Eggs", image: builderItemImages.eggs },
          { id: "turkey", name: "Turkey", image: builderItemImages.turkey },
          { id: "steak", name: "Steak", image: builderItemImages.steak },
          { id: "tofu", name: "Tofu", image: builderItemImages.tofu },
          { id: "chicken", name: "Chicken", image: builderItemImages.chicken },
          { id: "salmon", name: "Salmon", image: builderItemImages.salmon },
          { id: "shrimp", name: "Shrimp", image: builderItemImages.shrimp },
          { id: "meatballs", name: "Meatballs", image: builderItemImages.meatballs },
        ],
      },
      {
        id: "base",
        label: "Base",
        icon: "icon-carb",
        multi: false,
        options: [
          { id: "potatoes", name: "Potatoes", image: builderItemImages.potatoes },
          { id: "oats", name: "Oats", image: builderItemImages.quinoa },
          { id: "sweet-potato", name: "Sweet Potato", image: builderItemImages["sweet-potato"] },
          { id: "rice", name: "Rice", image: builderItemImages["jasmine-rice"] },
          { id: "beans", name: "Beans", image: builderItemImages["black-beans"] },
          { id: "cauli-rice", name: "Cauli Rice", image: builderItemImages["cauli-rice"] },
          { id: "noodles", name: "Noodles", image: builderItemImages.noodles },
          { id: "no-base", name: "No Base", image: builderItemImages.none },
        ],
      },
      {
        id: "fruit",
        label: "Fruit",
        icon: "icon-leaf",
        multi: true,
        options: [
          { id: "berries", name: "Berries", image: builderItemImages.peppers },
          { id: "avocado", name: "Avocado", image: builderItemImages.asparagus },
          { id: "banana", name: "Banana", image: builderItemImages["sweet-potato"] },
          { id: "apple", name: "Apple", image: builderItemImages.carrots },
          { id: "pineapple", name: "Pineapple", image: builderItemImages.potatoes },
          { id: "spinach", name: "Spinach", image: builderItemImages.spinach },
          { id: "peppers", name: "Peppers", image: builderItemImages.peppers },
          { id: "no-fruit", name: "No Fruit", image: builderItemImages.none },
        ],
      },
      {
        id: "sauce",
        label: "Sauce",
        icon: "icon-drop",
        multi: false,
        options: [
          { id: "salsa-verde", name: "Salsa", image: builderItemImages["salsa-verde"] },
          { id: "lemon-herb", name: "Lemon Herb", image: builderItemImages["lemon-herb"] },
          { id: "buffalo", name: "Buffalo", image: builderItemImages.buffalo },
          { id: "garlic-aioli", name: "Aioli", image: builderItemImages["garlic-aioli"] },
          { id: "teriyaki", name: "Teriyaki", image: builderItemImages.teriyaki },
          { id: "chimichurri", name: "Chimichurri", image: builderItemImages.chimichurri },
          { id: "tahini", name: "Tahini", image: builderItemImages.tahini },
          { id: "none", name: "No Sauce", image: builderItemImages.none },
        ],
      },
    ],
    defaults: {
      protein: "eggs",
      base: "potatoes",
      fruit: ["berries"],
      sauce: "salsa-verde",
    },
  },
  lunch: {
    label: "Lunch / Dinner",
    mealLabel: "lunch/dinner",
    hero: "assets/images/steak-black-container.png",
    defaultPortion: "large",
    defaultGroup: "protein",
    groups: [
      {
        id: "protein",
        label: "Protein",
        icon: "icon-protein",
        multi: false,
        options: [
          { id: "chicken", name: "Chicken", image: builderItemImages.chicken },
          { id: "steak", name: "Steak", image: builderItemImages.steak },
          { id: "salmon", name: "Salmon", image: builderItemImages.salmon },
          { id: "turkey", name: "Turkey", image: builderItemImages.turkey },
          { id: "shrimp", name: "Shrimp", image: builderItemImages.shrimp },
          { id: "tofu", name: "Tofu", image: builderItemImages.tofu },
          { id: "eggs", name: "Eggs", image: builderItemImages.eggs },
          { id: "meatballs", name: "Meatballs", image: builderItemImages.meatballs },
        ],
      },
      {
        id: "grain",
        label: "Grain",
        icon: "icon-carb",
        multi: false,
        options: [
          { id: "jasmine-rice", name: "Rice", image: builderItemImages["jasmine-rice"] },
          { id: "sweet-potato", name: "Sweet Potato", image: builderItemImages["sweet-potato"] },
          { id: "quinoa", name: "Quinoa", image: builderItemImages.quinoa },
          { id: "brown-rice", name: "Brown Rice", image: builderItemImages["brown-rice"] },
          { id: "potatoes", name: "Potatoes", image: builderItemImages.potatoes },
          { id: "cauli-rice", name: "Cauli Rice", image: builderItemImages["cauli-rice"] },
          { id: "noodles", name: "Noodles", image: builderItemImages.noodles },
          { id: "black-beans", name: "Black Beans", image: builderItemImages["black-beans"] },
        ],
      },
      {
        id: "vegetables",
        label: "Vegetables",
        icon: "icon-leaf",
        multi: true,
        options: [
          { id: "broccoli", name: "Broccoli", image: builderItemImages.broccoli },
          { id: "asparagus", name: "Asparagus", image: builderItemImages.asparagus },
          { id: "peppers", name: "Peppers", image: builderItemImages.peppers },
          { id: "green-beans", name: "Green Beans", image: builderItemImages["green-beans"] },
          { id: "spinach", name: "Spinach", image: builderItemImages.spinach },
          { id: "carrots", name: "Carrots", image: builderItemImages.carrots },
          { id: "zucchini", name: "Zucchini", image: builderItemImages.zucchini },
          { id: "sprouts", name: "Sprouts", image: builderItemImages.sprouts },
        ],
      },
      {
        id: "sauce",
        label: "Sauce",
        icon: "icon-drop",
        multi: false,
        options: [
          { id: "lemon-herb", name: "Lemon Herb", image: builderItemImages["lemon-herb"] },
          { id: "chimichurri", name: "Chimichurri", image: builderItemImages.chimichurri },
          { id: "teriyaki", name: "Teriyaki", image: builderItemImages.teriyaki },
          { id: "buffalo", name: "Buffalo", image: builderItemImages.buffalo },
          { id: "garlic-aioli", name: "Aioli", image: builderItemImages["garlic-aioli"] },
          { id: "salsa-verde", name: "Salsa Verde", image: builderItemImages["salsa-verde"] },
          { id: "tahini", name: "Tahini", image: builderItemImages.tahini },
          { id: "none", name: "No Sauce", image: builderItemImages.none },
        ],
      },
    ],
    defaults: {
      protein: "steak",
      grain: "jasmine-rice",
      vegetables: ["broccoli"],
      sauce: "chimichurri",
    },
  },
};

const heroByProtein = {
  breakfast: {
    eggs: "assets/images/breakfast-black-container.png",
    turkey: "assets/images/breakfast-black-container.png",
    steak: "assets/images/steak-black-container.png",
    tofu: "assets/images/breakfast-black-container.png",
  },
  lunch: {
    chicken: "assets/images/chicken-black-container.png",
    steak: "assets/images/steak-black-container.png",
    salmon: "assets/images/salmon-black-container.png",
  },
};

const builderState = {
  mode: "breakfast",
  portion: "medium",
  activeGroup: "protein",
  quantity: 12,
  selections: {
    breakfast: cloneData(builderCatalog.breakfast.defaults),
    lunch: cloneData(builderCatalog.lunch.defaults),
  },
  cart: [],
  reviewReady: false,
};

const menuGrid = document.querySelector("#mealGrid");
const categoryLink = document.querySelector("#categoryLink");
const modeButtons = document.querySelectorAll("[data-mode]");
const portionButtons = document.querySelectorAll("[data-portion]");
const builderGroups = document.querySelector("#builderGroups");
const builderOptions = document.querySelector("#builderOptions");
const builderHeroImage = document.querySelector("#builderHeroImage");
const selectionStack = document.querySelector("#selectionStack");
const mealQuantity = document.querySelector("#mealQuantity");
const heroTotal = document.querySelector("#heroTotal");
const currentMealLabel = document.querySelector("#currentMealLabel");
const currentAverage = document.querySelector("#currentAverage");
const currentTotal = document.querySelector("#currentTotal");
const addMealButton = document.querySelector("#addMeal");
const cartItems = document.querySelector("#cartItems");
const cartMealTotal = document.querySelector("#cartMealTotal");
const cartPriceTotal = document.querySelector("#cartPriceTotal");
const orderNote = document.querySelector("#orderNote");
const purchaseActions = document.querySelector("#purchaseActions");
const wooPayload = document.querySelector("#wooPayload");
const copyWooPayload = document.querySelector("#copyWooPayload");
let lastHeroImage = builderHeroImage?.getAttribute("src") || "";

function dollars(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function moneyCompact(value) {
  return dollars(value).replace(".00", "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function getCurrentMode() {
  return builderCatalog[builderState.mode];
}

function getCurrentGroup() {
  return getCurrentMode().groups.find((group) => group.id === builderState.activeGroup);
}

function getOption(groupId, optionId, mode = builderState.mode) {
  if (!optionId) return null;
  const group = builderCatalog[mode].groups.find((item) => item.id === groupId);
  return group?.options.find((item) => item.id === optionId) || null;
}

function selectedOptions(groupId, mode = builderState.mode) {
  const group = builderCatalog[mode].groups.find((item) => item.id === groupId);
  const value = builderState.selections[mode][groupId];
  if (!group) return [];
  if (group.multi) {
    return (value || []).map((id) => getOption(groupId, id, mode)).filter(Boolean);
  }
  return [getOption(groupId, value, mode)].filter(Boolean);
}

function currentBuild() {
  const mode = getCurrentMode();
  const groups = mode.groups.map((group) => ({
    id: group.id,
    label: group.label,
    selected: selectedOptions(group.id),
  }));
  const protein = selectedOptions("protein")[0];
  const unitPrice = portionPricing[builderState.mode][builderState.portion];
  const total = unitPrice * builderState.quantity;
  const summary = groups
    .map((group) => group.selected.map((item) => item.name).join(" + "))
    .filter(Boolean)
    .slice(0, 3)
    .join(" + ");
  const key = [
    builderState.mode,
    builderState.portion,
    builderState.quantity,
    ...groups.map((group) => `${group.id}:${group.selected.map((item) => item.id).sort().join("+") || "none"}`),
  ].join("|");
  const hero = heroByProtein[builderState.mode]?.[protein?.id] || mode.hero;
  const title = `${builderState.portion} ${mode.mealLabel} build`;
  const description = groups
    .map((group) => `${group.label}: ${group.selected.map((item) => item.name).join(", ") || "None"}`)
    .join(" / ");

  return {
    key,
    mode: builderState.mode,
    mealType: mode.mealLabel,
    portion: builderState.portion,
    quantity: builderState.quantity,
    unitPrice,
    total,
    avg: unitPrice,
    title,
    description,
    summary,
    hero,
    groups,
    selections: Object.fromEntries(groups.map((group) => [group.id, group.selected.map((item) => item.name)])),
  };
}

function setImageWithSlide(image, src) {
  if (!image || !src || lastHeroImage === src) return;
  lastHeroImage = src;
  image.classList.remove("slide-in");
  image.classList.add("slide-out");
  window.setTimeout(() => {
    image.src = src;
    image.classList.remove("slide-out");
    void image.offsetWidth;
    image.classList.add("slide-in");
  }, 120);
}

function renderMenu(category) {
  if (!menuGrid || !categoryLink) return;
  menuGrid.innerHTML = menus[category]
    .map(([title, desc, price, image]) => `
      <article class="meal-card">
        <img src="${image}" alt="${title}">
        <div class="meal-card-body">
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="meal-card-footer">
            <span>${price}</span>
            <a href="${squareLinks[category]}">Build</a>
          </div>
        </div>
      </article>
    `)
    .join("");
  categoryLink.href = squareLinks[category];
}

function renderToggles() {
  modeButtons.forEach((button) => {
    const active = button.dataset.mode === builderState.mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  portionButtons.forEach((button) => {
    const active = button.dataset.portion === builderState.portion;
    const price = portionPricing[builderState.mode][button.dataset.portion];
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-checked", String(active));
    button.querySelector("span").textContent = dollars(price);
  });
}

function renderGroups() {
  const mode = getCurrentMode();
  builderGroups.innerHTML = mode.groups
    .map((group) => `
      <button class="builder-step${group.id === builderState.activeGroup ? " active" : ""}" type="button" data-builder-step="${group.id}" aria-pressed="${group.id === builderState.activeGroup}">
        <span class="icon ${group.icon}"></span>
        <strong>${escapeHtml(group.label)}</strong>
      </button>
    `)
    .join("");
}

function renderOptions() {
  const group = getCurrentGroup();
  const selectedValue = builderState.selections[builderState.mode][group.id];
  builderOptions.innerHTML = group.options
    .map((option) => {
      const selected = group.multi ? (selectedValue || []).includes(option.id) : selectedValue === option.id;
      return `
        <button class="option-card${selected ? " selected" : ""}" type="button" data-option="${option.id}" aria-pressed="${selected}">
          <span class="food-thumb" aria-hidden="true">
            <img src="${option.image}" alt="">
          </span>
          <strong>${escapeHtml(option.name)}</strong>
        </button>
      `;
    })
    .join("");
}

function renderCurrentBuild() {
  const build = currentBuild();
  const mealLabel = `${build.quantity} ${build.portion} ${build.mealType} meals`;
  setImageWithSlide(builderHeroImage, build.hero);
  builderHeroImage.alt = `${build.title} preview`;
  heroTotal.textContent = moneyCompact(build.total);
  currentTotal.textContent = moneyCompact(build.total);
  currentMealLabel.textContent = mealLabel;
  currentAverage.textContent = `Avg ${dollars(build.avg)}/meal`;
  addMealButton.textContent = `Add ${build.quantity}`;
  mealQuantity.value = build.quantity;

  selectionStack.innerHTML = build.groups
    .map((group) => {
      const names = group.selected.map((item) => item.name);
      return names.length
        ? `<span><small>${escapeHtml(group.label)}</small>${names.map((name) => `<strong>${escapeHtml(name)}</strong>`).join("")}</span>`
        : "";
    })
    .filter(Boolean)
    .join("");
}

function buildWooPayload() {
  const lines = builderState.cart.map((item) => ({
    sku: `mpr-${item.mode}-${item.portion}-custom-meal`,
    name: item.title,
    quantity: item.quantity,
    unit_price: item.unitPrice,
    line_total: item.total,
    meta_data: [
      { key: "Meal Type", value: item.mealType },
      { key: "Portion", value: item.portion },
      { key: "Average Meal Price", value: dollars(item.avg) },
      { key: "Selections", value: item.description },
    ],
  }));
  const totalMeals = lines.reduce((sum, line) => sum + line.quantity, 0);
  const totalPrice = lines.reduce((sum, line) => sum + line.line_total, 0);

  return {
    source: "meal-prep-revolution-sandbox-builder",
    version: "2026-06-11",
    currency: "USD",
    total_meals: totalMeals,
    estimated_total: Number(totalPrice.toFixed(2)),
    line_items: lines,
  };
}

function renderCart() {
  if (!builderState.cart.length) {
    cartItems.innerHTML = `<div class="cart-empty">Your WooCommerce order draft will appear here after you add a build.</div>`;
  } else {
    cartItems.innerHTML = builderState.cart
      .map((item) => `
        <article class="cart-item">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
            <small>${dollars(item.avg)}/meal</small>
          </div>
          <div class="cart-row">
            <strong>${dollars(item.total)}</strong>
            <div class="cart-qty" aria-label="${escapeHtml(item.title)} quantity">
              <button type="button" data-cart-action="decrease" data-cart-key="${item.key}" aria-label="Decrease ${escapeHtml(item.title)}">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-action="increase" data-cart-key="${item.key}" aria-label="Increase ${escapeHtml(item.title)}">+</button>
            </div>
          </div>
        </article>
      `)
      .join("");
  }

  const payload = buildWooPayload();
  cartMealTotal.textContent = payload.total_meals;
  cartPriceTotal.textContent = builderState.cart.length ? dollars(payload.estimated_total) : "Review";
  purchaseActions.hidden = !builderState.reviewReady || !builderState.cart.length;
  wooPayload.textContent = builderState.reviewReady ? JSON.stringify(payload, null, 2) : "";
  localStorage.setItem("mprWooOrderDraft", JSON.stringify(payload));
}

function renderBuilder() {
  renderToggles();
  renderGroups();
  renderOptions();
  renderCurrentBuild();
  renderCart();
}

function setQuantity(value) {
  builderState.quantity = Math.min(48, Math.max(1, Number.parseInt(value, 10) || 1));
  builderState.reviewReady = false;
  renderBuilder();
}

function addCurrentBuildToCart() {
  const build = currentBuild();
  const existing = builderState.cart.find((item) => item.key === build.key);
  builderState.reviewReady = false;

  if (existing) {
    existing.quantity += build.quantity;
    existing.total = existing.quantity * existing.unitPrice;
  } else {
    builderState.cart.push({ ...build });
  }

  orderNote.textContent = `${build.quantity} ${build.title} meals added. Prepare checkout when the stack is ready.`;
  renderCart();
}

function prepareStoreOrder() {
  if (!builderState.cart.length) {
    orderNote.textContent = "Add at least one meal build before preparing the WooCommerce order.";
    return;
  }

  builderState.reviewReady = true;
  const payload = buildWooPayload();
  renderCart();
  orderNote.innerHTML = `<strong>${dollars(payload.estimated_total)} for ${payload.total_meals} meals.</strong> WooCommerce order payload is ready for the backend handoff.`;
}

renderMenu("build");
renderBuilder();

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

document.querySelectorAll(".goal-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".goal-card").forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    document.querySelector("#goalRecommendation").textContent = recommendations[card.dataset.goal];
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextMode = button.dataset.mode;
    if (nextMode === builderState.mode) return;
    builderState.mode = nextMode;
    builderState.portion = builderCatalog[nextMode].defaultPortion;
    builderState.activeGroup = builderCatalog[nextMode].defaultGroup;
    builderState.reviewReady = false;
    renderBuilder();
  });
});

portionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    builderState.portion = button.dataset.portion;
    builderState.reviewReady = false;
    renderBuilder();
  });
});

builderGroups.addEventListener("click", (event) => {
  const button = event.target.closest("[data-builder-step]");
  if (!button) return;
  builderState.activeGroup = button.dataset.builderStep;
  renderBuilder();
});

builderOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest(".option-card");
  if (!optionButton) return;

  const group = getCurrentGroup();
  const optionId = optionButton.dataset.option;
  const current = builderState.selections[builderState.mode][group.id];

  if (group.multi) {
    builderState.selections[builderState.mode][group.id] = current.includes(optionId)
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];
  } else {
    builderState.selections[builderState.mode][group.id] = current === optionId ? null : optionId;
  }

  builderState.reviewReady = false;
  renderBuilder();
});

document.querySelector("#qtyMinus").addEventListener("click", () => setQuantity(builderState.quantity - 1));
document.querySelector("#qtyPlus").addEventListener("click", () => setQuantity(builderState.quantity + 1));
mealQuantity.addEventListener("input", () => setQuantity(mealQuantity.value));
addMealButton.addEventListener("click", addCurrentBuildToCart);
document.querySelector("#submitOrder").addEventListener("click", prepareStoreOrder);

copyWooPayload.addEventListener("click", async () => {
  const payload = JSON.stringify(buildWooPayload(), null, 2);
  await navigator.clipboard.writeText(payload);
  orderNote.textContent = "WooCommerce payload copied.";
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const item = builderState.cart.find((cartItem) => cartItem.key === button.dataset.cartKey);
  if (!item) return;

  item.quantity += button.dataset.cartAction === "increase" ? 1 : -1;
  item.total = item.quantity * item.unitPrice;
  builderState.reviewReady = false;
  builderState.cart = builderState.cart.filter((cartItem) => cartItem.quantity > 0);
  renderCart();
});

const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
});
