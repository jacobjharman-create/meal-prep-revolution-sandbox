const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const appetizerImageBank = {
  hero: "https://mealpreprev.com/wp-content/uploads/2025/12/111-2.jpeg",
  pack: "https://mealpreprev.com/wp-content/uploads/2025/12/menu-1.jpg",
  proteinChicken: "https://mealpreprev.com/wp-content/uploads/2025/12/222-1.jpeg",
  proteinSteak: "https://mealpreprev.com/wp-content/uploads/2025/12/333-1.jpeg",
  proteinSalmon: "https://mealpreprev.com/wp-content/uploads/2025/12/444-2.jpeg",
  proteinTurkey: "https://mealpreprev.com/wp-content/uploads/2025/12/444-2-1.jpeg",
  proteinShrimp: "https://mealpreprev.com/wp-content/uploads/2025/12/555.jpeg",
  proteinTofu: "https://mealpreprev.com/wp-content/uploads/2025/12/555-1.jpeg",
  proteinEggs: "https://mealpreprev.com/wp-content/uploads/2025/12/666.jpeg",
  proteinMeatballs: "https://mealpreprev.com/wp-content/uploads/2025/12/666-1.jpeg",
  grainJasmine: "https://mealpreprev.com/wp-content/uploads/2025/12/111.jpeg",
  grainSweetPotato: "https://mealpreprev.com/wp-content/uploads/2025/12/1111.jpeg",
  grainQuinoa: "https://mealpreprev.com/wp-content/uploads/2025/12/1111-1.jpeg",
  grainBrownRice: "https://mealpreprev.com/wp-content/uploads/2025/12/222.jpeg",
  grainPotatoes: "https://mealpreprev.com/wp-content/uploads/2025/12/333.jpeg",
  grainCauliRice: "https://mealpreprev.com/wp-content/uploads/2025/12/333-2.jpeg",
  grainNoodles: "https://mealpreprev.com/wp-content/uploads/2025/12/444.jpeg",
  grainBlackBeans: "https://mealpreprev.com/wp-content/uploads/2025/12/22.jpg",
  vegBroccoli: "https://mealpreprev.com/wp-content/uploads/2025/12/33.jpg",
  vegAsparagus: "https://mealpreprev.com/wp-content/uploads/2025/12/333-3.jpeg",
  vegPeppers: "https://mealpreprev.com/wp-content/uploads/2025/12/666-1.jpeg",
  vegGreenBeans: "https://mealpreprev.com/wp-content/uploads/2025/12/555-1.jpeg",
  vegSpinach: "https://mealpreprev.com/wp-content/uploads/2025/12/444-1.jpeg",
  vegCarrots: "https://mealpreprev.com/wp-content/uploads/2025/12/555.jpeg",
  vegZucchini: "https://mealpreprev.com/wp-content/uploads/2025/12/111-2.jpeg",
  vegSprouts: "https://mealpreprev.com/wp-content/uploads/2025/12/333-1.jpeg",
  sauceLemonHerb: "https://mealpreprev.com/wp-content/uploads/2025/12/111.jpeg",
  sauceChimichurri: "https://mealpreprev.com/wp-content/uploads/2025/12/444.jpeg",
  sauceTeriyaki: "https://mealpreprev.com/wp-content/uploads/2025/12/444-1.jpeg",
  sauceBuffalo: "https://mealpreprev.com/wp-content/uploads/2025/12/555.jpeg",
  sauceGarlicAioli: "https://mealpreprev.com/wp-content/uploads/2025/12/555-1.jpeg",
  sauceSalsaVerde: "https://mealpreprev.com/wp-content/uploads/2025/12/666.jpeg",
  sauceTahini: "https://mealpreprev.com/wp-content/uploads/2025/12/666-1.jpeg",
};

const mealImages = {
  chicken: appetizerImageBank.proteinChicken,
  steak: appetizerImageBank.proteinSteak,
  salmon: appetizerImageBank.proteinSalmon,
  salad: appetizerImageBank.vegAsparagus,
  breakfast: appetizerImageBank.proteinEggs,
  pack: appetizerImageBank.pack,
};

const builderItemImages = {
  chicken: appetizerImageBank.proteinChicken,
  steak: appetizerImageBank.proteinSteak,
  salmon: appetizerImageBank.proteinSalmon,
  turkey: appetizerImageBank.proteinTurkey,
  shrimp: appetizerImageBank.proteinShrimp,
  tofu: appetizerImageBank.proteinTofu,
  eggs: appetizerImageBank.proteinEggs,
  meatballs: appetizerImageBank.proteinMeatballs,
  "jasmine-rice": appetizerImageBank.grainJasmine,
  "sweet-potato": appetizerImageBank.grainSweetPotato,
  quinoa: appetizerImageBank.grainQuinoa,
  "brown-rice": appetizerImageBank.grainBrownRice,
  potatoes: appetizerImageBank.grainPotatoes,
  "cauli-rice": appetizerImageBank.grainCauliRice,
  noodles: appetizerImageBank.grainNoodles,
  "black-beans": appetizerImageBank.grainBlackBeans,
  broccoli: appetizerImageBank.vegBroccoli,
  asparagus: appetizerImageBank.vegAsparagus,
  peppers: appetizerImageBank.vegPeppers,
  "green-beans": appetizerImageBank.vegGreenBeans,
  spinach: appetizerImageBank.vegSpinach,
  carrots: appetizerImageBank.vegCarrots,
  zucchini: appetizerImageBank.vegZucchini,
  sprouts: appetizerImageBank.vegSprouts,
  "lemon-herb": appetizerImageBank.sauceLemonHerb,
  chimichurri: appetizerImageBank.sauceChimichurri,
  teriyaki: appetizerImageBank.sauceTeriyaki,
  buffalo: appetizerImageBank.sauceBuffalo,
  "garlic-aioli": appetizerImageBank.sauceGarlicAioli,
  "salsa-verde": appetizerImageBank.sauceSalsaVerde,
  tahini: appetizerImageBank.sauceTahini,
  none: appetizerImageBank.sauceLemonHerb,
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

const builderSteps = [
  {
    id: "protein",
    label: "Protein",
    prompt: "Choose your protein.",
    help: "Pick one, or tap the selected protein again to skip it.",
    icon: "icon-protein",
    rail: appetizerImageBank.proteinChicken,
    options: [
      { id: "chicken", name: "Grilled Chicken", detail: "Lean, simple, repeatable.", price: 12.49, image: builderItemImages.chicken },
      { id: "steak", name: "Garlic Steak", detail: "Premium and high protein.", price: 14.49, image: builderItemImages.steak },
      { id: "salmon", name: "Honey Garlic Salmon", detail: "Clean fats and coastal flavor.", price: 14.49, image: builderItemImages.salmon },
      { id: "turkey", name: "Ground Turkey", detail: "Light, flexible, athlete friendly.", price: 12.99, image: builderItemImages.turkey },
      { id: "shrimp", name: "Grilled Shrimp", detail: "Light coastal protein.", price: 14.49, image: builderItemImages.shrimp },
      { id: "tofu", name: "Tofu", detail: "Plant-powered option.", price: 12.49, image: builderItemImages.tofu },
      { id: "eggs", name: "Boiled Eggs", detail: "Simple breakfast protein.", price: 10.49, image: builderItemImages.eggs },
      { id: "meatballs", name: "Turkey Meatballs", detail: "Comfort meal energy.", price: 13.49, image: builderItemImages.meatballs },
    ],
  },
  {
    id: "carb",
    label: "Grain",
    prompt: "Choose your grain.",
    help: "Pick one carb base, or tap it again to skip.",
    icon: "icon-carb",
    rail: appetizerImageBank.grainBrownRice,
    options: [
      { id: "jasmine-rice", name: "Jasmine Rice", detail: "Classic training fuel.", price: 0, image: builderItemImages["jasmine-rice"] },
      { id: "sweet-potato", name: "Sweet Potato", detail: "Clean, filling, repeatable.", price: 0, image: builderItemImages["sweet-potato"] },
      { id: "quinoa", name: "Quinoa", detail: "Higher fiber and lighter feel.", price: 1, image: builderItemImages.quinoa },
      { id: "brown-rice", name: "Brown Rice", detail: "Steady everyday carb.", price: 0, image: builderItemImages["brown-rice"] },
      { id: "potatoes", name: "Roasted Potatoes", detail: "Simple and filling.", price: 0, image: builderItemImages.potatoes },
      { id: "cauli-rice", name: "Cauli Rice", detail: "Lower-carb plate.", price: 1, image: builderItemImages["cauli-rice"] },
      { id: "noodles", name: "Noodles", detail: "Comfort carb day.", price: 1, image: builderItemImages.noodles },
      { id: "black-beans", name: "Black Beans", detail: "Fiber and volume.", price: 0, image: builderItemImages["black-beans"] },
    ],
  },
  {
    id: "veg",
    label: "Vegetables",
    prompt: "Choose vegetables.",
    help: "Tap one or more vegetables, then continue.",
    icon: "icon-leaf",
    rail: appetizerImageBank.vegBroccoli,
    multi: true,
    options: [
      { id: "broccoli", name: "Roasted Broccoli", detail: "Clean and reliable.", image: builderItemImages.broccoli },
      { id: "asparagus", name: "Asparagus", detail: "Premium green finish.", image: builderItemImages.asparagus },
      { id: "peppers", name: "Red Peppers", detail: "Color, crunch, flavor.", image: builderItemImages.peppers },
      { id: "green-beans", name: "Green Beans", detail: "Simple performance side.", image: builderItemImages["green-beans"] },
      { id: "spinach", name: "Spinach", detail: "Fresh and light.", image: builderItemImages.spinach },
      { id: "carrots", name: "Carrots", detail: "Slightly sweet crunch.", image: builderItemImages.carrots },
      { id: "zucchini", name: "Zucchini", detail: "Light and clean.", image: builderItemImages.zucchini },
      { id: "sprouts", name: "Brussels Sprouts", detail: "Roasted premium side.", image: builderItemImages.sprouts },
    ],
  },
  {
    id: "sauce",
    label: "Sauce",
    prompt: "Choose a sauce.",
    help: "Pick one sauce, or tap it again for no sauce.",
    icon: "icon-drop",
    rail: appetizerImageBank.sauceTahini,
    options: [
      { id: "lemon-herb", name: "Lemon Herb", detail: "Clean and bright.", image: builderItemImages["lemon-herb"] },
      { id: "chimichurri", name: "Chimichurri", detail: "Green, sharp, steak-friendly.", image: builderItemImages.chimichurri },
      { id: "teriyaki", name: "Teriyaki", detail: "Sweet-savory classic.", image: builderItemImages.teriyaki },
      { id: "buffalo", name: "Buffalo", detail: "Heat without overthinking.", image: builderItemImages.buffalo },
      { id: "garlic-aioli", name: "Garlic Aioli", detail: "Creamy comfort finish.", image: builderItemImages["garlic-aioli"] },
      { id: "salsa-verde", name: "Salsa Verde", detail: "Fresh green punch.", image: builderItemImages["salsa-verde"] },
      { id: "tahini", name: "Tahini", detail: "Rich, clean, savory.", image: builderItemImages.tahini },
      { id: "none", name: "No Sauce", detail: "Keep it clean.", image: builderItemImages.none },
    ],
  },
];

const builderState = {
  stepIndex: 0,
  quantity: 12,
  reviewReady: false,
  selections: {
    protein: "chicken",
    carb: "jasmine-rice",
    veg: ["broccoli", "asparagus"],
    sauce: "lemon-herb",
  },
  cart: [],
};

const menuGrid = document.querySelector("#mealGrid");
const categoryLink = document.querySelector("#categoryLink");
const builderOptions = document.querySelector("#builderOptions");
const builderPrompt = document.querySelector("#builderPrompt");
const builderHelp = document.querySelector("#builderHelp");
const builderStepCount = document.querySelector("#builderStepCount");
const builderMealCount = document.querySelector("#builderMealCount");
const builderPlateTitle = document.querySelector("#builderPlateTitle");
const builderPlateDesc = document.querySelector("#builderPlateDesc");
const builderImage = document.querySelector("#builderImage");
const ingredientRail = document.querySelector("#ingredientRail");
const selectionStack = document.querySelector("#selectionStack");
const mealQuantity = document.querySelector("#mealQuantity");
const cartItems = document.querySelector("#cartItems");
const cartMealTotal = document.querySelector("#cartMealTotal");
const cartPriceTotal = document.querySelector("#cartPriceTotal");
const orderNote = document.querySelector("#orderNote");
const purchaseActions = document.querySelector("#purchaseActions");
const builderBack = document.querySelector("#builderBack");
const builderNext = document.querySelector("#builderNext");
const addMealButton = document.querySelector("#addMeal");
let lastFeaturedIngredient = "";

function dollars(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getStep(id) {
  return builderSteps.find((step) => step.id === id);
}

function getOption(stepId, optionId) {
  if (!optionId) return null;
  return getStep(stepId).options.find((option) => option.id === optionId);
}

function getSelectedOptions(stepId) {
  const step = getStep(stepId);
  const value = builderState.selections[stepId];
  if (step.multi) {
    return value.map((id) => getOption(stepId, id)).filter(Boolean);
  }
  return [getOption(stepId, value)].filter(Boolean);
}

function currentBuild() {
  const protein = getSelectedOptions("protein")[0];
  const carb = getSelectedOptions("carb")[0];
  const veg = getSelectedOptions("veg");
  const sauce = getSelectedOptions("sauce")[0];
  const vegNames = veg.map((option) => option.name);
  const plantForwardBasePrice = 10.49;
  const price = (protein?.price || plantForwardBasePrice) + (carb?.price || 0);
  const title = protein ? `${protein.name} Plate` : "Plant-Forward Plate";
  const carbText = carb?.name || "no grain";
  const vegText = vegNames.join(", ") || "fresh vegetables";
  const sauceText = sauce?.name || "no sauce";
  const plantBase = [carb?.name, vegText].filter(Boolean).join(" with ");
  const description = protein
    ? `${protein.name} with ${carbText}, ${vegText}, and ${sauceText}.`
    : `${plantBase} ${sauce ? `and ${sauce.name}` : "with no sauce"}.`;
  const key = [
    protein?.id || "no-protein",
    carb?.id || "no-grain",
    [...builderState.selections.veg].sort().join("+"),
    sauce?.id || "no-sauce",
  ].join("|");

  return {
    key,
    title,
    description,
    price,
    image: protein?.image || mealImages.pack,
    selections: {
      protein: protein?.name || "No protein",
      carb: carb?.name || "No grain",
      veg: vegNames,
      sauce: sauce?.name || "No sauce",
    },
  };
}

function renderMenu(category) {
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

function renderBuilder() {
  const step = builderSteps[builderState.stepIndex];
  const build = currentBuild();
  const selectedForStep = getSelectedOptions(step.id).at(-1) || step.options[0];
  const featuredIngredient = selectedForStep?.image || step.rail;

  document.querySelectorAll(".builder-step").forEach((button) => {
    button.classList.toggle("active", button.dataset.builderStep === step.id);
  });

  const isLastStep = builderState.stepIndex === builderSteps.length - 1;

  builderStepCount.textContent = `Step ${builderState.stepIndex + 1} of ${builderSteps.length}`;
  builderPrompt.textContent = step.prompt;
  builderHelp.textContent = step.help;
  builderMealCount.textContent = builderState.quantity;
  mealQuantity.value = builderState.quantity;
  builderPlateTitle.textContent = build.title;
  builderPlateDesc.textContent = `Current plate: ${build.description}`;
  builderImage.src = build.image;
  builderImage.alt = `${build.title} preview`;
  builderImage.classList.add("generated");
  if (featuredIngredient && ingredientRail.getAttribute("src") !== featuredIngredient) {
    ingredientRail.src = featuredIngredient;
  }
  ingredientRail.alt = `${selectedForStep?.name || step.label} featured food image`;
  if (lastFeaturedIngredient !== featuredIngredient) {
    ingredientRail.classList.remove("slide-in");
    void ingredientRail.offsetWidth;
    ingredientRail.classList.add("slide-in");
    lastFeaturedIngredient = featuredIngredient;
  }
  builderBack.disabled = builderState.stepIndex === 0;
  builderNext.textContent = isLastStep ? `Add ${builderState.quantity} to Week` : "Continue";
  addMealButton.textContent = `Add ${builderState.quantity} Meals to Week`;
  selectionStack.innerHTML = [
    ["Protein", build.selections.protein],
    ["Grain", build.selections.carb],
    ["Vegetables", build.selections.veg.join(" + ")],
    ["Sauce", build.selections.sauce],
  ]
    .map(([label, value]) => `
      <span>
        <small>${label}</small>
        <strong>${escapeHtml(value || "Choose")}</strong>
      </span>
    `)
    .join("");

  builderOptions.innerHTML = step.options
    .map((option) => {
      const selected = step.multi
        ? builderState.selections[step.id].includes(option.id)
        : builderState.selections[step.id] === option.id;

      return `
        <button class="option-card${selected ? " selected" : ""}" type="button" data-option="${option.id}" aria-pressed="${selected}">
          <span class="food-thumb" aria-hidden="true">
            <img src="${option.image || step.rail}" alt="">
          </span>
          <span>
            <strong>${escapeHtml(option.name)}</strong>
            <small>${escapeHtml(option.detail)}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderCart() {
  if (!builderState.cart.length) {
    cartItems.innerHTML = `<div class="cart-empty">Your week will appear here. Choose a plate, add the quantity, then show the total when ready.</div>`;
  } else {
    cartItems.innerHTML = builderState.cart
      .map((item) => `
        <article class="cart-item">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </div>
          <div class="cart-row">
            <strong>${builderState.reviewReady ? dollars(item.price * item.quantity) : "Ready"}</strong>
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

  const totalMeals = builderState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = builderState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartMealTotal.textContent = totalMeals;
  cartPriceTotal.textContent = builderState.reviewReady ? dollars(totalPrice) : "Review";
  purchaseActions.hidden = !builderState.reviewReady || !builderState.cart.length;
}

function setQuantity(value) {
  builderState.quantity = Math.min(48, Math.max(1, Number.parseInt(value, 10) || 1));
  renderBuilder();
}

function moveStep(direction) {
  if (direction > 0 && builderState.stepIndex === builderSteps.length - 1) {
    addCurrentBuildToCart();
    return;
  }

  builderState.stepIndex = Math.min(builderSteps.length - 1, Math.max(0, builderState.stepIndex + direction));
  renderBuilder();
}

function addCurrentBuildToCart() {
  const build = currentBuild();
  const existing = builderState.cart.find((item) => item.key === build.key);
  builderState.reviewReady = false;

  if (existing) {
    existing.quantity += builderState.quantity;
  } else {
    builderState.cart.push({ ...build, quantity: builderState.quantity });
  }

  orderNote.textContent = `${builderState.quantity} ${build.title.toLowerCase()} meals added. Adjust quantities here or show the total when ready.`;
  builderState.stepIndex = 0;
  renderBuilder();
  renderCart();
}

function prepareStoreOrder() {
  if (!builderState.cart.length) {
    orderNote.textContent = "Stack at least one meal build before reviewing checkout.";
    return;
  }

  builderState.reviewReady = true;
  const totalMeals = builderState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = builderState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = builderState.cart
    .map((item) => `${item.quantity}x ${item.title}: ${item.description}`)
    .join(" / ");

  renderCart();
  orderNote.innerHTML = `<strong>${dollars(totalPrice)} for ${totalMeals} meals.</strong> ${escapeHtml(lines)}`;
}

renderMenu("build");
renderBuilder();
renderCart();

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

document.querySelectorAll(".builder-step").forEach((step) => {
  step.addEventListener("click", () => {
    builderState.stepIndex = builderSteps.findIndex((item) => item.id === step.dataset.builderStep);
    renderBuilder();
  });
});

builderOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest(".option-card");
  if (!optionButton) return;

  const step = builderSteps[builderState.stepIndex];
  const optionId = optionButton.dataset.option;

  if (step.multi) {
    const selected = builderState.selections[step.id];
    if (selected.includes(optionId)) {
      builderState.selections[step.id] = selected.filter((id) => id !== optionId);
    } else {
      builderState.selections[step.id] = [...selected, optionId];
    }
  } else {
    builderState.selections[step.id] = builderState.selections[step.id] === optionId ? null : optionId;
  }

  builderState.reviewReady = false;
  if (!step.multi && builderState.stepIndex < builderSteps.length - 1) {
    builderState.stepIndex += 1;
  }
  renderBuilder();
  renderCart();
});

builderBack.addEventListener("click", () => moveStep(-1));
builderNext.addEventListener("click", () => moveStep(1));
document.querySelector("#qtyMinus").addEventListener("click", () => setQuantity(builderState.quantity - 1));
document.querySelector("#qtyPlus").addEventListener("click", () => setQuantity(builderState.quantity + 1));
mealQuantity.addEventListener("input", () => setQuantity(mealQuantity.value));
addMealButton.addEventListener("click", addCurrentBuildToCart);
document.querySelector("#submitOrder").addEventListener("click", prepareStoreOrder);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const item = builderState.cart.find((cartItem) => cartItem.key === button.dataset.cartKey);
  if (!item) return;

  item.quantity += button.dataset.cartAction === "increase" ? 1 : -1;
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
