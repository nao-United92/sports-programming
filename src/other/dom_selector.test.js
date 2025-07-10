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
    require('./dom_selector.js');
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  test('should have replaced the content of the container with an h2', () => {
    const container = document.getElementById('container');
    expect(container.innerHTML).toBe('<h2>innerHTMLで書き換えました</h2>');
  });

  test('elements that were replaced should no longer exist', () => {
    expect(document.getElementById('main-title')).toBeNull();
    expect(document.querySelector('.item')).toBeNull();
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
