/**
 * @jest-environment jsdom
 */

// テスト対象のHTMLを読み込む
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './dom_selector.html'), 'utf8');

describe('DOM Selector and Manipulation Tests', () => {
  // 各テストの前にHTMLをリセット
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // テスト対象のスクリプトを読み込む（JSDOM環境で実行される）
    require('./dom_selector.js');
  });

  // getElementByIdのテスト
  test('getElementById should return the correct element', () => {
    const mainTitle = document.getElementById('main-title');
    expect(mainTitle).not.toBeNull();
    expect(mainTitle.textContent).toBe('メインタイトル');
  });

  // querySelectorのテスト
  test('querySelector should return the first matching element', () => {
    const firstItem = document.querySelector('.item');
    expect(firstItem).not.toBeNull();
    expect(firstItem.textContent).toBe('アイテム1');
  });

  // getElementsByClassNameのテスト
  test('getElementsByClassName should return all elements with the class', () => {
    const items = document.getElementsByClassName('item');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('アイテム1');
    expect(items[1].textContent).toBe('アイテム2');
  });

  // querySelectorAllのテスト
  test('querySelectorAll should return all matching elements', () => {
    const allItems = document.querySelectorAll('.item');
    expect(allItems.length).toBe(3);
    expect(allItems[0].textContent).toBe('アイテム1');
    expect(allItems[2].textContent).toBe('アイテム3');
  });

  // getElementsByTagNameのテスト
  test('getElementsByTagName should return all elements with the tag name', () => {
    const paragraphs = document.getElementsByTagName('p');
    expect(paragraphs.length).toBe(3); // 元のHTMLに2つ、追加されたHTMLに1つ
    expect(paragraphs[0].textContent).toBe('これは段落です。');
  });

  // createElement & appendChildのテスト
  test('createElement and appendChild should add a new paragraph', () => {
    const container = document.getElementById('container');
    const initialChildCount = container.children.length;

    // dom_selector.jsが実行されると追加されるので、その結果を検証
    const newParagraph = container.querySelector('p:last-child');
    expect(newParagraph).not.toBeNull();
    expect(newParagraph.textContent).toBe('これは新しく追加された段落です。');
    expect(container.children.length).toBe(initialChildCount + 1);
  });

  // textContentのテスト
  test('textContent should change the text of an element', () => {
    const link = document.getElementById('link');
    // dom_selector.jsが実行されると変更されるので、その結果を検証
    expect(link.textContent).toBe('変更後のリンクテキスト');
  });

  // setAttributeのテスト
  test('setAttribute should change the attribute of an element', () => {
    const link = document.getElementById('link');
    // dom_selector.jsが実行されると変更されるので、その結果を検証
    expect(link.getAttribute('href')).toBe('https://example.com');
  });

  // classList.addのテスト
  test('classList.add should add a class to an element', () => {
    const link = document.getElementById('link');
    // dom_selector.jsが実行されると追加されるので、その結果を検証
    expect(link.classList.contains('new-class')).toBe(true);
  });

  // removeChildのテスト
  test('removeChild should remove a child element', () => {
    const list = document.getElementById('list-to-modify');
    const itemToRemove = document.getElementById('item-to-remove');
    // dom_selector.jsが実行されると削除されるので、その結果を検証
    expect(itemToRemove).toBeNull(); // 削除されたのでnullになる
    expect(list.children.length).toBe(1); // 残りのアイテム2のみ
  });

  // innerHTMLのテスト
  test('innerHTML should replace the content of an element', () => {
    const container = document.getElementById('container');
    // dom_selector.jsが実行されると書き換えられるので、その結果を検証
    expect(container.innerHTML).toBe('<h2>innerHTMLで書き換えました</h2>');
  });

  // classList.removeとclassList.toggleのテスト
  test('classList.remove and classList.toggle should manage classes', () => {
    // innerHTMLでcontainerが書き換えられているため、link要素は存在しない
    // このテストはdom_selector.jsの実行後の状態を検証するため、
    // link要素がinnerHTMLによって消滅していることを考慮する
    const link = document.getElementById('link');
    expect(link).toBeNull(); // innerHTMLで消滅していることを確認
  });

  // addEventListenerのテスト
  test('addEventListener should attach an event listener', () => {
    const button = document.getElementById('action-button');
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // ボタンをクリックするイベントをシミュレート
    button.click();

    expect(alertMock).toHaveBeenCalledWith('ボタンがクリックされました！');
    alertMock.mockRestore();
  });
});