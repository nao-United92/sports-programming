/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// HTMLファイルを読み込む
const html = fs.readFileSync(path.resolve(__dirname, './selector_api_example.html'), 'utf8');

describe('Selector API Examples', () => {
  beforeEach(() => {
    // 各テストの前にDOMをリセット
    document.documentElement.innerHTML = html.toString();
    // スクリプトを読み込んで実行
    // console.logをモックして、テスト中の出力をキャプチャ
    global.console = { log: jest.fn() };
    require('./selector_api_example.js');
  });

  test('should change the title using querySelector', () => {
    const titleElement = document.querySelector('.title');
    expect(titleElement.textContent).toBe('Title Changed by Selector API');
  });

  test('should add highlight class to intro paragraphs using querySelectorAll', () => {
    const introParagraphs = document.querySelectorAll('.intro');
    introParagraphs.forEach(p => {
      expect(p.classList.contains('highlight')).toBe(true);
    });
  });

  test('should add a new paragraph to the content area', () => {
    const contentArea = document.querySelector('#content-area');
    const newParagraph = contentArea.lastElementChild;
    expect(newParagraph.textContent).toBe('This paragraph was added using querySelector.');
  });

  test('should apply bold style to a direct child paragraph', () => {
    const directChild = document.querySelector('#content-area > p');
    expect(directChild.style.fontWeight).toBe('bold');
  });

  test('should apply italic style to highlighted intro paragraphs', () => {
    const highlighted = document.querySelectorAll('p.intro.highlight');
    highlighted.forEach(p => {
        expect(p.style.fontStyle).toBe('italic');
    });
  });

  test('should find the closest div ancestor and add a border', () => {
    const parentDiv = document.querySelector('#content-area');
    expect(parentDiv.style.border).toBe('2px solid red');
  });

  test('should confirm the title matches a selector and add a class', () => {
    const titleElement = document.querySelector('.title');
    expect(titleElement.classList.contains('main-heading')).toBe(true);
    expect(console.log).toHaveBeenCalledWith('The title element matches the ".title" selector.');
  });

  test('should use matches() to find and log intro paragraphs', () => {
    expect(console.log).toHaveBeenCalledWith('Found a paragraph that matches ".intro":', 'First paragraph.');
    expect(console.log).toHaveBeenCalledWith('Found a paragraph that matches ".intro":', 'Second paragraph.');
  });
});
