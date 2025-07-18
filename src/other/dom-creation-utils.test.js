import { createElement, appendChild, appendChildren, removeElement, replaceElement, wrapElement } from './dom-creation-utils.js';

describe('dom-creation-utils', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('createElement', () => {
    test('should create an element with tag name only', () => {
      const el = createElement('div');
      expect(el.tagName).toBe('DIV');
    });

    test('should create an element with attributes', () => {
      const el = createElement('div', { id: 'myId', class: 'myClass' });
      expect(el.id).toBe('myId');
      expect(el.className).toBe('myClass');
    });

    test('should create an element with text content', () => {
      const el = createElement('p', {}, ['Hello World']);
      expect(el.textContent).toBe('Hello World');
    });

    test('should create an element with child elements', () => {
      const span = createElement('span', {}, ['Child Text']);
      const div = createElement('div', {}, [span]);
      expect(div.children.length).toBe(1);
      expect(div.children[0].tagName).toBe('SPAN');
      expect(div.children[0].textContent).toBe('Child Text');
    });

    test('should create an element with mixed children (text and elements)', () => {
      const span = createElement('span', {}, ['Child Text']);
      const div = createElement('div', {}, ['Before ', span, ' After']);
      expect(div.childNodes.length).toBe(3);
      expect(div.childNodes[0].nodeValue).toBe('Before ');
      expect(div.childNodes[1].tagName).toBe('SPAN');
      expect(div.childNodes[2].nodeValue).toBe(' After');
    });
  });

  describe('appendChild', () => {
    test('should append a child element to a parent', () => {
      const parent = createElement('div');
      const child = createElement('span');
      appendChild(parent, child);
      expect(parent.children.length).toBe(1);
      expect(parent.children[0]).toBe(child);
    });

    test('should return the appended child', () => {
      const parent = createElement('div');
      const child = createElement('span');
      const appended = appendChild(parent, child);
      expect(appended).toBe(child);
    });

    test('should not append if parent is null', () => {
      const child = createElement('span');
      appendChild(null, child);
      // No error should be thrown, and child should not be appended anywhere
    });
  });

  describe('appendChildren', () => {
    test('should append multiple child elements to a parent', () => {
      const parent = createElement('div');
      const child1 = createElement('span');
      const child2 = createElement('p');
      appendChildren(parent, [child1, 'text', child2]);
      expect(parent.childNodes.length).toBe(3);
      expect(parent.childNodes[0]).toBe(child1);
      expect(parent.childNodes[1].nodeValue).toBe('text');
      expect(parent.childNodes[2]).toBe(child2);
    });

    test('should not append if parent is null', () => {
      const child = createElement('span');
      appendChildren(null, [child]);
      // No error should be thrown
    });
  });

  describe('removeElement', () => {
    test('should remove an element from its parent', () => {
      const child = createElement('span');
      container.appendChild(child);
      expect(container.children.length).toBe(1);
      removeElement(child);
      expect(container.children.length).toBe(0);
    });

    test('should not throw error if element has no parent', () => {
      const el = createElement('div');
      removeElement(el);
      // No error should be thrown
    });

    test('should not throw error if element is null', () => {
      removeElement(null);
      // No error should be thrown
    });
  });

  describe('replaceElement', () => {
    test('should replace an old element with a new one', () => {
      const oldEl = createElement('div', { id: 'old' });
      const newEl = createElement('span', { id: 'new' });
      container.appendChild(oldEl);
      expect(container.children[0]).toBe(oldEl);

      replaceElement(oldEl, newEl);
      expect(container.children[0]).toBe(newEl);
      expect(container.children.length).toBe(1);
    });

    test('should return the new element', () => {
      const oldEl = createElement('div');
      const newEl = createElement('span');
      container.appendChild(oldEl);
      expect(replaceElement(oldEl, newEl)).toBe(newEl);
    });

    test('should return null if oldElement is invalid', () => {
      const newEl = createElement('span');
      expect(replaceElement(null, newEl)).toBeNull();
      expect(replaceElement(createElement('div'), newEl)).toBeNull(); // No parent
    });

    test('should return null if newElement is invalid', () => {
      const oldEl = createElement('div');
      container.appendChild(oldEl);
      expect(replaceElement(oldEl, null)).toBeNull();
    });
  });

  describe('wrapElement', () => {
    test('should wrap an element with another element', () => {
      const innerEl = createElement('span', { id: 'inner' });
      const wrapperEl = createElement('div', { id: 'wrapper' });
      container.appendChild(innerEl);

      wrapElement(innerEl, wrapperEl);
      expect(container.children[0]).toBe(wrapperEl);
      expect(wrapperEl.children[0]).toBe(innerEl);
    });

    test('should return the wrapper element', () => {
      const innerEl = createElement('span');
      const wrapperEl = createElement('div');
      container.appendChild(innerEl);
      expect(wrapElement(innerEl, wrapperEl)).toBe(wrapperEl);
    });

    test('should return null if elementToWrap is invalid', () => {
      const wrapperEl = createElement('div');
      expect(wrapElement(null, wrapperEl)).toBeNull();
      expect(wrapElement(createElement('span'), wrapperEl)).toBeNull(); // No parent
    });

    test('should return null if wrapperElement is invalid', () => {
      const innerEl = createElement('span');
      container.appendChild(innerEl);
      expect(wrapElement(innerEl, null)).toBeNull();
    });
  });
});
