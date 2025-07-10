/**
 * @jest-environment jsdom
 */

// このファイルは dom_creation_utils.js のためのコーディング演習です。
// "TODO" と書かれた部分に、Jestのアサーション（expect...）を記述して、
// テストを完成させてください。

// ヒント: https://jestjs.io/docs/expect

// まず、テスト対象のスクリプトを読み込みます。
// fsモジュールを使ってファイルの内容を文字列として読み込み、
// eval()で実行することで、テストファイル内でDomCreationUtilsオブジェクトが利用可能になります。
const fs = require('fs');
const path = require('path');
const utilsScript = fs.readFileSync(path.resolve(__dirname, './dom_creation_utils.js'), 'utf8');
eval(utilsScript);

describe('DOM Creation Utils - コーディング演習', () => {

  // =================================================================
  // 演習 1: createElement 関数のテスト
  // =================================================================
  describe('createElement', () => {

    test('基本的な要素（pタグ）を作成できること', () => {
      const tagName = 'p';
      const element = DomCreationUtils.createElement(tagName);

      // TODO: ここからテストを記述します。
      // 1. element が null や undefined でないこと（存在すること）を確認します。
      // expect(element).not.toBeNull();

      // 2. element の tagName プロパティが 'P' (大文字) であることを確認します。
      // expect(element.tagName).toBe('P');
    });

    test('IDを持つ要素を作成できること', () => {
      const options = { id: 'test-id' };
      const element = DomCreationUtils.createElement('div', options);

      // TODO: element の id が 'test-id' であることを確認します。
      // expect(element.id).toBe('test-id');
    });

    test('単一のクラス名を持つ要素を作成できること', () => {
      const options = { classNames: 'single-class' };
      const element = DomCreationUtils.createElement('span', options);

      // TODO: element の classList に 'single-class' が含まれていることを確認します。
      // expect(element.classList.contains('single-class')).toBe(true);
    });

    test('複数のクラス名（配列）を持つ要素を作成できること', () => {
      const options = { classNames: ['class1', 'class2'] };
      const element = DomCreationUtils.createElement('div', options);

      // TODO:
      // 1. element が 'class1' というクラスを持っていることを確認します。
      // expect(element.classList.contains('class1')).toBe(true);
      // 2. element が 'class2' というクラスを持っていることを確認します。
      // expect(element.classList.contains('class2')).toBe(true);
    });

    test('textContent を持つ要素を作成できること', () => {
      const options = { textContent: 'Hello, Jest!' };
      const element = DomCreationUtils.createElement('p', options);

      // TODO: element の textContent が 'Hello, Jest!' であることを確認します。
      // expect(element.textContent).toBe('Hello, Jest!');
    });

    test('属性を持つ要素を作成できること', () => {
      const options = {
        attributes: {
          href: 'https://example.com',
          'data-test': 'attribute-value'
        }
      };
      const element = DomCreationUtils.createElement('a', options);

      // TODO:
      // 1. element の href 属性が 'https://example.com/' であることを確認します。(ブラウザは末尾に/を付加することがあります)
      // expect(element.href).toBe('https://example.com/');
      // 2. element の 'data-test' 属性が 'attribute-value' であることを確認します。
      // expect(element.getAttribute('data-test')).toBe('attribute-value');
    });

    test('スタイルを持つ要素を作成できること', () => {
      const options = {
        styles: {
          color: 'rgb(255, 0, 0)', // red
          fontSize: '20px'
        }
      };
      const element = DomCreationUtils.createElement('div', options);

      // TODO:
      // 1. element の style.color が 'rgb(255, 0, 0)' であることを確認します。
      // expect(element.style.color).toBe('rgb(255, 0, 0)');
      // 2. element の style.fontSize が '20px' であることを確認します。
      // expect(element.style.fontSize).toBe('20px');
    });

    test('子要素を持つ要素を作成できること', () => {
      const options = {
        children: [
          DomCreationUtils.createElement('span', { textContent: 'Child 1' }),
          DomCreationUtils.createElement('p', { textContent: 'Child 2' })
        ]
      };
      const parent = DomCreationUtils.createElement('div', options);

      // TODO:
      // 1. parent の子要素の数 (children.length) が 2 であることを確認します。
      // expect(parent.children.length).toBe(2);
      // 2. 最初の子要素の tagName が 'SPAN' であることを確認します。
      // expect(parent.children[0].tagName).toBe('SPAN');
      // 3. 2番目の子要素の textContent が 'Child 2' であることを確認します。
      // expect(parent.children[1].textContent).toBe('Child 2');
    });
  });

  // =================================================================
  // 演習 2: createFromHTML 関数のテスト
  // =================================================================
  describe('createFromHTML', () => {

    test('単純なHTML文字列から要素を作成できること', () => {
      const htmlString = '<div><p>Hello</p></div>';
      const element = DomCreationUtils.createFromHTML(htmlString);

      // TODO:
      // 1. element が null でないことを確認します。
      // expect(element).not.toBeNull();
      // 2. element の tagName が 'DIV' であることを確認します。
      // expect(element.tagName).toBe('DIV');
      // 3. element の子要素の数が 1 であることを確認します。
      // expect(element.children.length).toBe(1);
      // 4. element の最初の子要素の tagName が 'P' であることを確認します。
      // expect(element.children[0].tagName).toBe('P');
    });
  });

  // =================================================================
  // 演習 3: cloneElement 関数のテスト
  // =================================================================
  describe('cloneElement', () => {

    let originalElement;

    beforeEach(() => {
      originalElement = DomCreationUtils.createElement('div', {
        id: 'original',
        children: [ DomCreationUtils.createElement('p', { textContent: 'Original' }) ]
      });
      document.body.appendChild(originalElement);
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    test('要素をディープクローン（子要素も含む）できること', () => {
      const deepClone = DomCreationUtils.cloneElement(originalElement, true);

      // TODO:
      // 1. deepClone が originalElement とは異なるオブジェクトであることを確認します (ヒント: .not.toBe() を使います)。
      // expect(deepClone).not.toBe(originalElement);
      // 2. deepClone の id が 'original' であることを確認します。
      // expect(deepClone.id).toBe('original');
      // 3. deepClone が子要素を 1 つ持っていることを確認します。
      // expect(deepClone.children.length).toBe(1);
    });

    test('要素をシャロークローン（子要素を含まない）できること', () => {
      const shallowClone = DomCreationUtils.cloneElement(originalElement, false);

      // TODO:
      // 1. shallowClone が子要素を持っていないことを確認します (children.length が 0)。
      // expect(shallowClone.children.length).toBe(0);
    });
  });
});
