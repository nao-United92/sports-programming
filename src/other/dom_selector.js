// getElementByIdのサンプル
const mainTitle = document.getElementById('main-title');
console.log('getElementById:', mainTitle.textContent);

// querySelectorのサンプル
const firstItem = document.querySelector('.item');
console.log('querySelector:', firstItem.textContent);

// getElementsByClassNameのサンプル
const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  console.log(`getElementsByClassName[${i}]:`, items[i].textContent);
}

// querySelectorAllのサンプル
const allItems = document.querySelectorAll('.item');
allItems.forEach((item, index) => {
  console.log(`querySelectorAll[${index}]:`, item.textContent);
});