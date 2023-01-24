const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(categories => {
  const titleText = categories.firstElementChild.textContent;
  const categoriesQuantity = categories.lastElementChild.children.length;

  return console.log(`Category: ${titleText}`),
    console.log(`Elements: ${categoriesQuantity}`);
});