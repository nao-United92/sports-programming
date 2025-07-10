/**
 * @jest-environment jsdom
 */

// このファイルは selector_api_example.js のためのコーディング演習です。
// "TODO" の部分にアサーションを記述して、テストを完成させてください。

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './selector_api_example.html'), 'utf8');

describe('Selector API Examples - コーディング演習', () => {
  beforeEach(() => {
    jest.resetModules();
    document.documentElement.innerHTML = html.toString();
    // console.log をモックして、テスト中に呼び出しをスパイできるようにします。
    global.console = { log: jest.fn() };
    require('./selector_api_example.js');
  });

  test('タイトルとイントロの段落が正しく変更されていること', () => {
    const titleElement = document.querySelector('.title');
    // TODO: titleElement の textContent が 'Title Changed by Selector API' であることを確認します。
    // expect(titleElement.textContent).toBe('Title Changed by Selector API');

    // TODO: titleElement が 'main-heading' クラスを持っていることを確認します。
    // expect(titleElement.classList.contains('main-heading')).toBe(true);

    const introParagraphs = document.querySelectorAll('.intro');
    introParagraphs.forEach(p => {
      // TODO: 各段落が 'highlight' クラスを持っていることを確認します。
      // expect(p.classList.contains('highlight')).toBe(true);

      // TODO: 各段落の style.fontStyle が 'italic' であることを確認します。
      // expect(p.style.fontStyle).toBe('italic');
    });
  });

  test('新しい段落が末尾に追加されていること', () => {
    const contentArea = document.querySelector('#content-area');
    const lastParagraph = contentArea.lastElementChild;

    // TODO: lastParagraph の textContent が 'This paragraph was added using querySelector.' であることを確認します。
    // expect(lastParagraph.textContent).toBe('This paragraph was added using querySelector.');
  });

  test('直接の子である段落に太字スタイルが適用されていること', () => {
    const firstP = document.querySelector('#content-area > p');

    // TODO: firstP の style.fontWeight が 'bold' であることを確認します。
    // expect(firstP.style.fontWeight).toBe('bold');
  });

  test('最も近い div の祖先に枠線が追加されていること', () => {
    const contentArea = document.querySelector('#content-area');

    // TODO: contentArea の style.border が '2px solid red' であることを確認します。
    // expect(contentArea.style.border).toBe('2px solid red');
  });

  test('matches() を介して正しいメッセージがコンソールに記録されていること', () => {
    // TODO: console.log が 'The title element matches the ".title" selector.' という引数で呼び出されたことを確認します。
    // expect(console.log).toHaveBeenCalledWith('The title element matches the ".title" selector.');

    // TODO: console.log が 'Found a paragraph that matches ".intro":' と 'First paragraph.' という引数で呼び出されたことを確認します。
    // expect(console.log).toHaveBeenCalledWith('Found a paragraph that matches ".intro":', 'First paragraph.');
  });
});
