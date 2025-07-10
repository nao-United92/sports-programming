/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// HTMLファイルを読み込む
const html = fs.readFileSync(path.resolve(__dirname, './dom_interface_example.html'), 'utf8');

describe('DOM Interface Examples', () => {
  beforeEach(() => {
    // 各テストの前にDOMをリセット
    document.documentElement.innerHTML = html.toString();
    // スクリプトを読み込んで実行
    require('./dom_interface_example.js');
  });

  test('should change the main title text', () => {
    const mainTitle = document.getElementById('main-title');
    expect(mainTitle.textContent).toBe('Title Changed by DOM Interface');
  });

  test('should add a new paragraph', () => {
    const container = document.getElementById('container');
    const newParagraph = container.querySelector('.new-content');
    expect(newParagraph).not.toBeNull();
    expect(newParagraph.textContent).toBe('This is a new paragraph added dynamically.');
  });

  test('should remove the first paragraph', () => {
    const container = document.getElementById('container');
    const firstParagraph = container.getElementsByTagName('p')[0];
    // The script removes the original first paragraph, so the new first paragraph
    // should be the replacement one.
    expect(firstParagraph.id).toBe('replacement-p');
  });

  test('should set a data attribute on the main title', () => {
    const mainTitle = document.getElementById('main-title');
    expect(mainTitle.getAttribute('data-status')).toBe('updated');
  });

  test('should replace the dynamically added paragraph', () => {
    const container = document.getElementById('container');
    const replacement = document.getElementById('replacement-p');
    expect(replacement).not.toBeNull();
    expect(replacement.textContent).toBe('This paragraph is a replacement.');

    const oldParagraph = container.querySelector('.new-content');
    expect(oldParagraph).toBeNull();
  });

  test('should get elements by class name and style the first one', () => {
    const listItems = document.getElementsByClassName('list-item');
    expect(listItems.length).toBe(3);
    expect(listItems[0].style.color).toBe('blue');
  });

  test('should get elements by tag name and style them', () => {
    const container = document.getElementById('container');
    const paragraphs = container.getElementsByTagName('p');
    expect(paragraphs.length).toBe(1); // The original was removed, one was added and replaced
    for (let p of paragraphs) {
      expect(p.style.border).toBe('1px solid green');
    }
  });
});
