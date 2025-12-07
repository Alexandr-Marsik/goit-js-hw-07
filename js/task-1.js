const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsTotal = item.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsTotal}`);
});
