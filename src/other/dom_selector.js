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

// getElementsByTagNameのサンプル
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  console.log(`getElementsByTagName('p')[${i}]:`, paragraphs[i].textContent);
}

// 要素の作成と追加 (createElement, appendChild)
const newParagraph = document.createElement('p');
newParagraph.textContent = 'これは新しく追加された段落です。';
document.getElementById('container').appendChild(newParagraph);
console.log('createElement & appendChild: 新しいp要素を追加しました。');

// 要素のテキスト内容を変更 (textContent)
const link = document.getElementById('link');
link.textContent = '変更後のリンクテキスト';
console.log('textContent: リンクのテキストを変更しました。');

// 要素の属性を変更 (setAttribute)
link.setAttribute('href', 'https://example.com');
console.log('setAttribute: リンクのhref属性を変更しました。');

// 要素にクラスを追加 (classList.add)
link.classList.add('new-class');
console.log('classList.add: リンクにnew-classクラスを追加しました。');