const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const aiImageStyle =
  "luxury editorial food photograph, full-plate framing, matte black ceramic plate, subtle reflections, premium cutlery-free styling, clean dark tabletop, Porsche-level premium color grading, ultra realistic, high resolution, appetizing, full meal detail, not macro, no text, cinematic";

function plateImage(subject, seed, width = 1280, height = 960) {
  const prompt = `${subject}, ${aiImageStyle}`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?model=flux&seed=${seed}&width=${width}&height=${height}&nologo=true`;
}

const mealImages = {
  chicken: plateImage("grilled chicken breast with rice, broccoli, and peppers on black plate", 2101),
  steak: plateImage("garlic butter steak with potatoes, asparagus, and green beans on black plate", 2102),
  salmon: plateImage("pan-seared salmon with quinoa and asparagus on black plate", 2103),
  salad: plateImage("high-protein grilled chicken salad with mixed greens on black plate", 2104),
  breakfast: plateImage("high-protein breakfast plate with eggs, potatoes, and turkey sausage on black plate", 2105),
  pack: plateImage("premium meal prep pack arranged on black plates with proteins, carbs, vegetables, and sauces", 2106),
};

const builderItemImages = {
  chicken: plateImage("grilled chicken breast and rice plated on sleek black ceramic plate", 2201),
  steak: plateImage("garlic-charred steak with roasted potatoes and green beans on black plate", 2202),
  salmon: plateImage("honey-glazed salmon with jasmine rice and asparagus on black plate", 2203),
  turkey: plateImage("ground turkey medallions and vegetables on black plate", 2204),
  shrimp: plateImage("garlic butter shrimp with lemon herbs on black plate", 2205),
  tofu: plateImage("seared tofu with roasted vegetables on black plate", 2206),
  eggs: plateImage("perfectly boiled eggs with herbs on black plate", 2207),
  meatballs: plateImage("turkey meatballs with roasted vegetables on black plate", 2208),
  "jasmine-rice": plateImage("steaming jasmine rice side dish on black plate with garnish", 2209),
  "sweet-potato": plateImage("roasted sweet potatoes and vegetables on black plate", 2210),
  quinoa: plateImage("lightly fluffed quinoa with herbs on black plate", 2211),
  "brown-rice": plateImage("steamed brown rice with crisp vegetables on black plate", 2212),
  potatoes: plateImage("golden roasted potatoes on black plate", 2213),
  "cauli-rice": plateImage("garlic roasted cauliflower rice and herbs on black plate", 2214),
  noodles: plateImage("cooked noodles with sesame oil and vegetables on black plate", 2215),
  "black-beans": plateImage("black beans with fresh herbs on black plate", 2216),
  broccoli: plateImage("roasted broccoli florets on black plate", 2217),
  asparagus: plateImage("charred asparagus spears on black plate", 2218),
  peppers: plateImage("roasted red pepper strips on black plate", 2219),
  "green-beans": plateImage("roasted green beans on black plate", 2220),
  spinach: plateImage("creamy wilted spinach with olive oil finish on black plate", 2221),
  carrots: plateImage("glazed carrots on black plate", 2222),
  zucchini: plateImage("sautéed zucchini rounds on black plate", 2223),
  sprouts: plateImage("roasted Brussels sprouts and crispy crumbs on black plate", 2224),
  "lemon-herb": plateImage("lemon herb sauce in a small ramekin with herbs on black plate", 2225),
  chimichurri: plateImage("chimichurri sauce with olive oil on black plate", 2226),
  teriyaki: plateImage("teriyaki glaze in a small bowl on black plate", 2227),
  buffalo: plateImage("fiery buffalo sauce in a dipping bowl on black plate", 2228),
  "garlic-aioli": plateImage("garlic aioli creamy dip on black plate", 2229),
  "salsa-verde": plateImage("fresh salsa verde sauce in ramekin on black plate", 2230),
  tahini: plateImage("rich tahini sauce on black plate", 2231),
  none: plateImage("clean side dish selection with no sauce on black plate", 2232),
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
    prompt: "Tap a protein.",
    icon: "icon-protein",
    rail: builderItemImages.chicken,
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
    prompt: "Tap a grain or carb.",
    icon: "icon-carb",
    rail: builderItemImages["jasmine-rice"],
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
    prompt: "Tap vegetables.",
    icon: "icon-leaf",
    rail: builderItemImages.broccoli,
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
    prompt: "Tap a sauce.",
    icon: "icon-drop",
    rail: builderItemImages["lemon-herb"],
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
  aiRendered: false,
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
const builderStepCount = document.querySelector("#builderStepCount");
const builderMealCount = document.querySelector("#builderMealCount");
const builtMealCount = document.querySelector("#builtMealCount");
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

function getBuiltMealTotal() {
  return builderState.cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function refreshMealTotals() {
  const totalMeals = getBuiltMealTotal();
  if (builtMealCount) {
    builtMealCount.textContent = String(totalMeals);
  }
  cartMealTotal.textContent = String(totalMeals);
}

function getStep(id) {
  return builderSteps.find((step) => step.id === id);
}

function getOption(stepId, optionId) {
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
  const price = (protein?.price || 0) + (carb?.price || 0);
  const title = `${protein?.name || "Custom"} Plate`;
  const description = `${protein?.name || "Protein"} with ${carb?.name || "your carb"}, ${vegNames.join(", ") || "fresh vegetables"}, and ${sauce?.name || "sauce on side"}.`;
  const key = [
    protein?.id,
    carb?.id,
    [...builderState.selections.veg].sort().join("+"),
    sauce?.id,
  ].join("|");

  return {
    key,
    title,
    description,
    price,
    image: builderState.aiRendered ? protein?.image || mealImages.pack : mealImages.chicken,
    selections: {
      protein: protein?.name || "",
      carb: carb?.name || "",
      veg: vegNames,
      sauce: sauce?.name || "",
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
  refreshMealTotals();

  document.querySelectorAll(".builder-step").forEach((button) => {
    button.classList.toggle("active", button.dataset.builderStep === step.id);
  });

  builderStepCount.textContent = `Step ${builderState.stepIndex + 1} of ${builderSteps.length}`;
  builderPrompt.textContent = step.prompt;
  builderMealCount.textContent = builderState.quantity;
  mealQuantity.value = builderState.quantity;
  builderPlateTitle.textContent = build.title;
  builderPlateDesc.textContent = builderState.aiRendered
    ? `AI preview generated: ${build.description}`
    : `Select components, then generate a visual preview: ${build.description}`;
  builderImage.src = build.image;
  builderImage.alt = `${build.title} preview`;
  builderImage.classList.toggle("generated", builderState.aiRendered);
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
  document.querySelector("#renderMeal").textContent = builderState.aiRendered ? "Re-render Meal" : "Generate Meal";
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
    cartItems.innerHTML = `<div class="cart-empty">Build a clean plate and stack the week. Pricing stays out of the way until review.</div>`;
  } else {
    cartItems.innerHTML = builderState.cart
      .map((item) => `
        <article class="cart-item">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </div>
          <div class="cart-row">
            <strong>${builderState.reviewReady ? dollars(item.price * item.quantity) : "Review to reveal"}</strong>
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

  const totalPrice = builderState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  refreshMealTotals();
  cartPriceTotal.textContent = builderState.reviewReady ? dollars(totalPrice) : "Review";
  purchaseActions.hidden = !builderState.reviewReady || !builderState.cart.length;
}

function setQuantity(value) {
  builderState.quantity = Math.min(48, Math.max(1, Number.parseInt(value, 10) || 1));
  renderBuilder();
}

function moveStep(direction) {
  builderState.stepIndex = Math.min(builderSteps.length - 1, Math.max(0, builderState.stepIndex + direction));
  renderBuilder();
}

function addCurrentBuildToCart() {
  if (!builderState.aiRendered) {
    builderState.aiRendered = true;
    renderBuilder();
  }

  const build = currentBuild();
  const existing = builderState.cart.find((item) => item.key === build.key);
  builderState.reviewReady = false;

  if (existing) {
    existing.quantity += builderState.quantity;
  } else {
    builderState.cart.push({ ...build, quantity: builderState.quantity });
  }

  orderNote.textContent = `${builderState.quantity} ${build.title.toLowerCase()} meals stacked. Keep customizing, then review when the week feels right.`;
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

function renderAiMeal() {
  builderState.aiRendered = true;
  builderState.reviewReady = false;
  orderNote.textContent = "AI meal preview generated. Add it to the week stack or keep customizing.";
  renderBuilder();
  renderCart();
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
    builderState.selections[step.id] = optionId;
  }

  builderState.reviewReady = false;
  builderState.aiRendered = false;
  renderBuilder();
  renderCart();
});

document.querySelector("#builderBack").addEventListener("click", () => moveStep(-1));
document.querySelector("#builderNext").addEventListener("click", () => moveStep(1));
document.querySelector("#qtyMinus").addEventListener("click", () => setQuantity(builderState.quantity - 1));
document.querySelector("#qtyPlus").addEventListener("click", () => setQuantity(builderState.quantity + 1));
mealQuantity.addEventListener("input", () => setQuantity(mealQuantity.value));
document.querySelector("#addMeal").addEventListener("click", addCurrentBuildToCart);
document.querySelector("#renderMeal").addEventListener("click", renderAiMeal);
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
