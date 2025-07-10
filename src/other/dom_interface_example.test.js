/**
 * @jest-environment jsdom
 */

// このファイルは dom_interface_example.js のためのコーディング演習です。
// "TODO" の部分にアサーションを記述して、テストを完成させてください。

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './dom_interface_example.html'), 'utf8');

describe('DOM Interface Examples - コーディング演習', () => {
  beforeEach(() => {
    // 各テストの前にDOMの状態とモジュールをリセットします。
    jest.resetModules();
    document.documentElement.innerHTML = html.toString();
    // テスト対象のスクリプトを実行します。
    require('./dom_interface_example.js');
  });

  test('タイトルが変更され、属性が設定されていること', () => {
    const mainTitle = document.getElementById('main-title');

    // TODO:
    // 1. mainTitle の textContent が 'Title Changed by DOM Interface' であることを確認します。
    // expect(mainTitle.textContent).toBe('Title Changed by DOM Interface');

    // 2. mainTitle の 'data-status' 属性が 'updated' であることを確認します。
    // expect(mainTitle.getAttribute('data-status')).toBe('updated');
  });

  test('段落が置換されていること', () => {
    const container = document.getElementById('container');
    const oldParagraph = container.querySelector('.new-content');
    const replacementParagraph = document.getElementById('replacement-p');

    // TODO:
    // 1. 元々追加された .new-content クラスを持つ段落がもう存在しないこと（nullであること）を確認します。
    // expect(oldParagraph).toBeNull();

    // 2. 置換後の段落 (replacementParagraph) が存在することを確認します。
    // expect(replacementParagraph).not.toBeNull();

    // 3. 置換後の段落の textContent が 'This paragraph is a replacement.' であることを確認します。
    // expect(replacementParagraph.textContent).toBe('This paragraph is a replacement.');
  });

  test('元の段落が削除されていること', () => {
    const container = document.getElementById('container');
    const paragraphs = container.getElementsByTagName('p');

    // TODO:
    // 1. container 内の p 要素が1つだけであることを確認します。
    // expect(paragraphs.length).toBe(1);

    // 2. その唯一の p 要素の id が 'replacement-p' であることを確認します。
    // expect(paragraphs[0].id).toBe('replacement-p');
  });

  test('新しいリストアイテムが追加され、スタイルが適用されていること', () => {
    const listItems = document.getElementsByClassName('list-item');

    // TODO:
    // 1. 'list-item' クラスを持つ要素が3つ存在することを確認します。
    // expect(listItems.length).toBe(3);

    // 2. 最初のリストアイテムの style.color が 'blue' であることを確認します。
    // expect(listItems[0].style.color).toBe('blue');
  });

  test('残りの段落に枠線が適用されていること', () => {
    const paragraph = document.getElementById('replacement-p');

    // TODO: paragraph の style.border が '1px solid green' であることを確認します。
    // expect(paragraph.style.border).toBe('1px solid green');
  });
});
