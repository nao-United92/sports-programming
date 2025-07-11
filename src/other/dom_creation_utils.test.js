/**
 * @jest-environment jsdom
 */

import { DomCreationUtils } from './dom_creation_utils.js';

describe('DOM Creation Utils', () => {

  describe('createElement', () => {

    test('基本的な要素（pタグ）を作成できること', () => {
      const tagName = 'p';
      const element = DomCreationUtils.createElement(tagName);
      expect(element).not.toBeNull();
      expect(element.tagName).toBe('P');
    });

    test('IDを持つ要素を作成できること', () => {
      const options = { id: 'test-id' };
      const element = DomCreationUtils.createElement('div', options);
      expect(element.id).toBe('test-id');
    });

    test('単一のクラス名を持つ要素を作成できること', () => {
      const options = { classNames: 'single-class' };
      const element = DomCreationUtils.createElement('span', options);
      expect(element.classList.contains('single-class')).toBe(true);
    });

    test('複数のクラス名（配列）を持つ要素を作成できること', () => {
      const options = { classNames: ['class1', 'class2'] };
      const element = DomCreationUtils.createElement('div', options);
      expect(element.classList.contains('class1')).toBe(true);
      expect(element.classList.contains('class2')).toBe(true);
    });

    test('textContent を持つ要素を作成できること', () => {
      const options = { textContent: 'Hello, Jest!' };
      const element = DomCreationUtils.createElement('p', options);
      expect(element.textContent).toBe('Hello, Jest!');
    });

    test('属性を持つ要素を作成できること', () => {
      const options = {
        attributes: {
          href: 'https://example.com',
          'data-test': 'attribute-value'
        }
      };
      const element = DomCreationUtils.createElement('a', options);
      expect(element.href).toBe('https://example.com/');
      expect(element.getAttribute('data-test')).toBe('attribute-value');
    });

    test('スタイルを持つ要素を作成できること', () => {
      const options = {
        styles: {
          color: 'rgb(255, 0, 0)', // red
          fontSize: '20px'
        }
      };
      const element = DomCreationUtils.createElement('div', options);
      expect(element.style.color).toBe('rgb(255, 0, 0)');
      expect(element.style.fontSize).toBe('20px');
    });

    test('子要素を持つ要素を作成できること', () => {
      const options = {
        children: [
          DomCreationUtils.createElement('span', { textContent: 'Child 1' }),
          DomCreationUtils.createElement('p', { textContent: 'Child 2' })
        ]
      };
      const parent = DomCreationUtils.createElement('div', options);
      expect(parent.children.length).toBe(2);
      expect(parent.children[0].tagName).toBe('SPAN');
      expect(parent.children[1].textContent).toBe('Child 2');
    });
  });

  describe('createFromHTML', () => {

    test('単純なHTML文字列から要素を作成できること', () => {
      const htmlString = '<div><p>Hello</p></div>';
      const element = DomCreationUtils.createFromHTML(htmlString);
      expect(element).not.toBeNull();
      expect(element.tagName).toBe('DIV');
      expect(element.children.length).toBe(1);
      expect(element.children[0].tagName).toBe('P');
    });
  });

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
      expect(deepClone).not.toBe(originalElement);
      expect(deepClone.id).toBe('original');
      expect(deepClone.children.length).toBe(1);
    });

    test('要素をシャロークローン（子要素を含まない）できること', () => {
      const shallowClone = DomCreationUtils.cloneElement(originalElement, false);
      expect(shallowClone.children.length).toBe(0);
    });
  });

  describe('createElementWithText', () => {
    test('指定されたタグ名とテキストコンテンツを持つ要素を作成できること', () => {
      const element = DomCreationUtils.createElementWithText('p', 'Hello World');
      expect(element.tagName).toBe('P');
      expect(element.textContent).toBe('Hello World');
    });
  });

  describe('appendChildren', () => {
    let parentElement;
    let child1;
    let child2;

    beforeEach(() => {
      parentElement = document.createElement('div');
      child1 = document.createElement('span');
      child2 = document.createElement('p');
    });

    test('複数の子要素を親要素に追加できること', () => {
      DomCreationUtils.appendChildren(parentElement, child1, child2);
      expect(parentElement.children.length).toBe(2);
      expect(parentElement.children[0]).toBe(child1);
      expect(parentElement.children[1]).toBe(child2);
    });

    test('子要素がHTMLElementでない場合は追加されないこと', () => {
      const nonHTMLElement = 'not an element';
      DomCreationUtils.appendChildren(parentElement, child1, nonHTMLElement, child2);
      expect(parentElement.children.length).toBe(2);
      expect(parentElement.children[0]).toBe(child1);
      expect(parentElement.children[1]).toBe(child2);
    });

    test('子要素がない場合は何も追加されないこと', () => {
      DomCreationUtils.appendChildren(parentElement);
      expect(parentElement.children.length).toBe(0);
    });
  });
});
