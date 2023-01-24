const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient => {
  const items = document.createElement('li');

  items.textContent = ingredient;
  return items;
});

ingredientsEl.append(...ingredientEl);