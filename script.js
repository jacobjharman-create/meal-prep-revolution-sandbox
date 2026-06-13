const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

let defaultCheckoutUrl = "https://ordermealpreprevolution.square.site/";
let activeCatalogVersion = "2026-06-13-js-fallback";

const pickerImageVersion = "hires-20260612";
const pickerImage = (src) => `${src}${src.includes("?") ? "&" : "?"}v=${pickerImageVersion}`;

const mealImages = {
  chicken: "assets/images/black-plate-builder/protein-chicken.png",
  steak: "assets/images/black-plate-builder/protein-steak.png",
  salmon: "assets/images/black-plate-builder/protein-salmon.png",
  salad: "assets/images/black-plate-builder/veg-asparagus.png",
  breakfast: "assets/images/black-plate-builder/breakfast-bowl.png",
  breakfastBurrito: "assets/images/black-plate-builder/breakfast-burrito.png",
  breakfastPancakeWaffle: "assets/images/black-plate-builder/breakfast-pancake-waffle.png",
  breakfastBowl: "assets/images/black-plate-builder/breakfast-bowl.png",
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
  "breakfast-burrito": "assets/images/black-plate-builder/breakfast-burrito.png",
  "breakfast-pancake-waffle": "assets/images/black-plate-builder/breakfast-pancake-waffle.png",
  "breakfast-bowl": "assets/images/black-plate-builder/breakfast-bowl.png",
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
    ["Breakfast Burrito", "Egg whites, breakfast hash, protein, vegetables, and salsa in a 14-inch tortilla.", "$9.99 - $13.99", mealImages.breakfastBurrito],
    ["Pancake or Waffle Breakfast", "Protein pancakes or waffles with sausage, syrup, and optional toppings.", "$10.99 - $12.99", mealImages.breakfastPancakeWaffle],
    ["Breakfast Bowl", "Egg style, sausage, breakfast carbs, toppings, and add-ons in one bowl.", "$10.99 - $11.99", mealImages.breakfastBowl],
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

const doneForYouPlanImages = {
  "strength-athlete": "assets/images/done-for-you-plans/single-meal/high-school-strength-athlete-single.png?v=plans-20260613",
  bodybuilder: "assets/images/done-for-you-plans/single-meal/pro-bodybuilder-single.png?v=plans-20260613",
  "womens-fitness": "assets/images/done-for-you-plans/single-meal/womens-fitness-athlete-single.png?v=plans-20260613",
  "single-mom": "assets/images/done-for-you-plans/single-meal/single-mom-week-stack-single.png?v=plans-20260613",
  "business-lean": "assets/images/done-for-you-plans/single-meal/business-lean-cut-single.png?v=plans-20260613",
};

const doneForYouPlans = {
  "strength-athlete": {
    title: "High School Strength Athlete",
    image: doneForYouPlanImages["strength-athlete"],
    focus: {
      mode: "lunch",
      portion: "medium",
      selections: { protein: "steak", grain: "jasmine-rice", vegetables: ["broccoli", "green-beans"], sauce: "teriyaki" },
    },
    meals: [
      {
        type: "breakfast",
        title: "Strength Breakfast Bowl",
        quantity: 4,
        unitPrice: portionPricing.breakfast.medium,
        components: [
          ["protein", "Protein", [{ id: "eggs", name: "Egg Whites", image: builderItemImages.eggs }, { id: "turkey", name: "Turkey Sausage", image: builderItemImages.turkey }]],
          ["carbs", "Carbs", [{ id: "potatoes", name: "Breakfast Hash", image: builderItemImages.potatoes }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Bell Peppers", image: builderItemImages.peppers }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "lunch",
        title: "Lemon Pepper Chicken Strength Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "chicken", name: "Lemon Pepper Chicken", image: builderItemImages.chicken }]],
          ["grain", "Carbs", [{ id: "jasmine-rice", name: "Steamed White Rice", image: builderItemImages["jasmine-rice"] }]],
          ["vegetables", "Vegetables", [{ id: "broccoli", name: "Broccoli", image: builderItemImages.broccoli }]],
          ["sauce", "Sauce", [{ id: "teriyaki", name: "Teriyaki Sauce", image: builderItemImages.teriyaki }]],
        ],
      },
      {
        type: "dinner",
        title: "Steak Rub Tri-Tip Recovery Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "steak", name: "Steak Rub Tri-Tip", image: builderItemImages.steak }]],
          ["grain", "Carbs", [{ id: "sweet-potato", name: "Cinnamon Sweet Potato Mash", image: builderItemImages["sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "green-beans", name: "Green Beans", image: builderItemImages["green-beans"] }]],
          ["sauce", "Sauce", [{ id: "teriyaki", name: "Teriyaki Sauce", image: builderItemImages.teriyaki }]],
        ],
      },
    ],
  },
  bodybuilder: {
    title: "Pro Bodybuilder Pack",
    image: doneForYouPlanImages.bodybuilder,
    focus: {
      mode: "lunch",
      portion: "large",
      selections: { protein: "steak", grain: "jasmine-rice", vegetables: ["asparagus", "broccoli"], sauce: "none" },
    },
    meals: [
      {
        type: "breakfast",
        title: "High Protein Egg White Breakfast",
        quantity: 4,
        unitPrice: portionPricing.breakfast.large,
        components: [
          ["protein", "Protein", [{ id: "eggs", name: "Egg Whites", image: builderItemImages.eggs }, { id: "steak", name: "Steak Rub Steak", image: builderItemImages.steak }]],
          ["carbs", "Carbs", [{ id: "sweet-potato", name: "Cinnamon Sweet Potato Mash", image: builderItemImages["sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "none", name: "Sauce on Side", image: builderItemImages.none }]],
        ],
      },
      {
        type: "lunch",
        title: "Steak Rub Tri-Tip Macro Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.large,
        components: [
          ["protein", "Protein", [{ id: "steak", name: "Steak Rub Tri-Tip", image: builderItemImages.steak }]],
          ["grain", "Carbs", [{ id: "jasmine-rice", name: "Steamed Jasmine Rice", image: builderItemImages["jasmine-rice"] }]],
          ["vegetables", "Vegetables", [{ id: "asparagus", name: "Asparagus", image: builderItemImages.asparagus }]],
          ["sauce", "Sauce", [{ id: "none", name: "No Sauce", image: builderItemImages.none }]],
        ],
      },
      {
        type: "dinner",
        title: "Grilled Chicken Red Potato Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.large,
        components: [
          ["protein", "Protein", [{ id: "chicken", name: "Grilled Chicken", image: builderItemImages.chicken }]],
          ["grain", "Carbs", [{ id: "potatoes", name: "Red Potato Mash", image: builderItemImages.potatoes }]],
          ["vegetables", "Vegetables", [{ id: "broccoli", name: "Broccoli", image: builderItemImages.broccoli }]],
          ["sauce", "Sauce", [{ id: "none", name: "Sauce on Side", image: builderItemImages.none }]],
        ],
      },
    ],
  },
  "womens-fitness": {
    title: "Women's Fitness Athlete",
    image: doneForYouPlanImages["womens-fitness"],
    focus: {
      mode: "lunch",
      portion: "medium",
      selections: { protein: "salmon", grain: "quinoa", vegetables: ["asparagus", "spinach"], sauce: "salsa-verde" },
    },
    meals: [
      {
        type: "breakfast",
        title: "Fitness Breakfast Bowl",
        quantity: 4,
        unitPrice: portionPricing.breakfast.medium,
        components: [
          ["protein", "Protein", [{ id: "eggs", name: "Egg Whites", image: builderItemImages.eggs }, { id: "turkey", name: "Turkey Sausage", image: builderItemImages.turkey }]],
          ["carbs", "Carbs", [{ id: "sweet-potato", name: "Sweet Potato Mash", image: builderItemImages["sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "lunch",
        title: "Garlic Herb Salmon Quinoa Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "salmon", name: "Garlic & Herb Salmon", image: builderItemImages.salmon }]],
          ["grain", "Carbs", [{ id: "quinoa", name: "Steamed Quinoa", image: builderItemImages.quinoa }]],
          ["vegetables", "Vegetables", [{ id: "asparagus", name: "Asparagus", image: builderItemImages.asparagus }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "dinner",
        title: "Ground Turkey Green Bowl",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "turkey", name: "Ground Turkey", image: builderItemImages.turkey }]],
          ["grain", "Carbs", [{ id: "brown-rice", name: "Steamed Brown Rice", image: builderItemImages["brown-rice"] }]],
          ["vegetables", "Vegetables", [{ id: "zucchini", name: "Zucchini", image: builderItemImages.zucchini }, { id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
    ],
  },
  "single-mom": {
    title: "Hero Mom Week Stack",
    image: doneForYouPlanImages["single-mom"],
    focus: {
      mode: "lunch",
      portion: "medium",
      selections: { protein: "meatballs", grain: "noodles", vegetables: ["zucchini", "broccoli"], sauce: "lemon-herb" },
    },
    meals: [
      {
        type: "breakfast",
        title: "On-The-Go Breakfast Bowl",
        quantity: 4,
        unitPrice: portionPricing.breakfast.medium,
        components: [
          ["protein", "Protein", [{ id: "eggs", name: "Egg Whites", image: builderItemImages.eggs }, { id: "turkey", name: "Turkey Sausage", image: builderItemImages.turkey }]],
          ["carbs", "Carbs", [{ id: "potatoes", name: "Breakfast Hash", image: builderItemImages.potatoes }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Bell Peppers", image: builderItemImages.peppers }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "lunch",
        title: "Turkey Meatball Penne Plate",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "meatballs", name: "Turkey Meatballs", image: builderItemImages.meatballs }]],
          ["grain", "Carbs", [{ id: "noodles", name: "Gluten Free Penne Pasta", image: builderItemImages.noodles }]],
          ["vegetables", "Vegetables", [{ id: "zucchini", name: "Zucchini", image: builderItemImages.zucchini }, { id: "broccoli", name: "Broccoli", image: builderItemImages.broccoli }]],
          ["sauce", "Sauce", [{ id: "lemon-herb", name: "Marinara + Cheese", image: builderItemImages["lemon-herb"] }]],
        ],
      },
      {
        type: "dinner",
        title: "Mild Fiesta Chicken Bowl",
        quantity: 4,
        unitPrice: portionPricing.lunch.medium,
        components: [
          ["protein", "Protein", [{ id: "chicken", name: "Grilled Chicken", image: builderItemImages.chicken }]],
          ["grain", "Carbs", [{ id: "jasmine-rice", name: "Steamed White Rice", image: builderItemImages["jasmine-rice"] }, { id: "black-beans", name: "Black Beans", image: builderItemImages["black-beans"] }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Fajita Mix", image: builderItemImages.peppers }, { id: "broccoli", name: "Broccoli", image: builderItemImages.broccoli }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
    ],
  },
  "business-lean": {
    title: "Business Lean Cut",
    image: doneForYouPlanImages["business-lean"],
    focus: {
      mode: "lunch",
      portion: "small",
      selections: { protein: "shrimp", grain: "black-beans", vegetables: ["peppers", "spinach"], sauce: "salsa-verde" },
    },
    meals: [
      {
        type: "breakfast",
        title: "Lean Egg White Breakfast",
        quantity: 4,
        unitPrice: portionPricing.breakfast.small,
        components: [
          ["protein", "Protein", [{ id: "eggs", name: "Egg Whites", image: builderItemImages.eggs }]],
          ["carbs", "Carbs", [{ id: "sweet-potato", name: "Sweet Potato Mash", image: builderItemImages["sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "lunch",
        title: "Lemon Pepper Chicken Taco Salad",
        quantity: 4,
        unitPrice: portionPricing.lunch.small,
        components: [
          ["protein", "Protein", [{ id: "chicken", name: "Lemon Pepper Chicken", image: builderItemImages.chicken }]],
          ["grain", "Carbs", [{ id: "black-beans", name: "Black Beans", image: builderItemImages["black-beans"] }, { id: "peppers", name: "Corn", image: builderItemImages.peppers }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spring Mix", image: builderItemImages.spinach }, { id: "peppers", name: "Fajita Mix", image: builderItemImages.peppers }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
      {
        type: "dinner",
        title: "Shrimp Fajita Lean Bowl",
        quantity: 4,
        unitPrice: portionPricing.lunch.small,
        components: [
          ["protein", "Protein", [{ id: "shrimp", name: "Grilled Shrimp", image: builderItemImages.shrimp }]],
          ["grain", "Carbs", [{ id: "black-beans", name: "Black Beans", image: builderItemImages["black-beans"] }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Fajita Mix", image: builderItemImages.peppers }, { id: "spinach", name: "Spring Mix", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "salsa-verde", name: "Green Salsa", image: builderItemImages["salsa-verde"] }]],
        ],
      },
    ],
  },
};

const heroPlanSequence = [
  {
    key: "strength-athlete",
    eyebrow: "12 meals / strength",
    copy: "4 breakfast, 4 lunch, and 4 dinner meals for training weeks.",
  },
  {
    key: "bodybuilder",
    eyebrow: "12 meals / bodybuilder",
    copy: "A higher-protein approval cart built around steak, chicken, rice, and greens.",
  },
  {
    key: "womens-fitness",
    eyebrow: "12 meals / fitness",
    copy: "A lean, fresh plan with salmon, turkey, quinoa, greens, and sauce on the side.",
  },
  {
    key: "single-mom",
    eyebrow: "12 meals / family week",
    copy: "Breakfasts and familiar lunch/dinner plates for a calmer weekday fridge.",
  },
  {
    key: "business-lean",
    eyebrow: "12 meals / lean workweek",
    copy: "A lighter office-week cart with chicken, shrimp, salads, beans, and fajita vegetables.",
  },
];

function applyCatalogConfig(config) {
  if (!config || typeof config !== "object") return;
  activeCatalogVersion = config.version || activeCatalogVersion;

  if (typeof config.checkout?.url === "string" && /^https?:\/\//.test(config.checkout.url)) {
    defaultCheckoutUrl = config.checkout.url;
    if (!builderState.activeOrderId) builderState.checkoutUrl = defaultCheckoutUrl;
    setWalletCheckoutUrl(defaultCheckoutUrl);
  }

  Object.entries(config.pricing || {}).forEach(([mode, prices]) => {
    if (!portionPricing[mode] || !prices || typeof prices !== "object") return;
    Object.entries(prices).forEach(([portion, price]) => {
      const numericPrice = Number(price);
      if (Number.isFinite(numericPrice) && numericPrice > 0 && portion in portionPricing[mode]) {
        portionPricing[mode][portion] = numericPrice;
      }
    });
  });
}

async function loadCatalogConfig() {
  try {
    const response = await fetch("catalog.json?v=20260613", { cache: "no-store" });
    if (!response.ok) return false;
    applyCatalogConfig(await response.json());
    return true;
  } catch {
    return false;
  }
}

const builderCatalog = {
  breakfast: {
    label: "Breakfast",
    mealLabel: "breakfast",
    hero: builderItemImages["breakfast-bowl"],
    defaultPortion: "medium",
    defaultGroup: "breakfast",
    groups: [
      {
        id: "breakfast",
        label: "Meal",
        icon: "icon-protein",
        multi: false,
        options: [
          { id: "breakfast-burrito", name: "Breakfast Burrito", image: builderItemImages["breakfast-burrito"] },
          { id: "breakfast-pancake-waffle", name: "Pancake / Waffle", image: builderItemImages["breakfast-pancake-waffle"] },
          { id: "breakfast-bowl", name: "Breakfast Bowl", image: builderItemImages["breakfast-bowl"] },
        ],
      },
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
      breakfast: "breakfast-bowl",
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
    eggs: builderItemImages["breakfast-bowl"],
    turkey: builderItemImages["breakfast-burrito"],
    steak: builderItemImages["breakfast-burrito"],
    tofu: builderItemImages["breakfast-bowl"],
  },
  lunch: {
    chicken: builderItemImages.chicken,
    steak: builderItemImages.steak,
    salmon: builderItemImages.salmon,
  },
};

const orderStorage = {
  customer: "mprCustomerProfile",
  draft: "mprOrderDraft",
  queue: "mprOrderOsQueue",
  cart: "mprBuilderCart",
  wooDraft: "mprWooOrderDraft",
  checkoutStarted: "mprCheckoutStarted",
  recurringPreference: "mprRecurringPreference",
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
  mode: "lunch",
  portion: "medium",
  activeGroup: "protein",
  portionByMode: {
    breakfast: "medium",
    lunch: "medium",
  },
  activeGroupByMode: {
    breakfast: "breakfast",
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
  reviewReady: false,
  activeOrderId: "",
  checkoutUrl: defaultCheckoutUrl,
  serverBacked: false,
  detailsOpen: false,
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
const orderDetailsCompact = document.querySelector("#orderDetailsCompact");
const orderDetailsSummary = document.querySelector("#orderDetailsSummary");
const toggleOrderDetails = document.querySelector("#toggleOrderDetails");
const purchaseActions = document.querySelector("#purchaseActions");
const checkoutSummary = document.querySelector("#checkoutSummary");
const recurringChoice = document.querySelector("#recurringChoice");
const checkoutStatus = document.querySelector("#checkoutStatus");
const orderIntake = document.querySelector("#orderIntake");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerEmail = document.querySelector("#customerEmail");
const fulfillmentType = document.querySelector("#fulfillmentType");
const fulfillmentDate = document.querySelector("#fulfillmentDate");
const fulfillmentWindow = document.querySelector("#fulfillmentWindow");
const contactPreference = document.querySelector("#contactPreference");
const deliveryFields = document.querySelector("#deliveryFields");
const deliveryStreet = document.querySelector("#deliveryStreet");
const deliveryUnit = document.querySelector("#deliveryUnit");
const deliveryCity = document.querySelector("#deliveryCity");
const allergyNotes = document.querySelector("#allergyNotes");
const orderNotes = document.querySelector("#orderNotes");
const saveCustomerProfile = document.querySelector("#saveCustomerProfile");
const submitOrderButton = document.querySelector("#submitOrder");
const heroPlanCard = document.querySelector("#heroPlanCard");
const heroPlanEyebrow = document.querySelector("#heroPlanEyebrow");
const heroPlanTitle = document.querySelector("#heroPlanTitle");
const heroPlanCopy = document.querySelector("#heroPlanCopy");
const heroPlanButton = document.querySelector("#heroPlanButton");
let lastHeroImage = builderHeroImage?.getAttribute("src") || "";
let heroSlideToken = 0;
let heroPlanTimer = 0;

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

function formatShortTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatCustomerDate(value) {
  if (!value) return "Date pending";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
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
    contact_preference: contactPreference?.value || "text",
    address: {
      street: deliveryStreet?.value.trim() || "",
      unit: deliveryUnit?.value.trim() || "",
      city: deliveryCity?.value.trim() || "",
    },
    allergies: allergyNotes?.value.trim() || "",
    notes: orderNotes?.value.trim() || "",
  };
}

function setFulfillmentFields() {
  const isDelivery = fulfillmentType?.value === "delivery";
  if (deliveryFields) deliveryFields.hidden = !isDelivery;
  [deliveryStreet, deliveryCity].forEach((field) => {
    if (field) field.required = isDelivery;
  });
}

function hydrateCustomerDraft() {
  if (!fulfillmentDate?.value) fulfillmentDate.value = fulfillmentDateDefault();
  const draft = readStoredJson(orderStorage.draft, {});
  const saved = readStoredJson(orderStorage.customer, {});
  const source = { ...saved, ...draft };

  if (customerName && source.name) customerName.value = source.name;
  if (customerPhone && source.phone) customerPhone.value = source.phone;
  if (customerEmail && source.email) customerEmail.value = source.email;
  if (fulfillmentType && source.fulfillment) fulfillmentType.value = source.fulfillment;
  if (fulfillmentDate && source.date) fulfillmentDate.value = source.date;
  if (fulfillmentWindow && source.window) fulfillmentWindow.value = source.window;
  if (contactPreference && source.contact_preference) contactPreference.value = source.contact_preference;
  if (deliveryStreet && source.address?.street) deliveryStreet.value = source.address.street;
  if (deliveryUnit && source.address?.unit) deliveryUnit.value = source.address.unit;
  if (deliveryCity && source.address?.city) deliveryCity.value = source.address.city;
  if (allergyNotes && source.allergies) allergyNotes.value = source.allergies;
  if (orderNotes && source.notes) orderNotes.value = source.notes;
  setFulfillmentFields();
}

function customerDisplayName(customer) {
  return customer.name || customer.phone || customer.email || "Walk-in customer";
}

function validateOrderRequest(customer) {
  if (!builderState.cart.length) return "Add at least one meal build before checkout.";
  if (!customer.name) return "Add your name so your order can be confirmed.";
  if (!customer.phone && !customer.email) return "Add a phone or email so your order can be confirmed.";
  if (customer.fulfillment === "delivery" && (!customer.address.street || !customer.address.city)) {
    return "Add the delivery address and city before checkout.";
  }
  return "";
}

function focusOrderIssue(customer) {
  let field = null;

  if (!builderState.cart.length) {
    field = addMealButton;
  } else if (!customer.name) {
    field = customerName;
  } else if (!customer.phone && !customer.email) {
    field = customerPhone || customerEmail;
  } else if (customer.fulfillment === "delivery" && !customer.address.street) {
    field = deliveryStreet;
  } else if (customer.fulfillment === "delivery" && !customer.address.city) {
    field = deliveryCity;
  }

  if (!field) return;
  if (orderIntake?.hidden && orderIntake.contains(field)) {
    builderState.detailsOpen = true;
    renderCart();
  }
  field.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => {
    try {
      field.focus?.({ preventScroll: true });
    } catch {
      field.focus?.();
    }
  }, 320);
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

function heroGroupForCurrentMode() {
  return builderState.mode === "breakfast" ? "breakfast" : builderState.activeGroup;
}

function currentBuild() {
  const mode = getCurrentMode();
  const groups = mode.groups.map((group) => ({
    id: group.id,
    label: group.label,
    selected: selectedOptions(group.id),
  }));
  const protein = selectedOptions("protein")[0];
  const selectedBreakfast = builderState.mode === "breakfast" ? selectedOptions("breakfast")[0] : null;
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
  const hero = featuredHero?.image || selectedBreakfast?.image || heroByProtein[builderState.mode]?.[protein?.id] || mode.hero;
  const title = selectedBreakfast ? `${selectedBreakfast.name} build` : `${builderState.portion} ${mode.mealLabel} build`;
  const heroAlt = featuredHero?.label || selectedBreakfast?.name ? `${featuredHero?.label || selectedBreakfast.name} full-screen picker preview` : `${title} preview`;
  const description = groups
    .map((group) => `${group.label}: ${group.selected.map((item) => item.name).join(", ") || "None"}`)
    .join(" / ");

  const build = {
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

  Object.assign(build, createCartPreview(build));
  return build;
}

function selectedCartComponents(build) {
  return build.groups.flatMap((group) =>
    group.selected
      .filter((item) => item.id !== "none" && !item.id.startsWith("no-"))
      .map((item) => ({ ...item, groupId: group.id, groupLabel: group.label })),
  );
}

function createCartPreview(build) {
  const selectedBreakfast = builderState.mode === "breakfast"
    ? selectedOptions("breakfast").find((item) => item.id !== "none" && !item.id.startsWith("no-"))
    : null;
  const selectedProtein = selectedOptions("protein").find((item) => item.id !== "none" && !item.id.startsWith("no-"));
  const fallbackComponent = selectedCartComponents(build)[0];
  const previewItem = selectedBreakfast || selectedProtein || fallbackComponent;
  const summaryParts = build.groups
    .map((group) => {
      const selected = group.selected.map((item) => item.name).join(", ") || "None";
      return `${group.label}: ${selected}`;
    });

  return {
    previewImage: previewItem?.image || build.hero,
    previewAlt: previewItem ? `${previewItem.name} selected for ${build.title}` : `${build.title} preview`,
    previewLabel: previewItem?.name || "Custom meal",
    compactDescription: summaryParts.join(" / "),
  };
}

function createDoneForYouCartItem(planKey, plan, meal) {
  const groups = meal.components.map(([id, label, selected]) => ({
    id,
    label,
    selected: selected.map((item) => ({ ...item })),
  }));
  const unitPrice = Number(meal.unitPrice) || 0;
  const quantity = Number(meal.quantity) || 4;
  const description = groups
    .map((group) => `${group.label}: ${group.selected.map((item) => item.name).join(", ")}`)
    .join(" / ");
  const summary = groups
    .map((group) => group.selected.map((item) => item.name).join(" + "))
    .filter(Boolean)
    .join(" + ");
  const previewItem = groups.flatMap((group) => group.selected)[0];

  return {
    key: `done-for-you|${planKey}|${meal.type}`,
    sku: `mpr-done-for-you-${planKey}-${meal.type}`,
    planKey,
    planTitle: plan.title,
    mode: meal.type === "breakfast" ? "breakfast" : "lunch",
    mealType: meal.type,
    portion: meal.type === "breakfast" ? "medium" : plan.focus.portion,
    quantity,
    unitPrice,
    total: Number((quantity * unitPrice).toFixed(2)),
    avg: unitPrice,
    title: meal.title,
    description,
    summary,
    hero: plan.image,
    heroAlt: `${plan.title} ${meal.type} meal preview`,
    previewImage: plan.image,
    previewAlt: `${plan.title} done for you meal plan`,
    previewLabel: `${plan.title} / ${titleCase(meal.type)}`,
    compactDescription: description,
    groups,
    selections: Object.fromEntries(groups.map((group) => [group.id, group.selected.map((item) => item.name)])),
  };
}

function loadDoneForYouPlan(planKey) {
  const plan = doneForYouPlans[planKey];
  if (!plan) return;
  const focus = plan.focus || {};

  builderState.mode = focus.mode || "lunch";
  builderState.portion = focus.portion || builderState.portion;
  builderState.portionByMode[builderState.mode] = builderState.portion;
  builderState.activeGroup = "protein";
  builderState.activeGroupByMode[builderState.mode] = "protein";
  builderState.quantity = 12;
  if (focus.selections) {
    builderState.selections[builderState.mode] = cloneData({
      ...builderCatalog[builderState.mode].defaults,
      ...focus.selections,
    });
  }
  builderState.featuredHeroByMode[builderState.mode] = {
    image: plan.image,
    label: plan.title,
  };
  builderState.forceHeroSlide = true;
  builderState.cart = plan.meals.map((meal) => createDoneForYouCartItem(planKey, plan, meal));
  builderState.reviewReady = false;
  resetCheckoutFlow();
  renderBuilder();
  orderNote.innerHTML = `<strong>${escapeHtml(plan.title)}</strong> loaded: 4 breakfasts, 4 lunches, and 4 dinners are ready for approval. Add contact details, then continue to secure checkout.`;
  document.querySelector("#wizard")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cartForStorage() {
  return builderState.cart.map((item) => ({ ...item }));
}

function cartSignature(list = builderState.cart) {
  return (Array.isArray(list) ? list : [])
    .map((item) => `${item.key || ""}:${Number(item.quantity) || 0}:${Number(item.total) || 0}`)
    .join("|");
}

function normalizeCartItem(item) {
  if (!item || typeof item !== "object" || !item.key || !item.title) return null;
  const unitPrice = Number(item.unitPrice) || Number(item.avg) || 0;
  const quantity = Math.min(96, Math.max(1, Number.parseInt(item.quantity, 10) || 1));
  return {
    ...item,
    quantity,
    unitPrice,
    avg: Number(item.avg) || unitPrice,
    total: Number((quantity * unitPrice).toFixed(2)),
    groups: Array.isArray(item.groups) ? item.groups : [],
  };
}

function saveCartState() {
  writeStoredJson(orderStorage.cart, cartForStorage());
}

function hydrateCartState() {
  const savedCart = readStoredJson(orderStorage.cart, []);
  builderState.cart = (Array.isArray(savedCart) ? savedCart : []).map(normalizeCartItem).filter(Boolean);
  if (!builderState.cart.length) return;

  const draft = readStoredJson(orderStorage.wooDraft, {});
  const draftMatchesCart = draft.request_id && cartSignature(draft.cart) === cartSignature(builderState.cart);
  if (draftMatchesCart) {
    builderState.reviewReady = true;
    builderState.activeOrderId = draft.request_id;
    builderState.checkoutUrl = draft.checkout_url || defaultCheckoutUrl;
    builderState.serverBacked = Boolean(draft.server_backed);
    builderState.detailsOpen = false;
    orderNote.innerHTML = `<strong>${draft.total_meals || builderState.cart.reduce((sum, item) => sum + item.quantity, 0)} meals</strong> already have a checkout ticket. Finish payment or edit the cart to start a fresh checkout.`;
    return;
  }

  orderNote.textContent = "Your saved meal cart is ready. Review details, then continue to checkout.";
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

function setHeroPlan(index = 0) {
  const item = heroPlanSequence[index % heroPlanSequence.length];
  const plan = doneForYouPlans[item.key];
  if (!item || !plan || !heroPlanButton) return;
  if (heroPlanCard) {
    heroPlanCard.classList.remove("is-refreshing");
    void heroPlanCard.offsetWidth;
    heroPlanCard.classList.add("is-refreshing");
  }
  if (heroPlanEyebrow) heroPlanEyebrow.textContent = item.eyebrow;
  if (heroPlanTitle) heroPlanTitle.textContent = plan.title;
  if (heroPlanCopy) heroPlanCopy.textContent = item.copy;
  heroPlanButton.dataset.loadPlan = item.key;
  heroPlanButton.setAttribute("aria-label", `Load ${plan.title} into the meal builder`);
}

function startHeroPlanSync() {
  if (!heroPlanButton || !heroPlanSequence.length) return;
  let index = 0;
  const mobile = window.matchMedia("(max-width: 680px)");
  const interval = () => (mobile.matches ? 8000 : 9000);
  const tick = () => {
    index = (index + 1) % heroPlanSequence.length;
    setHeroPlan(index);
    window.clearTimeout(heroPlanTimer);
    heroPlanTimer = window.setTimeout(tick, interval());
  };
  setHeroPlan(index);
  window.clearTimeout(heroPlanTimer);
  heroPlanTimer = window.setTimeout(tick, interval());
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
    sku: item.sku || `mpr-${item.mode}-${item.portion}-custom-meal`,
    name: item.title,
    quantity: item.quantity,
    unit_price: item.unitPrice,
    line_total: item.total,
    reorder_key: item.key,
    preview_image: item.previewImage,
    summary: item.compactDescription || item.summary,
    builder_groups: item.groups.map((group) => ({
      id: group.id,
      label: group.label,
      selected: group.selected.map((selection) => selection.name),
    })),
    meta_data: [
      { key: "Meal Type", value: item.mealType },
      { key: "Meal Plan", value: item.planTitle || "Custom build" },
      { key: "Portion", value: item.portion },
      { key: "Average Meal Price", value: dollars(item.avg) },
      { key: "Selections", value: item.description },
      { key: "Fulfillment", value: `${customer.fulfillment} / ${customer.date} / ${customer.window}` },
      { key: "Contact Preference", value: customer.contact_preference },
      { key: "Delivery Address", value: customer.fulfillment === "delivery" ? `${customer.address.street}${customer.address.unit ? ` ${customer.address.unit}` : ""}, ${customer.address.city}` : "Pickup" },
      { key: "Allergies", value: customer.allergies || "None" },
      { key: "Customer Notes", value: customer.notes || "None" },
    ],
  }));
  const totalMeals = lines.reduce((sum, line) => sum + line.quantity, 0);
  const totalPrice = lines.reduce((sum, line) => sum + line.line_total, 0);

  return {
    source: "meal-prep-revolution-sandbox-builder",
    version: "2026-06-13-ops-foundation",
    catalog_version: activeCatalogVersion,
    currency: "USD",
    customer,
    fulfillment: {
      type: customer.fulfillment,
      date: customer.date,
      window: customer.window,
      notes: customer.notes,
      allergies: customer.allergies,
      address: customer.address,
      contact_preference: customer.contact_preference,
    },
    total_meals: totalMeals,
    estimated_total: Number(totalPrice.toFixed(2)),
    line_items: lines,
    cart: cloneData(cartForStorage()),
  };
}

function requestId() {
  const stamp = new Date().toISOString().replace(/\D/g, "").slice(4, 12);
  const suffix = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `MPR-${stamp}-${suffix}`;
}

function saveOrderRequest(payload) {
  writeStoredJson(orderStorage.draft, payload.customer);

  if (saveCustomerProfile?.checked) {
    writeStoredJson(orderStorage.customer, {
      ...payload.customer,
      last_order_id: payload.request_id,
      last_order_at: payload.created_at,
      last_cart: cloneData(cartForStorage()),
      last_total_meals: payload.total_meals,
      last_estimated_total: payload.estimated_total,
    });
  }
}

function saveInternalOrder(payload) {
  const queue = readStoredJson(orderStorage.queue, []);
  const ticket = {
    id: payload.request_id,
    status: "New",
    payment_status: payload.payment_status || "Pending checkout",
    checkout_url: payload.checkout_url || defaultCheckoutUrl,
    server_backed: Boolean(payload.server_backed),
    created_at: payload.created_at,
    customer: payload.customer,
    fulfillment: payload.fulfillment,
    total_meals: payload.total_meals,
    estimated_total: payload.estimated_total,
    line_items: payload.line_items,
    cart: cloneData(cartForStorage()),
    next_actions: ["Confirm payment", "Batch ingredients", "Assign pickup or delivery window"],
  };
  const withoutDuplicate = queue.filter((item) => item.id !== ticket.id);
  writeStoredJson(orderStorage.queue, [ticket, ...withoutDuplicate].slice(0, 24));
}

function setWalletCheckoutUrl(url) {
  const checkoutUrl = url || defaultCheckoutUrl;
  document.querySelectorAll("a[data-checkout-wallet]").forEach((link) => {
    link.href = checkoutUrl;
  });
}

async function submitOrderToBackend(payload) {
  const response = await fetch("api/orders.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || "Order could not be created.");
    error.status = response.status;
    error.validation = response.status >= 400 && response.status < 500 && response.status !== 404;
    throw error;
  }
  return data;
}

function postOrderEvent(eventName, extra = {}) {
  const draft = readStoredJson(orderStorage.wooDraft, {});
  const requestIdValue = builderState.activeOrderId || draft.request_id;
  if (!requestIdValue || !builderState.serverBacked) return;
  const payload = JSON.stringify({
    request_id: requestIdValue,
    event: eventName,
    ...extra,
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("api/order-event.php", new Blob([payload], { type: "application/json" }));
    return;
  }
  fetch("api/order-event.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}

function resetCheckoutFlow() {
  builderState.activeOrderId = "";
  builderState.checkoutUrl = defaultCheckoutUrl;
  builderState.serverBacked = false;
  if (checkoutStatus) checkoutStatus.hidden = true;
  if (recurringChoice) recurringChoice.hidden = true;
  renderRecurringChoiceState("");
}

function activeCheckoutPayload(basePayload = buildWooPayload()) {
  if (!builderState.reviewReady || !builderState.activeOrderId) return basePayload;
  const draft = readStoredJson(orderStorage.wooDraft, {});
  return {
    ...basePayload,
    request_id: builderState.activeOrderId,
    created_at: draft.created_at || new Date().toISOString(),
    checkout_url: builderState.checkoutUrl || draft.checkout_url || defaultCheckoutUrl,
    payment_status: draft.payment_status || "Pending checkout",
    server_backed: builderState.serverBacked || Boolean(draft.server_backed),
  };
}

function renderCheckoutStatus(payload = {}) {
  if (!checkoutStatus) return;
  const orderId = builderState.activeOrderId || payload.request_id || "";
  if (!builderState.reviewReady || !builderState.cart.length || !orderId) {
    checkoutStatus.hidden = true;
    checkoutStatus.innerHTML = "";
    return;
  }

  const checkout = readStoredJson(orderStorage.checkoutStarted, {});
  const recurring = readStoredJson(orderStorage.recurringPreference, {});
  const checkoutMatches = checkout.request_id === orderId;
  const recurringOrderId = recurring.request_id || recurring.order?.request_id || "";
  const recurringMatches = recurringOrderId === orderId;
  const checkoutTime = formatShortTime(checkout.started_at);
  const repeatLabel = recurring.frequency === "one time only" ? "One time only" : recurring.frequency;
  const rows = [
    ["Order ticket", `${orderId} created`, true],
    ["Payment", checkoutMatches ? `${checkout.wallet || "Checkout"} opened${checkoutTime ? ` at ${checkoutTime}` : ""}` : "Choose Apple Pay, Amazon Pay, or card", checkoutMatches],
    ["Repeat", recurringMatches ? repeatLabel : "Choose weekly, monthly, or one time", recurringMatches],
  ];

  checkoutStatus.hidden = false;
  checkoutStatus.innerHTML = `
    <div class="checkout-status-head">
      <span class="checkout-eyebrow">Order status</span>
      <strong>${escapeHtml(payload.total_meals || 0)} meals / ${escapeHtml(dollars(payload.estimated_total || 0))}</strong>
    </div>
    <div class="checkout-status-steps">
      ${rows.map(([label, value, complete]) => `
        <div class="checkout-status-step${complete ? " complete" : ""}">
          <span aria-hidden="true"></span>
          <div>
            <strong>${escapeHtml(label)}</strong>
            <small>${escapeHtml(value)}</small>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function hasActiveCheckout(orderId = builderState.activeOrderId) {
  return Boolean(builderState.reviewReady && builderState.cart.length && orderId);
}

function renderRecurringChoiceState(orderId = builderState.activeOrderId) {
  const recurring = readStoredJson(orderStorage.recurringPreference, {});
  const recurringOrderId = recurring.request_id || recurring.order?.request_id || "";
  document.querySelectorAll("[data-recurring]").forEach((button) => {
    const selected = Boolean(orderId && recurringOrderId === orderId && recurring.frequency === button.dataset.recurring);
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderRecurringChoice(payload = {}) {
  const orderId = builderState.activeOrderId || payload.request_id || "";
  if (recurringChoice) recurringChoice.hidden = !hasActiveCheckout(orderId);
  renderRecurringChoiceState(orderId);
}

function orderDetailsSummaryText() {
  const customer = getCustomerDraft();
  const contact = customer.name
    ? [customer.name, customer.phone || customer.email].filter(Boolean).join(" / ")
    : customer.phone || customer.email || "Contact details needed";
  const handoff = [
    titleCase(customer.fulfillment),
    formatCustomerDate(customer.date),
    titleCase(customer.window),
  ].filter(Boolean).join(" / ");
  const delivery = customer.fulfillment === "delivery" && customer.address.city ? ` / ${customer.address.city}` : "";
  return `${contact} - ${handoff}${delivery}`;
}

function renderOrderDetailsState() {
  const checkoutLocked = Boolean(builderState.reviewReady && builderState.activeOrderId && builderState.cart.length);
  if (orderDetailsSummary) orderDetailsSummary.textContent = orderDetailsSummaryText();
  if (orderDetailsCompact) orderDetailsCompact.hidden = !checkoutLocked;
  if (orderIntake) orderIntake.hidden = checkoutLocked && !builderState.detailsOpen;
  if (toggleOrderDetails) {
    toggleOrderDetails.textContent = builderState.detailsOpen ? "Hide Details" : "Edit Details";
    toggleOrderDetails.setAttribute("aria-expanded", String(builderState.detailsOpen));
  }
}

function setDetailsChangedNote() {
  orderNote.textContent = builderState.cart.length
    ? "Order details updated. Continue to secure checkout when ready."
    : "Order details saved. Add a meal build before checkout.";
}

function renderCart() {
  if (!builderState.cart.length) {
    cartItems.innerHTML = `<div class="cart-empty">Your selected meals will appear here after you add a build.</div>`;
  } else {
    cartItems.innerHTML = builderState.cart
      .map((item) => `
        <article class="cart-item">
          <div class="cart-meal-thumb">
            <img src="${item.previewImage}" alt="${escapeHtml(item.previewAlt || `${item.title} preview`)}">
          </div>
          <div class="cart-item-body">
            <div class="cart-item-main">
              <div>
                <h4>${escapeHtml(item.title)}</h4>
                <p>${escapeHtml(item.compactDescription || item.description)}</p>
                <small>${escapeHtml(item.previewLabel || "Custom meal")} · ${dollars(item.avg)}/meal</small>
              </div>
              <strong>${dollars(item.total)}</strong>
            </div>
            <div class="cart-item-footer">
              <span>${item.quantity} ${item.quantity === 1 ? "meal" : "meals"} in cart</span>
              <div class="cart-item-actions">
                <div class="cart-qty" aria-label="${escapeHtml(item.title)} quantity">
                  <button type="button" data-cart-action="decrease" data-cart-key="${item.key}" aria-label="Decrease ${escapeHtml(item.title)}">-</button>
                  <span>${item.quantity}</span>
                  <button type="button" data-cart-action="increase" data-cart-key="${item.key}" aria-label="Increase ${escapeHtml(item.title)}">+</button>
                </div>
                <button class="cart-remove" type="button" data-cart-action="remove" data-cart-key="${item.key}" aria-label="Remove ${escapeHtml(item.title)}">Remove</button>
              </div>
            </div>
          </div>
        </article>
      `)
      .join("");
  }

  const payload = activeCheckoutPayload(buildWooPayload());
  cartMealTotal.textContent = payload.total_meals;
  cartPriceTotal.textContent = builderState.cart.length ? dollars(payload.estimated_total) : "Review";
  purchaseActions.hidden = !builderState.reviewReady || !builderState.cart.length;
  setWalletCheckoutUrl(builderState.checkoutUrl);
  if (checkoutSummary && builderState.cart.length) {
    checkoutSummary.textContent = `${payload.total_meals} meals · ${dollars(payload.estimated_total)} estimated`;
  }
  if (submitOrderButton && !submitOrderButton.disabled) {
    submitOrderButton.textContent = builderState.reviewReady && builderState.activeOrderId ? "Checkout Ready" : "Continue to Secure Checkout";
  }
  renderOrderDetailsState();
  renderRecurringChoice(payload);
  renderCheckoutStatus(payload);
  saveCartState();
  localStorage.setItem(orderStorage.wooDraft, JSON.stringify(payload));
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
  resetCheckoutFlow();
  renderBuilder();
}

function addCurrentBuildToCart() {
  const build = currentBuild();
  const existing = builderState.cart.find((item) => item.key === build.key);
  builderState.reviewReady = false;
  resetCheckoutFlow();

  if (existing) {
    existing.quantity += build.quantity;
    existing.total = existing.quantity * existing.unitPrice;
  } else {
    builderState.cart.push({ ...build });
  }

  orderNote.textContent = `${build.quantity} ${build.title} ${build.quantity === 1 ? "meal" : "meals"} added. Keep building or continue to checkout.`;
  renderCart();
}

async function prepareStoreOrder() {
  const customer = getCustomerDraft();
  const validationMessage = validateOrderRequest(customer);

  if (validationMessage) {
    orderNote.textContent = validationMessage;
    focusOrderIssue(customer);
    return;
  }

  if (builderState.reviewReady && builderState.activeOrderId) {
    const activePayload = activeCheckoutPayload(buildWooPayload());
    builderState.checkoutUrl = activePayload.checkout_url || defaultCheckoutUrl;
    setWalletCheckoutUrl(builderState.checkoutUrl);
    renderCart();
    orderNote.innerHTML = `<strong>${activePayload.total_meals} meals</strong> already have a checkout ticket. Choose Apple Pay, Amazon Pay, or card to finish payment.`;
    purchaseActions?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  builderState.reviewReady = true;
  const payload = buildWooPayload();
  payload.request_id = requestId();
  payload.created_at = new Date().toISOString();
  payload.checkout_url = defaultCheckoutUrl;
  payload.payment_status = "Pending checkout";

  if (submitOrderButton) {
    submitOrderButton.disabled = true;
    submitOrderButton.textContent = "Creating checkout...";
  }
  orderNote.textContent = "Creating a clean checkout ticket...";

  try {
    const serverOrder = await submitOrderToBackend(payload);
    payload.request_id = serverOrder.request_id || payload.request_id;
    payload.checkout_url = serverOrder.checkout_url || defaultCheckoutUrl;
    payload.payment_status = serverOrder.payment_status || "Pending checkout";
    payload.server_backed = true;
    builderState.serverBacked = true;
  } catch (error) {
    if (error.validation) {
      builderState.reviewReady = false;
      builderState.serverBacked = false;
      orderNote.textContent = error.message || "Review the order details before checkout.";
      renderCart();
      return;
    }
    payload.server_backed = false;
    payload.backend_error = error.message || "Order API unavailable.";
    builderState.serverBacked = false;
  } finally {
    if (submitOrderButton) {
      submitOrderButton.disabled = false;
      submitOrderButton.textContent = "Continue to Secure Checkout";
    }
  }

  builderState.activeOrderId = payload.request_id;
  builderState.checkoutUrl = payload.checkout_url || defaultCheckoutUrl;
  builderState.detailsOpen = false;
  saveOrderRequest(payload);
  saveInternalOrder(payload);
  renderCart();
  localStorage.setItem(orderStorage.wooDraft, JSON.stringify(payload));
  orderNote.innerHTML = payload.server_backed
    ? `<strong>${payload.total_meals} meals</strong> are ready for secure checkout. Choose Apple Pay, Amazon Pay, or card to finish payment.`
    : `<strong>${payload.total_meals} meals</strong> are ready for checkout. Local fallback is active, so the admin board may need a refresh after checkout.`;
  purchaseActions?.scrollIntoView({ behavior: "smooth", block: "nearest" });

}

async function bootCustomerApp() {
  await loadCatalogConfig();
  hydrateCustomerDraft();
  hydrateCartState();
  startHeroPlanSync();
  renderMenu("build");
  renderBuilder();
}

bootCustomerApp();

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
    setFeaturedHeroFromGroup(heroGroupForCurrentMode());
    builderState.reviewReady = false;
    resetCheckoutFlow();
    renderBuilder();
  });
});

portionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    builderState.portion = button.dataset.portion;
    builderState.portionByMode[builderState.mode] = builderState.portion;
    builderState.reviewReady = false;
    resetCheckoutFlow();
    renderBuilder();
  });
});

builderGroups.addEventListener("click", (event) => {
  const button = event.target.closest("[data-builder-step]");
  if (!button) return;
  builderState.activeGroup = button.dataset.builderStep;
  builderState.activeGroupByMode[builderState.mode] = builderState.activeGroup;
  setFeaturedHeroFromGroup(heroGroupForCurrentMode());
  renderBuilder();
});

builderOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest(".option-card");
  if (!optionButton) return;

  const group = getCurrentGroup();
  const optionId = optionButton.dataset.option;
  const option = getOption(group.id, optionId);
  const current = builderState.selections[builderState.mode][group.id];
  if (builderState.mode !== "breakfast" || group.id === "breakfast") {
    setFeaturedHero(option);
  }

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
  } else if (builderState.mode === "breakfast" && group.id === "breakfast") {
    builderState.selections[builderState.mode][group.id] = optionId;
  } else {
    builderState.selections[builderState.mode][group.id] = current === optionId ? null : optionId;
  }

  builderState.reviewReady = false;
  resetCheckoutFlow();
  renderBuilder();
});

selectionStack.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-selection-group][data-selection-option]");
  if (!chip) return;

  const group = builderCatalog[builderState.mode].groups.find((item) => item.id === chip.dataset.selectionGroup);
  if (!group) return;
  if (builderState.mode === "breakfast" && group.id === "breakfast") return;

  const current = builderState.selections[builderState.mode][group.id];
  if (builderState.mode !== "breakfast") {
    setFeaturedHero(getOption(group.id, chip.dataset.selectionOption));
  }
  if (group.multi) {
    builderState.selections[builderState.mode][group.id] = (Array.isArray(current) ? current : []).filter(
      (id) => id !== chip.dataset.selectionOption,
    );
  } else if (current === chip.dataset.selectionOption) {
    builderState.selections[builderState.mode][group.id] = null;
  }

  builderState.reviewReady = false;
  resetCheckoutFlow();
  renderBuilder();
});

document.querySelector("#qtyMinus").addEventListener("click", () => setQuantity(builderState.quantity - 1));
document.querySelector("#qtyPlus").addEventListener("click", () => setQuantity(builderState.quantity + 1));
mealQuantity.addEventListener("input", () => setQuantity(mealQuantity.value));
addMealButton.addEventListener("click", addCurrentBuildToCart);
document.querySelectorAll("[data-load-plan]").forEach((button) => {
  button.addEventListener("click", () => loadDoneForYouPlan(button.dataset.loadPlan));
});
submitOrderButton?.addEventListener("click", () => {
  prepareStoreOrder().catch((error) => {
    orderNote.textContent = error.message || "Checkout could not be prepared.";
    if (submitOrderButton) {
      submitOrderButton.disabled = false;
      submitOrderButton.textContent = "Continue to Secure Checkout";
    }
  });
});

purchaseActions?.addEventListener("click", (event) => {
  const walletLink = event.target.closest("[data-checkout-wallet]");
  const recurringButton = event.target.closest("[data-recurring]");

  if (walletLink) {
    const payload = readStoredJson(orderStorage.wooDraft, buildWooPayload());
    const wallet = walletLink.dataset.checkoutWallet;
    writeStoredJson(orderStorage.checkoutStarted, {
      wallet,
      started_at: new Date().toISOString(),
      request_id: payload.request_id,
      total_meals: payload.total_meals,
      estimated_total: payload.estimated_total,
    });
    postOrderEvent("checkout_started", { wallet });
    renderRecurringChoice(payload);
    renderCheckoutStatus(payload);
    orderNote.innerHTML = `<strong>${escapeHtml(wallet)}</strong> checkout opened. You can mark this weekly, monthly, or one time only here.`;
    return;
  }

  if (recurringButton) {
    const order = readStoredJson(orderStorage.wooDraft, buildWooPayload());
    writeStoredJson(orderStorage.recurringPreference, {
      frequency: recurringButton.dataset.recurring,
      selected_at: new Date().toISOString(),
      request_id: order.request_id,
      order,
    });
    postOrderEvent("recurring_selected", { frequency: recurringButton.dataset.recurring });
    renderRecurringChoice(order);
    renderCheckoutStatus(order);
    orderNote.innerHTML = recurringButton.dataset.recurring === "one time only"
      ? "Perfect. This order will stay one time only."
      : `Perfect. We saved <strong>${escapeHtml(recurringButton.dataset.recurring)}</strong> as the preferred repeat schedule.`;
  }
});

toggleOrderDetails?.addEventListener("click", () => {
  builderState.detailsOpen = !builderState.detailsOpen;
  renderCart();

  if (!builderState.detailsOpen) return;
  window.setTimeout(() => {
    orderIntake?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    try {
      customerName?.focus({ preventScroll: true });
    } catch {
      customerName?.focus();
    }
  }, 80);
});

orderIntake?.addEventListener("input", () => {
  writeStoredJson(orderStorage.draft, getCustomerDraft());
  builderState.reviewReady = false;
  resetCheckoutFlow();
  setDetailsChangedNote();
  renderCart();
});

orderIntake?.addEventListener("change", () => {
  setFulfillmentFields();
  writeStoredJson(orderStorage.draft, getCustomerDraft());
  builderState.reviewReady = false;
  resetCheckoutFlow();
  setDetailsChangedNote();
  renderCart();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const item = builderState.cart.find((cartItem) => cartItem.key === button.dataset.cartKey);
  if (!item) return;

  const removedTitle = item.title;
  if (button.dataset.cartAction === "remove") {
    builderState.cart = builderState.cart.filter((cartItem) => cartItem.key !== item.key);
    builderState.reviewReady = false;
    resetCheckoutFlow();
    orderNote.textContent = `${removedTitle} removed from your cart.`;
    renderCart();
    return;
  }

  item.quantity += button.dataset.cartAction === "increase" ? 1 : -1;
  item.total = item.quantity * item.unitPrice;
  builderState.reviewReady = false;
  resetCheckoutFlow();
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
