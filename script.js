const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const pickerImageVersion = "hires-20260612";
const pickerImage = (src) => `${src}${src.includes("?") ? "&" : "?"}v=${pickerImageVersion}`;

const mealImages = {
  chicken: "assets/images/black-plate-builder/protein-chicken.png",
  steak: "assets/images/black-plate-builder/protein-steak.png",
  salmon: "assets/images/black-plate-builder/protein-salmon.png",
  salad: "assets/images/black-plate-builder/veg-asparagus.png",
  breakfast: "assets/images/black-plate-builder/protein-eggs.png",
  pack: "assets/images/black-plate-builder/protein-chicken.png",
};

Object.keys(mealImages).forEach((key) => {
  mealImages[key] = pickerImage(mealImages[key]);
});

const builderItemImages = {
  chicken: "assets/images/black-plate-builder/protein-chicken.png",
  steak: "assets/images/black-plate-builder/protein-steak.png",
  salmon: "assets/images/black-plate-builder/protein-salmon.png",
  turkey: "assets/images/black-plate-builder/protein-turkey.png",
  shrimp: "assets/images/black-plate-builder/protein-shrimp.png",
  tofu: "assets/images/black-plate-builder/protein-tofu.png",
  eggs: "assets/images/black-plate-builder/protein-eggs.png",
  meatballs: "assets/images/black-plate-builder/protein-meatballs.png",
  "jasmine-rice": "assets/images/black-plate-builder/grain-jasmine-rice.png",
  "sweet-potato": "assets/images/black-plate-builder/grain-sweet-potato.png",
  quinoa: "assets/images/black-plate-builder/grain-quinoa.png",
  "brown-rice": "assets/images/black-plate-builder/grain-brown-rice.png",
  potatoes: "assets/images/black-plate-builder/grain-potatoes.png",
  "cauli-rice": "assets/images/black-plate-builder/grain-cauli-rice.png",
  noodles: "assets/images/black-plate-builder/grain-noodles.png",
  "black-beans": "assets/images/black-plate-builder/grain-black-beans.png",
  broccoli: "assets/images/black-plate-builder/veg-broccoli.png",
  asparagus: "assets/images/black-plate-builder/veg-asparagus.png",
  peppers: "assets/images/black-plate-builder/veg-peppers.png",
  "green-beans": "assets/images/black-plate-builder/veg-green-beans.png",
  spinach: "assets/images/black-plate-builder/veg-spinach.png",
  carrots: "assets/images/black-plate-builder/veg-carrots.png",
  zucchini: "assets/images/black-plate-builder/veg-zucchini.png",
  sprouts: "assets/images/black-plate-builder/veg-sprouts.png",
  "lemon-herb": "assets/images/black-plate-builder/sauce-lemon-herb.png?v=sauce-refresh-20260612",
  chimichurri: "assets/images/black-plate-builder/sauce-chimichurri.png?v=sauce-refresh-20260612",
  teriyaki: "assets/images/black-plate-builder/sauce-teriyaki.png?v=sauce-refresh-20260612",
  buffalo: "assets/images/black-plate-builder/sauce-buffalo.png?v=sauce-refresh-20260612",
  "garlic-aioli": "assets/images/black-plate-builder/sauce-garlic-aioli.png?v=sauce-refresh-20260612",
  "salsa-verde": "assets/images/black-plate-builder/sauce-salsa-verde.png?v=sauce-refresh-20260612",
  tahini: "assets/images/black-plate-builder/sauce-tahini.png?v=sauce-refresh-20260612",
  none: "assets/images/black-plate-builder/sauce-none.png?v=sauce-refresh-20260612",
};

Object.keys(builderItemImages).forEach((key) => {
  builderItemImages[key] = pickerImage(builderItemImages[key]);
});

const builderGroupIcons = {
  "icon-protein": {
    active: "assets/icons/set-a-exact/protein-black.png?v=set-a-exact-20260612",
    inactive: "assets/icons/set-a-exact/protein-green.png?v=set-a-exact-20260612",
  },
  "icon-carb": {
    active: "assets/icons/set-a-exact/carbs-black.png?v=set-a-exact-20260612",
    inactive: "assets/icons/set-a-exact/carbs-green.png?v=set-a-exact-20260612",
  },
  "icon-leaf": {
    active: "assets/icons/set-a-exact/vegetables-black.png?v=set-a-exact-20260612",
    inactive: "assets/icons/set-a-exact/vegetables-green.png?v=set-a-exact-20260612",
  },
  "icon-drop": {
    active: "assets/icons/set-a-exact/sauce-black.png?v=set-a-exact-20260612",
    inactive: "assets/icons/set-a-exact/sauce-green.png?v=set-a-exact-20260612",
  },
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
    hero: builderItemImages.eggs,
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
        id: "carbs",
        label: "Carbs",
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
          { id: "no-carbs", name: "No Carbs", image: builderItemImages.none },
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
          { id: "no-vegetables", name: "No Vegetables", image: builderItemImages.none },
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
      carbs: "potatoes",
      vegetables: ["peppers"],
      sauce: "salsa-verde",
    },
  },
  lunch: {
    label: "Lunch / Dinner",
    mealLabel: "lunch/dinner",
    hero: builderItemImages.steak,
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
    eggs: builderItemImages.eggs,
    turkey: builderItemImages.turkey,
    steak: builderItemImages.steak,
    tofu: builderItemImages.tofu,
  },
  lunch: {
    chicken: builderItemImages.chicken,
    steak: builderItemImages.steak,
    salmon: builderItemImages.salmon,
  },
};

const orderOsStorage = {
  queue: "mprOrderOsQueue",
  customer: "mprCustomerProfile",
  draft: "mprOrderOsDraft",
};

function readStoredJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function fulfillmentDateDefault() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().slice(0, 10);
}

const builderState = {
  mode: "breakfast",
  portion: "medium",
  activeGroup: "protein",
  portionByMode: {
    breakfast: "medium",
    lunch: "large",
  },
  activeGroupByMode: {
    breakfast: "protein",
    lunch: "protein",
  },
  quantity: 12,
  selections: {
    breakfast: cloneData(builderCatalog.breakfast.defaults),
    lunch: cloneData(builderCatalog.lunch.defaults),
  },
  featuredHeroByMode: {
    breakfast: null,
    lunch: null,
  },
  forceHeroSlide: false,
  cart: [],
  orderQueue: readStoredJson(orderOsStorage.queue, []),
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
const orderIntake = document.querySelector("#orderIntake");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerEmail = document.querySelector("#customerEmail");
const fulfillmentType = document.querySelector("#fulfillmentType");
const fulfillmentDate = document.querySelector("#fulfillmentDate");
const fulfillmentWindow = document.querySelector("#fulfillmentWindow");
const orderNotes = document.querySelector("#orderNotes");
const saveCustomerProfile = document.querySelector("#saveCustomerProfile");
const loadLastOrder = document.querySelector("#loadLastOrder");
const clearOrderOs = document.querySelector("#clearOrderOs");
const customerMemoryStatus = document.querySelector("#customerMemoryStatus");
const kitchenQueue = document.querySelector("#kitchenQueue");
const queueCount = document.querySelector("#queueCount");
const prepTotals = document.querySelector("#prepTotals");
let lastHeroImage = builderHeroImage?.getAttribute("src") || "";
let heroSlideToken = 0;

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

function getCustomerDraft() {
  return {
    name: customerName?.value.trim() || "",
    phone: customerPhone?.value.trim() || "",
    email: customerEmail?.value.trim() || "",
    fulfillment: fulfillmentType?.value || "pickup",
    date: fulfillmentDate?.value || fulfillmentDateDefault(),
    window: fulfillmentWindow?.value || "morning",
    notes: orderNotes?.value.trim() || "",
  };
}

function hydrateCustomerDraft() {
  if (!fulfillmentDate?.value) fulfillmentDate.value = fulfillmentDateDefault();
  const draft = readStoredJson(orderOsStorage.draft, {});
  const saved = readStoredJson(orderOsStorage.customer, {});
  const source = { ...saved, ...draft };

  if (customerName && source.name) customerName.value = source.name;
  if (customerPhone && source.phone) customerPhone.value = source.phone;
  if (customerEmail && source.email) customerEmail.value = source.email;
  if (fulfillmentType && source.fulfillment) fulfillmentType.value = source.fulfillment;
  if (fulfillmentDate && source.date) fulfillmentDate.value = source.date;
  if (fulfillmentWindow && source.window) fulfillmentWindow.value = source.window;
  if (orderNotes && source.notes) orderNotes.value = source.notes;
}

function customerDisplayName(customer) {
  return customer.name || customer.phone || customer.email || "Walk-in customer";
}

function validateOrderTicket(customer) {
  if (!builderState.cart.length) return "Add at least one meal build before creating an order ticket.";
  if (!customer.name) return "Add a customer name so the kitchen ticket has an owner.";
  if (!customer.phone && !customer.email) return "Add a phone or email so the order can be confirmed.";
  return "";
}

function setFeaturedHero(option) {
  if (!option?.image) return;
  builderState.featuredHeroByMode[builderState.mode] = {
    image: option.image,
    label: option.name,
  };
  builderState.forceHeroSlide = true;
}

function setFeaturedHeroFromGroup(groupId) {
  const selected = selectedOptions(groupId);
  const group = builderCatalog[builderState.mode].groups.find((item) => item.id === groupId);
  setFeaturedHero(selected[0] || group?.options[0]);
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
    ...groups.map((group) => `${group.id}:${group.selected.map((item) => item.id).sort().join("+") || "none"}`),
  ].join("|");
  const featuredHero = builderState.featuredHeroByMode[builderState.mode];
  const hero = featuredHero?.image || heroByProtein[builderState.mode]?.[protein?.id] || mode.hero;
  const title = `${builderState.portion} ${mode.mealLabel} build`;
  const heroAlt = featuredHero?.label ? `${featuredHero.label} full-screen picker preview` : `${title} preview`;
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
    heroAlt,
    groups,
    selections: Object.fromEntries(groups.map((group) => [group.id, group.selected.map((item) => item.name)])),
  };
}

function setImageWithSlide(image, src, force = false) {
  if (!image || !src) return;
  const token = ++heroSlideToken;

  if (lastHeroImage === src) {
    if (!force) return;
    image.classList.remove("slide-out", "slide-in");
    void image.offsetWidth;
    image.classList.add("slide-in");
    return;
  }

  lastHeroImage = src;
  image.classList.remove("slide-in");
  image.classList.add("slide-out");
  window.setTimeout(() => {
    if (token !== heroSlideToken) return;
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
        <img src="${image}" alt="${title}" loading="lazy" decoding="async">
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
        <span class="icon icon-svg ${group.icon}" style="width: 34px; height: 34px;"><img src="${(builderGroupIcons[group.icon] || {})[group.id === builderState.activeGroup ? "active" : "inactive"] || ""}" alt="" aria-hidden="true" loading="eager" decoding="async" style="display: block; width: 100%; height: 100%; object-fit: contain;"></span>
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
            <img src="${option.image}" alt="" loading="eager" decoding="async">
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
  setImageWithSlide(builderHeroImage, build.hero, builderState.forceHeroSlide);
  builderState.forceHeroSlide = false;
  builderHeroImage.alt = build.heroAlt;
  heroTotal.textContent = moneyCompact(build.total);
  currentTotal.textContent = moneyCompact(build.total);
  currentMealLabel.textContent = `${build.quantity} meals`;
  currentMealLabel.title = mealLabel;
  currentAverage.textContent = `Avg ${dollars(build.avg)}/meal`;
  addMealButton.textContent = `Add ${build.quantity}`;
  mealQuantity.value = build.quantity;

  selectionStack.innerHTML = build.groups
    .flatMap((group) =>
      group.selected.map((item) => `
        <button class="selection-chip" type="button" data-selection-group="${group.id}" data-selection-option="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">
          <img src="${item.image}" alt="" loading="eager" decoding="async">
          <strong>${escapeHtml(item.name)}</strong>
          <span aria-hidden="true">&times;</span>
        </button>
      `),
    )
    .filter(Boolean)
    .join("");
}

function buildWooPayload() {
  const customer = getCustomerDraft();
  const lines = builderState.cart.map((item) => ({
    sku: `mpr-${item.mode}-${item.portion}-custom-meal`,
    name: item.title,
    quantity: item.quantity,
    unit_price: item.unitPrice,
    line_total: item.total,
    reorder_key: item.key,
    builder_groups: item.groups.map((group) => ({
      id: group.id,
      label: group.label,
      selected: group.selected.map((selection) => selection.name),
    })),
    meta_data: [
      { key: "Meal Type", value: item.mealType },
      { key: "Portion", value: item.portion },
      { key: "Average Meal Price", value: dollars(item.avg) },
      { key: "Selections", value: item.description },
      { key: "Fulfillment", value: `${customer.fulfillment} / ${customer.date} / ${customer.window}` },
      { key: "Customer Notes", value: customer.notes || "None" },
    ],
  }));
  const totalMeals = lines.reduce((sum, line) => sum + line.quantity, 0);
  const totalPrice = lines.reduce((sum, line) => sum + line.line_total, 0);

  return {
    source: "meal-prep-revolution-sandbox-builder",
    version: "2026-06-12-order-os",
    currency: "USD",
    customer,
    fulfillment: {
      type: customer.fulfillment,
      date: customer.date,
      window: customer.window,
      notes: customer.notes,
    },
    total_meals: totalMeals,
    estimated_total: Number(totalPrice.toFixed(2)),
    line_items: lines,
  };
}

function ticketId() {
  const stamp = new Date().toISOString().replace(/\D/g, "").slice(4, 12);
  const suffix = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `MPR-${stamp}-${suffix}`;
}

function buildOrderTicket(payload) {
  return {
    id: ticketId(),
    status: "New",
    created_at: new Date().toISOString(),
    customer: payload.customer,
    fulfillment: payload.fulfillment,
    total_meals: payload.total_meals,
    estimated_total: payload.estimated_total,
    line_items: payload.line_items,
    cart: cloneData(builderState.cart),
    next_actions: ["Confirm payment", "Batch ingredients", "Assign pickup or delivery window"],
  };
}

function saveOrderOs(ticket) {
  builderState.orderQueue = [ticket, ...builderState.orderQueue].slice(0, 8);
  writeStoredJson(orderOsStorage.queue, builderState.orderQueue);
  writeStoredJson(orderOsStorage.draft, ticket.customer);

  if (saveCustomerProfile?.checked) {
    writeStoredJson(orderOsStorage.customer, {
      ...ticket.customer,
      last_order_id: ticket.id,
      last_order_at: ticket.created_at,
      last_cart: ticket.cart,
      last_total_meals: ticket.total_meals,
      last_estimated_total: ticket.estimated_total,
    });
  }
}

function orderStatusNext(status) {
  return {
    New: "In prep",
    "In prep": "Ready",
    Ready: "Fulfilled",
    Fulfilled: "New",
  }[status] || "New";
}

function prepBuckets(orders) {
  const buckets = {
    Protein: {},
    Carbs: {},
    Vegetables: {},
    Sauce: {},
  };

  orders
    .filter((order) => order.status !== "Fulfilled")
    .flatMap((order) => order.cart || [])
    .forEach((item) => {
      (item.groups || []).forEach((group) => {
        const label = group.label === "Grain" ? "Carbs" : group.label;
        const bucket = buckets[label] || buckets[label.replace("Fruit", "Vegetables")];
        if (!bucket) return;
        group.selected.forEach((selection) => {
          bucket[selection.name] = (bucket[selection.name] || 0) + item.quantity;
        });
      });
    });

  return buckets;
}

function renderOrderOs() {
  const saved = readStoredJson(orderOsStorage.customer, null);

  if (customerMemoryStatus) {
    customerMemoryStatus.textContent = saved
      ? `${customerDisplayName(saved)} saved. Last order: ${saved.last_total_meals || 0} meals at ${dollars(saved.last_estimated_total || 0)}.`
      : "No saved customer profile yet. Create an order ticket to unlock reorder demos.";
  }

  if (queueCount) queueCount.textContent = String(builderState.orderQueue.length);

  if (kitchenQueue) {
    kitchenQueue.innerHTML = builderState.orderQueue.length
      ? builderState.orderQueue
          .map((ticket) => `
            <article class="queue-ticket">
              <div>
                <span>${escapeHtml(ticket.id)}</span>
                <h4>${escapeHtml(customerDisplayName(ticket.customer))}</h4>
                <p>${escapeHtml(ticket.fulfillment.type)} / ${escapeHtml(ticket.fulfillment.date)} / ${escapeHtml(ticket.fulfillment.window)}</p>
              </div>
              <div class="queue-ticket-meta">
                <strong>${ticket.total_meals} meals</strong>
                <span>${dollars(ticket.estimated_total)}</span>
              </div>
              <button type="button" data-ticket-status="${escapeHtml(ticket.id)}">${escapeHtml(ticket.status)}</button>
            </article>
          `)
          .join("")
      : `<div class="cart-empty">Kitchen tickets will appear here when an order stack is converted.</div>`;
  }

  if (prepTotals) {
    const buckets = prepBuckets(builderState.orderQueue);
    prepTotals.innerHTML = Object.entries(buckets)
      .map(([label, items]) => {
        const rows = Object.entries(items)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
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
  renderOrderOs();
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
  const customer = getCustomerDraft();
  const validationMessage = validateOrderTicket(customer);

  if (validationMessage) {
    orderNote.textContent = validationMessage;
    return;
  }

  builderState.reviewReady = true;
  const payload = buildWooPayload();
  const ticket = buildOrderTicket(payload);
  saveOrderOs(ticket);
  renderCart();
  orderNote.innerHTML = `<strong>${ticket.id}</strong> created for ${escapeHtml(customerDisplayName(customer))}. ${payload.total_meals} meals are now in the kitchen queue.`;
}

hydrateCustomerDraft();
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
    builderState.portionByMode[builderState.mode] = builderState.portion;
    builderState.activeGroupByMode[builderState.mode] = builderState.activeGroup;
    builderState.mode = nextMode;
    builderState.portion = builderState.portionByMode[nextMode] || builderCatalog[nextMode].defaultPortion;
    builderState.activeGroup = builderState.activeGroupByMode[nextMode] || builderCatalog[nextMode].defaultGroup;
    setFeaturedHeroFromGroup(builderState.activeGroup);
    builderState.reviewReady = false;
    renderBuilder();
  });
});

portionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    builderState.portion = button.dataset.portion;
    builderState.portionByMode[builderState.mode] = builderState.portion;
    builderState.reviewReady = false;
    renderBuilder();
  });
});

builderGroups.addEventListener("click", (event) => {
  const button = event.target.closest("[data-builder-step]");
  if (!button) return;
  builderState.activeGroup = button.dataset.builderStep;
  builderState.activeGroupByMode[builderState.mode] = builderState.activeGroup;
  setFeaturedHeroFromGroup(builderState.activeGroup);
  renderBuilder();
});

builderOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest(".option-card");
  if (!optionButton) return;

  const group = getCurrentGroup();
  const optionId = optionButton.dataset.option;
  const option = getOption(group.id, optionId);
  const current = builderState.selections[builderState.mode][group.id];
  setFeaturedHero(option);

  if (group.multi) {
    const selected = Array.isArray(current) ? current : [];
    const optionIsNone = optionId === "none" || optionId.startsWith("no-");
    if (selected.includes(optionId)) {
      builderState.selections[builderState.mode][group.id] = selected.filter((id) => id !== optionId);
    } else if (optionIsNone) {
      builderState.selections[builderState.mode][group.id] = [optionId];
    } else {
      builderState.selections[builderState.mode][group.id] = [
        ...selected.filter((id) => id !== "none" && !id.startsWith("no-")),
        optionId,
      ];
    }
  } else {
    builderState.selections[builderState.mode][group.id] = current === optionId ? null : optionId;
  }

  builderState.reviewReady = false;
  renderBuilder();
});

selectionStack.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-selection-group][data-selection-option]");
  if (!chip) return;

  const group = builderCatalog[builderState.mode].groups.find((item) => item.id === chip.dataset.selectionGroup);
  if (!group) return;

  const current = builderState.selections[builderState.mode][group.id];
  setFeaturedHero(getOption(group.id, chip.dataset.selectionOption));
  if (group.multi) {
    builderState.selections[builderState.mode][group.id] = (Array.isArray(current) ? current : []).filter(
      (id) => id !== chip.dataset.selectionOption,
    );
  } else if (current === chip.dataset.selectionOption) {
    builderState.selections[builderState.mode][group.id] = null;
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
  try {
    await navigator.clipboard.writeText(payload);
    orderNote.textContent = "WooCommerce payload copied.";
  } catch {
    orderNote.textContent = "Payload is visible below and ready to copy.";
  }
});

orderIntake?.addEventListener("input", () => {
  writeStoredJson(orderOsStorage.draft, getCustomerDraft());
  builderState.reviewReady = false;
  renderCart();
});

orderIntake?.addEventListener("change", () => {
  writeStoredJson(orderOsStorage.draft, getCustomerDraft());
  builderState.reviewReady = false;
  renderCart();
});

loadLastOrder?.addEventListener("click", () => {
  const saved = readStoredJson(orderOsStorage.customer, null);
  if (!saved?.last_cart?.length) {
    orderNote.textContent = "No saved reorder profile yet. Create an order ticket first.";
    return;
  }

  builderState.cart = cloneData(saved.last_cart);
  builderState.reviewReady = false;
  if (customerName) customerName.value = saved.name || "";
  if (customerPhone) customerPhone.value = saved.phone || "";
  if (customerEmail) customerEmail.value = saved.email || "";
  if (fulfillmentType) fulfillmentType.value = saved.fulfillment || "pickup";
  if (fulfillmentDate) fulfillmentDate.value = fulfillmentDateDefault();
  if (fulfillmentWindow) fulfillmentWindow.value = saved.window || "morning";
  if (orderNotes) orderNotes.value = saved.notes || "";
  orderNote.textContent = `${customerDisplayName(saved)}'s last stack is loaded for reorder.`;
  renderCart();
});

clearOrderOs?.addEventListener("click", () => {
  localStorage.removeItem(orderOsStorage.queue);
  localStorage.removeItem(orderOsStorage.customer);
  localStorage.removeItem(orderOsStorage.draft);
  builderState.orderQueue = [];
  builderState.reviewReady = false;
  if (orderIntake) orderIntake.reset();
  if (fulfillmentDate) fulfillmentDate.value = fulfillmentDateDefault();
  orderNote.textContent = "Order OS demo data cleared.";
  renderCart();
});

kitchenQueue?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ticket-status]");
  if (!button) return;
  const ticket = builderState.orderQueue.find((item) => item.id === button.dataset.ticketStatus);
  if (!ticket) return;
  ticket.status = orderStatusNext(ticket.status);
  writeStoredJson(orderOsStorage.queue, builderState.orderQueue);
  renderOrderOs();
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
const heroInfoToggle = document.querySelector(".hero-info-toggle");
const heroInfoPanel = document.querySelector("#heroInfoPanel");
const heroPromiseRail = document.querySelector(".hero-promise-list");

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

if (heroInfoToggle && heroInfoPanel) {
  const statusText = heroInfoToggle.querySelector("span span");
  let closeTimer;

  heroInfoToggle.addEventListener("click", () => {
    const willOpen = heroInfoToggle.getAttribute("aria-expanded") !== "true";
    clearTimeout(closeTimer);
    heroInfoToggle.setAttribute("aria-expanded", String(willOpen));

    if (statusText) {
      statusText.textContent = willOpen ? "Close details" : "Open for details";
    }

    if (willOpen) {
      heroInfoPanel.hidden = false;
      void heroInfoPanel.offsetHeight;
      heroInfoPanel.classList.add("is-open");
      return;
    }

    heroInfoPanel.classList.remove("is-open");
    closeTimer = window.setTimeout(() => {
      heroInfoPanel.hidden = true;
    }, 340);
  });
}

if (heroPromiseRail && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const mobileRail = window.matchMedia("(max-width: 680px)");
  let railIndex = 0;
  let railTimer;
  let resumeTimer;

  const stopRail = () => {
    window.clearInterval(railTimer);
    railTimer = null;
  };

  const startRail = () => {
    stopRail();
    if (!mobileRail.matches) {
      heroPromiseRail.scrollTo({ left: 0 });
      return;
    }

    const items = Array.from(heroPromiseRail.children);
    if (items.length < 2) return;

    railTimer = window.setInterval(() => {
      railIndex = (railIndex + 1) % items.length;
      heroPromiseRail.scrollTo({
        left: items[railIndex].offsetLeft - heroPromiseRail.offsetLeft,
        behavior: "smooth",
      });
    }, 2600);
  };

  const pauseRail = () => {
    stopRail();
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(startRail, 5200);
  };

  heroPromiseRail.addEventListener("pointerdown", pauseRail, { passive: true });
  heroPromiseRail.addEventListener("focusin", pauseRail);
  mobileRail.addEventListener("change", startRail);
  startRail();
}
