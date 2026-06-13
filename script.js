const squareLinks = {
  build: "https://ordermealpreprevolution.square.site/shop/build-a-meal/13",
  favorites: "https://ordermealpreprevolution.square.site/shop/fan-favorites/16",
  breakfast: "https://ordermealpreprevolution.square.site/shop/breakfast/15",
  salads: "https://ordermealpreprevolution.square.site/shop/salads/17",
  packs: "https://ordermealpreprevolution.square.site/shop/stacks-packs/14",
  bulk: "https://ordermealpreprevolution.square.site/shop/bulk-items/5",
};

const pickerImageVersion = "breakfast-components-20260613";
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
  "breakfast-protein-pancakes": "assets/images/black-plate-builder/breakfast-protein-pancakes.png",
  "breakfast-protein-waffles": "assets/images/black-plate-builder/breakfast-protein-waffles.png",
  "breakfast-turkey-sausage": "assets/images/black-plate-builder/breakfast-turkey-sausage.png",
  "breakfast-pork-sausage": "assets/images/black-plate-builder/breakfast-pork-sausage.png",
  "breakfast-egg-whites": "assets/images/black-plate-builder/breakfast-egg-whites.png",
  "breakfast-egg-bites": "assets/images/black-plate-builder/breakfast-egg-bites.png",
  "breakfast-hash": "assets/images/black-plate-builder/breakfast-hash.png",
  "breakfast-cinnamon-sweet-potato": "assets/images/black-plate-builder/breakfast-cinnamon-sweet-potato.png",
  "breakfast-maple-syrup": "assets/images/black-plate-builder/breakfast-maple-syrup.png",
  "breakfast-blueberry-syrup": "assets/images/black-plate-builder/breakfast-blueberry-syrup.png",
  "breakfast-salsa": "assets/images/black-plate-builder/breakfast-salsa.png",
  "breakfast-chimichurri": "assets/images/black-plate-builder/breakfast-chimichurri.png",
  "breakfast-hot-sauce": "assets/images/black-plate-builder/breakfast-hot-sauce.png",
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
          ["protein", "Protein", [{ id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] }, { id: "breakfast-turkey-sausage", name: "Turkey Sausage", image: builderItemImages["breakfast-turkey-sausage"] }]],
          ["carbs", "Carbs", [{ id: "breakfast-hash", name: "Breakfast Hash", image: builderItemImages["breakfast-hash"] }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Bell Peppers", image: builderItemImages.peppers }]],
          ["sauce", "Sauce", [{ id: "breakfast-salsa", name: "Salsa", image: builderItemImages["breakfast-salsa"] }]],
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
          ["protein", "Protein", [{ id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] }, { id: "steak", name: "Steak Rub Steak", image: builderItemImages.steak }]],
          ["carbs", "Carbs", [{ id: "breakfast-cinnamon-sweet-potato", name: "Cinnamon Sweet Potato Mash", image: builderItemImages["breakfast-cinnamon-sweet-potato"] }]],
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
    title: "Lean Fitness Athlete",
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
          ["protein", "Protein", [{ id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] }, { id: "breakfast-turkey-sausage", name: "Turkey Sausage", image: builderItemImages["breakfast-turkey-sausage"] }]],
          ["carbs", "Carbs", [{ id: "breakfast-cinnamon-sweet-potato", name: "Sweet Potato Mash", image: builderItemImages["breakfast-cinnamon-sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "breakfast-salsa", name: "Salsa", image: builderItemImages["breakfast-salsa"] }]],
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
          ["protein", "Protein", [{ id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] }, { id: "breakfast-turkey-sausage", name: "Turkey Sausage", image: builderItemImages["breakfast-turkey-sausage"] }]],
          ["carbs", "Carbs", [{ id: "breakfast-hash", name: "Breakfast Hash", image: builderItemImages["breakfast-hash"] }]],
          ["vegetables", "Vegetables", [{ id: "peppers", name: "Bell Peppers", image: builderItemImages.peppers }]],
          ["sauce", "Sauce", [{ id: "breakfast-salsa", name: "Salsa", image: builderItemImages["breakfast-salsa"] }]],
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
          ["protein", "Protein", [{ id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] }]],
          ["carbs", "Carbs", [{ id: "breakfast-cinnamon-sweet-potato", name: "Sweet Potato Mash", image: builderItemImages["breakfast-cinnamon-sweet-potato"] }]],
          ["vegetables", "Vegetables", [{ id: "spinach", name: "Spinach", image: builderItemImages.spinach }]],
          ["sauce", "Sauce", [{ id: "breakfast-salsa", name: "Salsa", image: builderItemImages["breakfast-salsa"] }]],
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
    copy: "A lighter office-week cart with chicken, shrimp, beans, and fajita vegetables.",
  },
];

const builderCatalog = {
  breakfast: {
    label: "Breakfast",
    mealLabel: "breakfast",
    hero: builderItemImages["breakfast-bowl"],
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
          { id: "breakfast-egg-whites", name: "Egg Whites", image: builderItemImages["breakfast-egg-whites"] },
          { id: "breakfast-egg-bites", name: "Egg Bites", image: builderItemImages["breakfast-egg-bites"] },
          { id: "breakfast-turkey-sausage", name: "Turkey Sausage", image: builderItemImages["breakfast-turkey-sausage"] },
          { id: "breakfast-pork-sausage", name: "Pork Sausage", image: builderItemImages["breakfast-pork-sausage"] },
          { id: "breakfast-protein-pancakes", name: "Protein Pancakes", image: builderItemImages["breakfast-protein-pancakes"] },
          { id: "breakfast-protein-waffles", name: "Protein Waffles", image: builderItemImages["breakfast-protein-waffles"] },
          { id: "steak", name: "Steak", image: builderItemImages.steak },
        ],
      },
      {
        id: "carbs",
        label: "Carbs",
        icon: "icon-carb",
        multi: false,
        options: [
          { id: "breakfast-hash", name: "Breakfast Hash", image: builderItemImages["breakfast-hash"] },
          { id: "breakfast-cinnamon-sweet-potato", name: "Cinnamon Sweet Potato", image: builderItemImages["breakfast-cinnamon-sweet-potato"] },
          { id: "potatoes", name: "Potatoes", image: builderItemImages.potatoes },
          { id: "oats", name: "Oats", image: builderItemImages.quinoa },
          { id: "sweet-potato", name: "Sweet Potato", image: builderItemImages["sweet-potato"] },
          { id: "rice", name: "Rice", image: builderItemImages["jasmine-rice"] },
          { id: "beans", name: "Beans", image: builderItemImages["black-beans"] },
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
          { id: "breakfast-maple-syrup", name: "Maple Syrup", image: builderItemImages["breakfast-maple-syrup"] },
          { id: "breakfast-blueberry-syrup", name: "Blueberry Syrup", image: builderItemImages["breakfast-blueberry-syrup"] },
          { id: "breakfast-salsa", name: "Salsa", image: builderItemImages["breakfast-salsa"] },
          { id: "breakfast-chimichurri", name: "Chimichurri", image: builderItemImages["breakfast-chimichurri"] },
          { id: "breakfast-hot-sauce", name: "Hot Sauce", image: builderItemImages["breakfast-hot-sauce"] },
        ],
      },
    ],
    defaults: {
      protein: "eggs",
      carbs: "breakfast-hash",
      vegetables: ["peppers"],
      sauce: "breakfast-salsa",
    },
  },
  lunch: {
    label: "Lunch / Dinner",
    mealLabel: "lunch/dinner",
    hero: "assets/images/black-plate-builder/protein-steak.png",
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
        label: "Carbs",
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
    "breakfast-egg-whites": builderItemImages["breakfast-egg-whites"],
    "breakfast-egg-bites": builderItemImages["breakfast-egg-bites"],
    "breakfast-turkey-sausage": builderItemImages["breakfast-turkey-sausage"],
    "breakfast-pork-sausage": builderItemImages["breakfast-pork-sausage"],
    "breakfast-protein-pancakes": builderItemImages["breakfast-protein-pancakes"],
    "breakfast-protein-waffles": builderItemImages["breakfast-protein-waffles"],
    steak: builderItemImages.steak,
  },
  lunch: {
    chicken: "assets/images/black-plate-builder/protein-chicken.png",
    steak: "assets/images/black-plate-builder/protein-steak.png",
    salmon: "assets/images/black-plate-builder/protein-salmon.png",
  },
};

const builderState = {
  mode: "lunch",
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
const heroPlanCard = document.querySelector("#heroPlanCard");
const heroPlanEyebrow = document.querySelector("#heroPlanEyebrow");
const heroPlanTitle = document.querySelector("#heroPlanTitle");
const heroPlanCopy = document.querySelector("#heroPlanCopy");
const heroPlanButton = document.querySelector("#heroPlanButton");
let lastHeroImage = builderHeroImage?.getAttribute("src") || "";
let heroSlideToken = 0;
let heroPlanTimer = 0;
let heroPlanCurrentIndex = 0;

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

function doneForYouPreviewMeta(meal, plan, groups) {
  const preferredGroupOrder = ["protein", "grain", "carbs", "vegetables", "sauce"];
  const preferredItem = preferredGroupOrder
    .flatMap((groupId) => groups.find((group) => group.id === groupId)?.selected || [])
    .find((item) => item?.id && item.id !== "none" && !item.id.startsWith("no-"));
  const fallbackItem = groups.flatMap((group) => group.selected || [])[0];
  const previewItem = preferredItem || fallbackItem;

  return {
    image: previewItem?.image || plan.image,
    alt: previewItem ? `${previewItem.name || previewItem.id} for ${meal.title}` : `${plan.title} meal preview`,
  };
}

function createDoneForYouCartItem(planKey, plan, meal) {
  const groups = meal.components.map(([id, label, selected]) => ({
    id,
    label,
    selected: selected.map((item) => ({ ...item })),
  }));
  const quantity = meal.quantity || 4;
  const unitPrice = meal.unitPrice || portionPricing.lunch.medium;
  const description = groups
    .map((group) => `${group.label}: ${group.selected.map((item) => item.name).join(", ") || "None"}`)
    .join(" / ");
  const summary = groups
    .map((group) => group.selected.map((item) => item.name).join(" + "))
    .filter(Boolean)
    .join(" + ");
  const preview = doneForYouPreviewMeta(meal, plan, groups);

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
    hero: preview.image,
    heroAlt: preview.alt,
    groups,
    selections: Object.fromEntries(groups.map((group) => [group.id, group.selected.map((item) => item.name)])),
  };
}

function addCartItem(item) {
  const existing = builderState.cart.find((cartItem) => cartItem.key === item.key);
  if (existing) {
    existing.quantity += item.quantity;
    existing.total = Number((existing.quantity * existing.unitPrice).toFixed(2));
    return;
  }
  builderState.cart.push({ ...item });
}

function loadDoneForYouPlan(planKey) {
  const plan = doneForYouPlans[planKey];
  if (!plan) return;
  const focus = plan.focus || {};

  builderState.mode = focus.mode || "lunch";
  builderState.portion = focus.portion || builderState.portion;
  builderState.activeGroup = builderCatalog[builderState.mode].defaultGroup;
  builderState.portionByMode[builderState.mode] = builderState.portion;
  builderState.activeGroupByMode[builderState.mode] = builderState.activeGroup;

  if (focus.selections) {
    builderState.selections[builderState.mode] = {
      ...builderState.selections[builderState.mode],
      ...focus.selections,
    };
  }

  builderState.featuredHeroByMode[builderState.mode] = {
    image: plan.image,
    label: plan.title,
  };
  builderState.forceHeroSlide = true;
  plan.meals.forEach((meal) => addCartItem(createDoneForYouCartItem(planKey, plan, meal)));
  builderState.reviewReady = false;
  renderBuilder();
  orderNote.innerHTML = `<strong>${escapeHtml(plan.title)}</strong> added: 4 breakfasts, 4 lunches, and 4 dinners are in the cart.`;
  document.querySelector("#wizard")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setHeroPlan(index = 0) {
  if (!heroPlanSequence.length) return;
  heroPlanCurrentIndex = ((index % heroPlanSequence.length) + heroPlanSequence.length) % heroPlanSequence.length;
  const item = heroPlanSequence[heroPlanCurrentIndex];
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

function heroPlanCycleTick() {
  if (!heroPlanButton || !heroPlanSequence.length) return;
  setHeroPlan(heroPlanCurrentIndex + 1);
  window.clearTimeout(heroPlanTimer);
  heroPlanTimer = window.setTimeout(heroPlanCycleTick, window.matchMedia("(max-width: 680px)").matches ? 8000 : 9000);
}

function startHeroPlanSync() {
  if (!heroPlanButton || !heroPlanSequence.length) return;
  setHeroPlan(heroPlanCurrentIndex);
  window.clearTimeout(heroPlanTimer);
  heroPlanTimer = window.setTimeout(heroPlanCycleTick, window.matchMedia("(max-width: 680px)").matches ? 8000 : 9000);
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
          <img src="${item.image}" alt="">
          <strong>${escapeHtml(item.name)}</strong>
          <span aria-hidden="true">&times;</span>
        </button>
      `),
    )
    .filter(Boolean)
    .join("");
}

function buildWooPayload() {
  const lines = builderState.cart.map((item) => ({
    sku: item.sku || `mpr-${item.mode}-${item.portion}-custom-meal`,
    name: item.title,
    quantity: item.quantity,
    unit_price: item.unitPrice,
    line_total: item.total,
    summary: item.description,
    preview_image: item.hero,
    meta_data: [
      { key: "Meal Type", value: item.mealType },
      { key: "Meal Plan", value: item.planTitle || "Custom build" },
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
          <div class="cart-meal-thumb" aria-hidden="true">
            <img src="${item.hero}" alt="${escapeHtml(item.heroAlt || item.title)}">
          </div>
          <div class="cart-item-body">
            <div class="cart-item-main">
              <div>
                <h4>${escapeHtml(item.title)}</h4>
                <p>${escapeHtml(item.description)}</p>
                <small>${item.quantity} meals in cart · ${dollars(item.avg)}/meal</small>
              </div>
              <strong>${dollars(item.total)}</strong>
            </div>
          </div>
          <div class="cart-row">
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
    existing.total = Number((existing.quantity * existing.unitPrice).toFixed(2));
  } else {
    addCartItem(build);
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
startHeroPlanSync();

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
document.querySelectorAll("[data-load-plan]").forEach((button) => {
  button.addEventListener("click", () => loadDoneForYouPlan(button.dataset.loadPlan));
});
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

if (window.lucide) {
  window.lucide.createIcons();
}
