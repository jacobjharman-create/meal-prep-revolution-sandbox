const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const mealImages = {
  chicken: "assets/images/chicken-black-container.png",
  steak: "assets/images/steak-black-container.png",
  salmon: "assets/images/salmon-black-container.png",
  salad: "assets/images/salmon-black-container.png",
  breakfast: "assets/images/breakfast-black-container.png",
  pack: "assets/images/batch-black-containers.png",
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
    icon: "icon-protein",
    options: [
      { id: "chicken", name: "Grilled Chicken", detail: "Lean, simple, repeatable.", price: 12.49, image: mealImages.chicken },
      { id: "steak", name: "Garlic Steak", detail: "Premium and high protein.", price: 14.49, image: mealImages.steak },
      { id: "salmon", name: "Honey Garlic Salmon", detail: "Clean fats and coastal flavor.", price: 14.49, image: mealImages.salmon },
      { id: "turkey", name: "Ground Turkey", detail: "Light, flexible, athlete friendly.", price: 12.99, image: mealImages.chicken },
    ],
  },
  {
    id: "carb",
    label: "Grain",
    prompt: "Pick your carb.",
    icon: "icon-carb",
    options: [
      { id: "jasmine-rice", name: "Jasmine Rice", detail: "Classic training fuel.", price: 0 },
      { id: "sweet-potato", name: "Sweet Potato", detail: "Clean, filling, easy to repeat.", price: 0 },
      { id: "quinoa", name: "Quinoa", detail: "Higher fiber and lighter feel.", price: 1 },
      { id: "greens", name: "Extra Greens", detail: "Lower-carb plate.", price: 0 },
    ],
  },
  {
    id: "veg",
    label: "Vegetables",
    prompt: "Add vegetables.",
    icon: "icon-leaf",
    multi: true,
    options: [
      { id: "broccoli", name: "Roasted Broccoli", detail: "Clean and reliable." },
      { id: "asparagus", name: "Asparagus", detail: "Premium green finish." },
      { id: "peppers", name: "Red Peppers", detail: "Color, crunch, flavor." },
      { id: "green-beans", name: "Green Beans", detail: "Simple performance side." },
      { id: "spinach", name: "Spinach", detail: "Fresh and light." },
      { id: "carrots", name: "Carrots", detail: "Slightly sweet crunch." },
    ],
  },
  {
    id: "sauce",
    label: "Sauce",
    prompt: "Finish with sauce.",
    icon: "icon-drop",
    options: [
      { id: "lemon-herb", name: "Lemon Herb", detail: "Clean and bright." },
      { id: "chimichurri", name: "Chimichurri", detail: "Green, sharp, steak-friendly." },
      { id: "teriyaki", name: "Teriyaki", detail: "Sweet-savory classic." },
      { id: "buffalo", name: "Buffalo", detail: "Heat without overthinking." },
      { id: "side", name: "Sauce On Side", detail: "Maximum control." },
      { id: "none", name: "No Sauce", detail: "Keep it clean." },
    ],
  },
];

const builderState = {
  stepIndex: 0,
  quantity: 12,
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
const builderPlateTitle = document.querySelector("#builderPlateTitle");
const builderPlateDesc = document.querySelector("#builderPlateDesc");
const builderImage = document.querySelector("#builderImage");
const mealQuantity = document.querySelector("#mealQuantity");
const cartItems = document.querySelector("#cartItems");
const cartMealTotal = document.querySelector("#cartMealTotal");
const cartPriceTotal = document.querySelector("#cartPriceTotal");
const orderNote = document.querySelector("#orderNote");

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
    image: protein?.image || mealImages.pack,
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

  document.querySelectorAll(".builder-step").forEach((button) => {
    button.classList.toggle("active", button.dataset.builderStep === step.id);
  });

  builderStepCount.textContent = `Step ${builderState.stepIndex + 1} of ${builderSteps.length}`;
  builderPrompt.textContent = step.prompt;
  builderMealCount.textContent = builderState.quantity;
  mealQuantity.value = builderState.quantity;
  builderPlateTitle.textContent = build.title;
  builderPlateDesc.textContent = build.description;
  builderImage.src = build.image;
  builderImage.alt = `${build.title} preview`;

  builderOptions.innerHTML = step.options
    .map((option) => {
      const selected = step.multi
        ? builderState.selections[step.id].includes(option.id)
        : builderState.selections[step.id] === option.id;

      return `
        <button class="option-card${selected ? " selected" : ""}" type="button" data-option="${option.id}" aria-pressed="${selected}">
          <span class="icon ${step.icon}" aria-hidden="true"></span>
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
    cartItems.innerHTML = `<div class="cart-empty">Your master list is empty. Build a clean plate, set the quantity, then add it here.</div>`;
  } else {
    cartItems.innerHTML = builderState.cart
      .map((item) => `
        <article class="cart-item">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </div>
          <div class="cart-row">
            <strong>${dollars(item.price * item.quantity)}</strong>
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
  cartPriceTotal.textContent = dollars(totalPrice);
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
  const build = currentBuild();
  const existing = builderState.cart.find((item) => item.key === build.key);

  if (existing) {
    existing.quantity += builderState.quantity;
  } else {
    builderState.cart.push({ ...build, quantity: builderState.quantity });
  }

  orderNote.textContent = `${builderState.quantity} ${build.title.toLowerCase()} meals added to the master list.`;
  renderCart();
}

function prepareStoreOrder() {
  if (!builderState.cart.length) {
    orderNote.textContent = "Add at least one meal build before preparing the store order.";
    return;
  }

  const totalMeals = builderState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const lines = builderState.cart
    .map((item) => `${item.quantity}x ${item.title}: ${item.description}`)
    .join(" / ");

  orderNote.innerHTML = `<strong>Demo order ready:</strong> ${totalMeals} meals. ${escapeHtml(lines)}`;
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

  renderBuilder();
});

document.querySelector("#builderBack").addEventListener("click", () => moveStep(-1));
document.querySelector("#builderNext").addEventListener("click", () => moveStep(1));
document.querySelector("#qtyMinus").addEventListener("click", () => setQuantity(builderState.quantity - 1));
document.querySelector("#qtyPlus").addEventListener("click", () => setQuantity(builderState.quantity + 1));
mealQuantity.addEventListener("input", () => setQuantity(mealQuantity.value));
document.querySelector("#addMeal").addEventListener("click", addCurrentBuildToCart);
document.querySelector("#submitOrder").addEventListener("click", prepareStoreOrder);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const item = builderState.cart.find((cartItem) => cartItem.key === button.dataset.cartKey);
  if (!item) return;

  item.quantity += button.dataset.cartAction === "increase" ? 1 : -1;
  builderState.cart = builderState.cart.filter((cartItem) => cartItem.quantity > 0);
  renderCart();
});

const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
