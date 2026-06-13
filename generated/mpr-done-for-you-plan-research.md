# MPR Done-For-You Meal Plan Research

Date: 2026-06-12

## Sources Crawled

- Live WordPress brand site: https://mealpreprev.com/
- Live Square ordering site: https://ordermealpreprevolution.square.site/
- Square product API snapshot: `generated/mpr-square-products.json`

## Live Store Patterns

The current Square ordering path is built around these sellable patterns:

- Build a Meal: Chicken Meal, Ground Turkey/Chicken/Beef Meal, Grilled Tri Tip Meal, Seafood Meal, Meatball Meal, Plant-Based Meal.
- Stacks & Packs: 10-meal stacks and mixed 5/5 stacks, especially steak/chicken, steak/ground turkey, chicken/ground beef, 10 chicken, 10 steak, 10 ground turkey.
- Breakfast: Breakfast Bowl, Breakfast Burrito, Protein Pancake or Waffle Breakfast.
- Fan Favorites: Pasta & Meatballs, Fiesta Bowl, Surf N' Turf, Low-Carb Meatza.
- Salads: Taco Salad, Build Your Own Salad.
- Bulk Items: chicken breast, chicken thigh, ground turkey, ground beef, tri tip, salmon, shrimp, swai, egg whites, sausage, carbs, veggies, sauces.
- Athlete packs: Hardbody/FTDI male and female challenge meals and 10-packs with explicit protein/carb/veg portions.

Common customization language:

- Protein amounts: 3oz to 12oz.
- Carbs: no carbs, sweet potato mash, red potato mash, cinnamon sweet potato mash, yams, white rice, brown rice, quinoa, breakfast hash, gluten-free penne, black beans.
- Veggies: asparagus, fajita mix, broccoli, cauliflower, bell peppers, green beans, peas, kale, spinach, power slaw, squash, veggie medley, corn, zucchini, Brussels sprouts.
- Flavors/sauces: teriyaki, honey ginger, salsa roja, salsa verde, BBQ, buffalo, mango habanero, Thai chili, lemon pepper, garlic herb, smoky chipotle, steak rub, spicy Italian.

## Proposed Done-For-You Plans

### 1. High School Strength Athlete

Goal: gain strength, stay fueled, keep the ordering decision simple for parents and athletes.

Suggested stack:

- 5 Chicken Meals with 6oz protein, 4-6oz carbs, broccoli/green beans.
- 5 Grilled Tri Tip Meals with 6oz protein, 4-6oz carbs, asparagus/broccoli.
- 2 Breakfast Bowls or Pancake/Waffle Breakfasts.
- Default flavors: grilled chicken, lemon pepper, steak rub, teriyaki sauce on side.

Homepage image:

- `assets/images/done-for-you-plans/high-school-strength-athlete.png`

### 2. Pro Bodybuilder Pack

Goal: higher protein, repeatable macros, competition-style structure without making the user build every meal.

Suggested stack:

- 10 mixed meals: chicken, steak, salmon.
- 8oz protein option, 4-6oz carbs, 1 cup veggies.
- Carbs rotate through white rice, red potato mash, quinoa.
- Veggies rotate asparagus, broccoli, zucchini.
- Sauces on side only.

Homepage image:

- `assets/images/done-for-you-plans/pro-bodybuilder-pack.png`

### 3. Women's Fitness Athlete

Goal: lean, fresh, photogenic fitness prep with enough carbs to train.

Suggested stack:

- 5 Seafood/Salmon or Shrimp Meals.
- 3 Chicken Meals.
- 2 Ground Turkey Meals.
- 4-6oz protein, 2-4oz carbs, 1 cup vegetables.
- Carbs rotate quinoa, brown rice, sweet potato mash.
- Veggies rotate asparagus, spinach, zucchini, bell peppers.

Homepage image:

- `assets/images/done-for-you-plans/womens-fitness-athlete.png`

### 4. Single Mom Week Stack

Goal: remove weekday decision fatigue with breakfasts plus familiar lunches/dinners.

Suggested stack:

- 3 Breakfast Bowls or Pancake/Waffle Breakfasts.
- 3 Chicken Meals.
- 2 Pasta & Meatballs.
- 2 Fiesta Bowls.
- 2 Ground Turkey Meals.
- Keep sauces and spicy items selectable but default mild.

Homepage image:

- `assets/images/done-for-you-plans/single-mom-week-stack.png`

### 5. Business Lean Cut

Goal: fast lunches and dinners for a busy professional trying to lose weight without feeling deprived.

Suggested stack:

- 4 Chicken Meals with no/low carb option.
- 3 Seafood Meals with salmon or shrimp.
- 2 Build Your Own Salads or Taco Salads.
- 1 Surf N' Turf or Fiesta Bowl as a premium anchor.
- Default: 4-6oz protein, 0-2oz carbs, double vegetables, sauce on side.

Homepage image:

- `assets/images/done-for-you-plans/business-lean-cut.png`

## Implementation Recommendation

Use these as homepage cards under a "Done-For-You Meal Plans" section. Each card should show:

- Plan name.
- Who it is for.
- Meal count and average meal price.
- 3-item preview stack.
- CTA: "Load This Plan".

Cart behavior should be implemented in two stages:

1. Sandbox pre-cart: clicking "Load This Plan" fills our local cart UI with the recommended meals, quantities, and defaults.
2. Square/WooCommerce handoff: once the real commerce target is confirmed, map each plan to either a Square product link, WooCommerce bundle SKU, or server-side order ticket.

Avoid promising true Square cart prefill until the commerce route is confirmed. The current Square product pages support configurable products, but direct prefilled carts are not exposed as simple static URLs in the public catalog crawl.
