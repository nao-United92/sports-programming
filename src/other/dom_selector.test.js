/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './dom_selector.html'), 'utf8');

describe('DOM Selector and Manipulation after script execution', () => {
  let alertMock;

  beforeEach(() => {
    jest.resetModules();
    document.documentElement.innerHTML = html.toString();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // スクリプトを実行
    require('./dom_selector.js');
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  test('should keep the main title as it is outside the manipulated container', () => {
    const mainTitle = document.getElementById('main-title');
    expect(mainTitle).not.toBeNull();
    expect(mainTitle.textContent).toBe('メインタイトル');
  });

  test('should keep the list items as they are outside the manipulated container', () => {
    const items = document.querySelectorAll('.item');
    expect(items.length).toBe(3);
  });

  test('should have replaced the content of the container with an h2', () => {
    const container = document.getElementById('container');
    expect(container.innerHTML).toBe('<h2>innerHTMLで書き換えました</h2>');
  });

  test('the link inside the container should no longer exist', () => {
    expect(document.getElementById('link')).toBeNull();
  });

  test('should have removed an item from the list', () => {
    const list = document.getElementById('list-to-modify');
    expect(document.getElementById('item-to-remove')).toBeNull();
    expect(list.children.length).toBe(1);
    expect(list.firstElementChild.textContent).toBe('アイテム2');
  });

  test('should have an event listener on the button', () => {
    const button = document.getElementById('action-button');
    button.click();
    expect(alertMock).toHaveBeenCalledWith('ボタンがクリックされました！');
  });
});