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

// 要素の削除 (removeChild)
const list = document.getElementById('list-to-modify');
const itemToRemove = document.getElementById('item-to-remove');
if (list && itemToRemove) {
  list.removeChild(itemToRemove);
  console.log('removeChild: list-to-modifyから要素を削除しました。');
}


// HTMLコンテンツの書き換え (innerHTML)
const container = document.getElementById('container');
if (container) {
    container.innerHTML = '<h2>innerHTMLで書き換えました</h2>';
    console.log('innerHTML: containerの中身を書き換えました。');
}


// クラスの削除とトグル (classList.remove, classList.toggle)
const linkForClassToggle = document.getElementById('link'); // HTMLが書き換わったので再取得
if(linkForClassToggle) { // innerHTMLで消されている可能性があるので存在チェック
    linkForClassToggle.classList.remove('new-class');
    console.log('classList.remove: linkからnew-classクラスを削除しました。');
    // toggleはクラスがあれば削除、なければ追加する
    linkForClassToggle.classList.toggle('active'); // activeクラスを追加
    console.log('classList.toggle: linkにactiveクラスをトグル(追加)しました。');
    linkForClassToggle.classList.toggle('active'); // activeクラスを削除
    console.log('classList.toggle: linkのactiveクラスをトグル(削除)しました。');
}


// イベントリスナーの追加 (addEventListener)
const button = document.getElementById('action-button');
if (button) {
    button.addEventListener('click', () => {
      alert('ボタンがクリックされました！');
      console.log('addEventListener: ボタンのクリックイベントを検知しました。');
    });
}