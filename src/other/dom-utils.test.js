import { selectElement, selectAllElements, createElement, appendChild, removeElement, show, hide, toggle, addClass, removeClass, hasClass, setAttributes, appendChildren, getStyle, setStyle, getText, setText, getHtml, setHtml, isElementVisible, hasAttribute, createElementWithAttributes, isElementFullyInViewport, isChildOf, hasAttributeValue, getScrollPosition, isDescendant } from './dom-utils.js';

describe('dom-utils', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should select a single element', () => {
    document.body.innerHTML = '<div id="test"></div>';
    const el = selectElement('#test');
    expect(el).not.toBeNull();
    expect(el.id).toBe('test');
  });

  it('should select all elements', () => {
    document.body.innerHTML = '<div class="test"></div><div class="test"></div>';
    const elements = selectAllElements('.test');
    expect(elements.length).toBe(2);
  });

  it('should create an element', () => {
    const el = createElement('div', { id: 'test' }, ['Hello']);
    expect(el.tagName).toBe('DIV');
    expect(el.id).toBe('test');
    expect(el.textContent).toBe('Hello');
  });

  it('should append a child', () => {
    const parent = createElement('div');
    const child = createElement('span');
    appendChild(parent, child);
    expect(parent.children.length).toBe(1);
    expect(parent.children[0].tagName).toBe('SPAN');
  });

  it('should remove an element', () => {
    const el = createElement('div');
    document.body.appendChild(el);
    removeElement(el);
    expect(document.body.children.length).toBe(0);
  });

  it('should show an element', () => {
    const el = createElement('div');
    el.style.display = 'none';
    show(el);
    expect(el.style.display).toBe('block');
  });

  it('should hide an element', () => {
    const el = createElement('div');
    hide(el);
    expect(el.style.display).toBe('none');
  });

  it('should toggle an element', () => {
    const el = createElement('div');
    toggle(el);
    expect(el.style.display).toBe('none');
    toggle(el);
    expect(el.style.display).toBe('block');
  });

  describe('addClass', () => {
    it('should add a class to an element', () => {
      const el = createElement('div');
      addClass(el, 'test-class');
      expect(el.classList.contains('test-class')).toBe(true);
    });

    it('should not add a class if element is null or undefined', () => {
      const el = null;
      addClass(el, 'test-class');
      // No error should be thrown
    });
  });

  describe('removeClass', () => {
    it('should remove a class from an element', () => {
      const el = createElement('div', { class: 'test-class another-class' });
      removeClass(el, 'test-class');
      expect(el.classList.contains('test-class')).toBe(false);
      expect(el.classList.contains('another-class')).toBe(true);
    });

    it('should not remove a class if element is null or undefined', () => {
      const el = null;
      removeClass(el, 'test-class');
      // No error should be thrown
    });
  });

  describe('hasClass', () => {
    it('should return true if an element has the class', () => {
      const el = createElement('div', { class: 'test-class' });
      expect(hasClass(el, 'test-class')).toBe(true);
    });

    it('should return false if an element does not have the class', () => {
      const el = createElement('div', { class: 'another-class' });
      expect(hasClass(el, 'test-class')).toBe(false);
    });

    it('should return false if element is null or undefined', () => {
      const el = null;
      expect(hasClass(el, 'test-class')).toBe(false);
    });
  });

  describe('setAttributes', () => {
    it('should set multiple attributes on an element', () => {
      const el = createElement('div');
      setAttributes(el, { id: 'myId', 'data-value': '123' });
      expect(el.id).toBe('myId');
      expect(el.getAttribute('data-value')).toBe('123');
    });

    it('should not throw error if element is null', () => {
      const el = null;
      setAttributes(el, { id: 'myId' });
      // No error should be thrown
    });
  });

  describe('appendChildren', () => {
    it('should append multiple child elements', () => {
      const parent = createElement('div');
      const child1 = createElement('span');
      const child2 = createElement('p');
      appendChildren(parent, [child1, child2, 'text node']);
      expect(parent.children.length).toBe(2);
      expect(parent.children[0].tagName).toBe('SPAN');
      expect(parent.children[1].tagName).toBe('P');
      expect(parent.childNodes[2].nodeValue).toBe('text node');
    });

    it('should not throw error if parent is null', () => {
      const parent = null;
      appendChildren(parent, [createElement('div')]);
      // No error should be thrown
    });
  });

  describe('getStyle', () => {
    it('should get the computed style of an element', () => {
      const el = createElement('div');
      el.style.width = '100px';
      document.body.appendChild(el);
      expect(getStyle(el, 'width')).toBe('100px');
    });

    it('should return empty string for null element', () => {
      expect(getStyle(null, 'width')).toBe('');
    });
  });

  describe('setStyle', () => {
    it('should set the style of an element', () => {
      const el = createElement('div');
      setStyle(el, 'width', '200px');
      expect(el.style.width).toBe('200px');
    });

    it('should not throw error for null element', () => {
      const el = null;
      setStyle(el, 'width', '200px');
      // No error should be thrown
    });
  });

  describe('getText', () => {
    it('should get the text content of an element', () => {
      const el = createElement('div', {}, ['Hello World']);
      expect(getText(el)).toBe('Hello World');
    });

    it('should return empty string for null element', () => {
      expect(getText(null)).toBe('');
    });
  });

  describe('setText', () => {
    it('should set the text content of an element', () => {
      const el = createElement('div');
      setText(el, 'New Text');
      expect(el.textContent).toBe('New Text');
    });

    it('should not throw error for null element', () => {
      const el = null;
      setText(el, 'New Text');
      // No error should be thrown
    });
  });

  describe('getHtml', () => {
    it('should get the HTML content of an element', () => {
      const el = createElement('div', {}, [createElement('span', {}, ['Hello'])]);
      expect(getHtml(el)).toBe('<span>Hello</span>');
    });

    it('should return empty string for null element', () => {
      expect(getHtml(null)).toBe('');
    });
  });

  describe('setHtml', () => {
    it('should set the HTML content of an element', () => {
      const el = createElement('div');
      setHtml(el, '<strong>New HTML</strong>');
      expect(el.innerHTML).toBe('<strong>New HTML</strong>');
    });

    it('should not throw error for null element', () => {
      const el = null;
      setHtml(el, '<strong>New HTML</strong>');
      // No error should be thrown
    });
  });

  describe('isElementVisible', () => {
    test('should return true for a visible element', () => {
      const el = createElement('div');
      document.body.appendChild(el);
      expect(isElementVisible(el)).toBe(true);
    });

    test('should return false for a hidden element (display: none)', () => {
      const el = createElement('div');
      el.style.display = 'none';
      document.body.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    test('should return false for a hidden element (visibility: hidden)', () => {
      const el = createElement('div');
      el.style.visibility = 'hidden';
      document.body.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    test('should return false for a hidden element (opacity: 0)', () => {
      const el = createElement('div');
      el.style.opacity = '0';
      document.body.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    test('should return false for null element', () => {
      expect(isElementVisible(null)).toBe(false);
    });
  });

  describe('hasAttribute', () => {
    test('should return true if the element has the attribute', () => {
      const el = createElement('div', { 'data-test': 'value' });
      expect(hasAttribute(el, 'data-test')).toBe(true);
    });

    test('should return false if the element does not have the attribute', () => {
      const el = createElement('div');
      expect(hasAttribute(el, 'data-test')).toBe(false);
    });

    test('should return false for null element', () => {
      expect(hasAttribute(null, 'data-test')).toBe(false);
    });

    test('should return false for invalid attribute name', () => {
      const el = createElement('div', { 'data-test': 'value' });
      expect(hasAttribute(el, null)).toBe(false);
      expect(hasAttribute(el, undefined)).toBe(false);
      expect(hasAttribute(el, 123)).toBe(false);
    });
  });

  describe('createElementWithAttributes', () => {
    test('should create an element with specified tag name and attributes', () => {
      const el = createElementWithAttributes('a', { href: '#', target: '_blank' });
      expect(el.tagName).toBe('A');
      expect(el.getAttribute('href')).toBe('#');
      expect(el.getAttribute('target')).toBe('_blank');
    });

    test('should create an element without attributes if none are provided', () => {
      const el = createElementWithAttributes('p');
      expect(el.tagName).toBe('P');
      expect(el.attributes.length).toBe(0);
    });
  });

  describe('appendChildren', () => {
    test('should append multiple child elements to a parent', () => {
      const parent = document.createElement('div');
      const child1 = document.createElement('span');
      const child2 = document.createElement('p');
      appendChildren(parent, [child1, child2, 'text node']);

      expect(parent.children.length).toBe(2);
      expect(parent.children[0]).toBe(child1);
      expect(parent.children[1]).toBe(child2);
      expect(parent.childNodes[2].nodeValue).toBe('text node');
    });

    test('should handle empty children array', () => {
      const parent = document.createElement('div');
      appendChildren(parent, []);
      expect(parent.children.length).toBe(0);
    });

    test('should not append if parent is null or undefined', () => {
      appendChildren(null, [document.createElement('div')]);
      // No error should be thrown, and nothing should be appended
    });
  });

  describe('isElementFullyInViewport', () => {
    test('should return true if element is fully in viewport', () => {
      const el = createElement('div');
      document.body.appendChild(el);
      Object.defineProperty(el, 'getBoundingClientRect', {
        value: () => ({
          top: 10,
          left: 10,
          bottom: 100,
          right: 100,
          width: 90,
          height: 90,
          x: 10,
          y: 10,
        }),
      });
      Object.defineProperty(window, 'innerHeight', { value: 200, writable: true });
      Object.defineProperty(window, 'innerWidth', { value: 200, writable: true });
      expect(isElementFullyInViewport(el)).toBe(true);
    });

    test('should return false if element is partially out of viewport', () => {
      const el = createElement('div');
      document.body.appendChild(el);
      Object.defineProperty(el, 'getBoundingClientRect', {
        value: () => ({
          top: -10,
          left: 10,
          bottom: 100,
          right: 100,
          width: 90,
          height: 90,
          x: -10,
          y: 10,
        }),
      });
      Object.defineProperty(window, 'innerHeight', { value: 200, writable: true });
      Object.defineProperty(window, 'innerWidth', { value: 200, writable: true });
      expect(isElementFullyInViewport(el)).toBe(false);
    });

    test('should return false for null element', () => {
      expect(isElementFullyInViewport(null)).toBe(false);
    });
  });

  describe('isChildOf', () => {
    let parentEl, childEl, grandChildEl, unrelatedEl;

    beforeEach(() => {
      document.body.innerHTML = '';
      parentEl = createElement('div', { id: 'parent' });
      childEl = createElement('span', { id: 'child' });
      grandChildEl = createElement('p', { id: 'grandchild' });
      unrelatedEl = createElement('div', { id: 'unrelated' });

      parentEl.appendChild(childEl);
      childEl.appendChild(grandChildEl);
      document.body.appendChild(parentEl);
      document.body.appendChild(unrelatedEl);
    });

    test('should return true if child is a direct child of parent', () => {
      expect(isChildOf(childEl, parentEl)).toBe(true);
    });

    test('should return true if child is a grandchild of parent', () => {
      expect(isChildOf(grandChildEl, parentEl)).toBe(true);
    });

    test('should return false if child is not a descendant of parent', () => {
      expect(isChildOf(unrelatedEl, parentEl)).toBe(false);
      expect(isChildOf(parentEl, childEl)).toBe(false); // Parent is not child of child
    });

    test('should return false if child is the same as parent', () => {
      expect(isChildOf(parentEl, parentEl)).toBe(false);
    });

    test('should return false for null or undefined inputs', () => {
      expect(isChildOf(null, parentEl)).toBe(false);
      expect(isChildOf(childEl, null)).toBe(false);
      expect(isChildOf(undefined, parentEl)).toBe(false);
      expect(isChildOf(childEl, undefined)).toBe(false);
    });
  });

  describe('hasAttributeValue', () => {
    test('should return true if the element has the attribute with the specified value', () => {
      const el = createElement('div', { 'data-test': 'value123' });
      expect(hasAttributeValue(el, 'data-test', 'value123')).toBe(true);
    });

    test('should return false if the attribute value does not match', () => {
      const el = createElement('div', { 'data-test': 'value123' });
      expect(hasAttributeValue(el, 'data-test', 'otherValue')).toBe(false);
    });

    test('should return false if the element does not have the attribute', () => {
      const el = createElement('div');
      expect(hasAttributeValue(el, 'data-test', 'value123')).toBe(false);
    });

    test('should return false for null element', () => {
      expect(hasAttributeValue(null, 'data-test', 'value')).toBe(false);
    });

    test('should return false for invalid attribute name', () => {
      const el = createElement('div', { 'data-test': 'value' });
      expect(hasAttributeValue(el, null, 'value')).toBe(false);
      expect(hasAttributeValue(el, undefined, 'value')).toBe(false);
      expect(hasAttributeValue(el, 123, 'value')).toBe(false);
    });
  });

  describe('getScrollPosition', () => {
    let originalScrollX, originalScrollY, originalScrollLeft, originalScrollTop;

    beforeEach(() => {
      originalScrollX = window.scrollX;
      originalScrollY = window.scrollY;
      originalScrollLeft = document.documentElement.scrollLeft;
      originalScrollTop = document.documentElement.scrollTop;

      Object.defineProperty(window, 'scrollX', { value: 0, writable: true });
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
      Object.defineProperty(document.documentElement, 'scrollLeft', { value: 0, writable: true });
      Object.defineProperty(document.documentElement, 'scrollTop', { value: 0, writable: true });
    });

    afterEach(() => {
      Object.defineProperty(window, 'scrollX', { value: originalScrollX, writable: true });
      Object.defineProperty(window, 'scrollY', { value: originalScrollY, writable: true });
      Object.defineProperty(document.documentElement, 'scrollLeft', { value: originalScrollLeft, writable: true });
      Object.defineProperty(document.documentElement, 'scrollTop', { value: originalScrollTop, writable: true });
    });

    test('should return the scroll position of the document', () => {
      Object.defineProperty(window, 'scrollX', { value: 100, writable: true });
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
      const scrollPos = getScrollPosition();
      expect(scrollPos).toEqual({ x: 100, y: 200 });
    });

    test('should return the scroll position of a specific element', () => {
      const el = createElement('div');
      el.scrollLeft = 50;
      el.scrollTop = 75;

      const scrollPos = getScrollPosition(el);
      expect(scrollPos).toEqual({ x: 50, y: 75 });
    });

    test('should return {x: 0, y: 0} for null or undefined element', () => {
      expect(getScrollPosition(null)).toEqual({ x: 0, y: 0 });
      expect(getScrollPosition(undefined)).toEqual({ x: 0, y: 0 });
    });
  });

  describe('isDescendant', () => {
    let ancestorEl, descendantEl, grandDescendantEl, unrelatedEl;

    beforeEach(() => {
      document.body.innerHTML = '';
      ancestorEl = createElement('div', { id: 'ancestor' });
      descendantEl = createElement('span', { id: 'descendant' });
      grandDescendantEl = createElement('p', { id: 'grand-descendant' });
      unrelatedEl = createElement('div', { id: 'unrelated' });

      ancestorEl.appendChild(descendantEl);
      descendantEl.appendChild(grandDescendantEl);
      document.body.appendChild(ancestorEl);
      document.body.appendChild(unrelatedEl);
    });

    test('should return true if descendant is a direct child of ancestor', () => {
      expect(isDescendant(descendantEl, ancestorEl)).toBe(true);
    });

    test('should return true if descendant is a grand-child of ancestor', () => {
      expect(isDescendant(grandDescendantEl, ancestorEl)).toBe(true);
    });

    test('should return false if descendant is not a descendant of ancestor', () => {
      expect(isDescendant(unrelatedEl, ancestorEl)).toBe(false);
      expect(isDescendant(ancestorEl, descendantEl)).toBe(false); // Ancestor is not descendant of descendant
    });

    test('should return false if descendant is the same as ancestor', () => {
      expect(isDescendant(ancestorEl, ancestorEl)).toBe(false);
    });

    test('should return false for null or undefined inputs', () => {
      expect(isDescendant(null, ancestorEl)).toBe(false);
      expect(isDescendant(descendantEl, null)).toBe(false);
      expect(isDescendant(undefined, ancestorEl)).toBe(false);
      expect(isDescendant(descendantEl, undefined)).toBe(false);
    });
  });

  describe('isElementFocused', () => {
    let inputElement;

    beforeEach(() => {
      inputElement = document.createElement('input');
      document.body.appendChild(inputElement);
      inputElement.focus();
    });

    afterEach(() => {
      document.body.removeChild(inputElement);
    });

    test('should return true if the element is focused', () => {
      expect(isElementFocused(inputElement)).toBe(true);
    });

    test('should return false if the element is not focused', () => {
      const anotherElement = document.createElement('button');
      document.body.appendChild(anotherElement);
      expect(isElementFocused(anotherElement)).toBe(false);
      document.body.removeChild(anotherElement);
    });

    test('should return false for null element', () => {
      expect(isElementFocused(null)).toBe(false);
    });
  });

  describe('isScrollable', () => {
    let scrollableDiv, nonScrollableDiv;

    beforeEach(() => {
      scrollableDiv = document.createElement('div');
      scrollableDiv.style.width = '100px';
      scrollableDiv.style.height = '100px';
      scrollableDiv.style.overflow = 'auto';
      scrollableDiv.innerHTML = '<div style="width: 200px; height: 200px;"></div>';
      document.body.appendChild(scrollableDiv);

      nonScrollableDiv = document.createElement('div');
      nonScrollableDiv.style.width = '100px';
      nonScrollableDiv.style.height = '100px';
      nonScrollableDiv.style.overflow = 'hidden'; // or 'visible'
      nonScrollableDiv.innerHTML = '<div style="width: 50px; height: 50px;"></div>';
      document.body.appendChild(nonScrollableDiv);
    });

    afterEach(() => {
      document.body.removeChild(scrollableDiv);
      document.body.removeChild(nonScrollableDiv);
    });

    test('should return true for a scrollable element', () => {
      expect(isScrollable(scrollableDiv)).toBe(true);
    });

    test('should return false for a non-scrollable element', () => {
      expect(isScrollable(nonScrollableDiv)).toBe(false);
    });

    test('should return false for null or non-element inputs', () => {
      expect(isScrollable(null)).toBe(false);
      expect(isScrollable(undefined)).toBe(false);
      expect(isScrollable(document.createTextNode('text'))).toBe(false);
    });
  });

  describe('wrapElement', () => {
    let targetElement, wrapperElement;

    beforeEach(() => {
      document.body.innerHTML = '<div id="container"><p id="target">This is the target.</p></div>';
      targetElement = document.getElementById('target');
      wrapperElement = document.createElement('div');
      wrapperElement.id = 'wrapper';
    });

    test('should wrap the target element with the wrapper element', () => {
      wrapElement(targetElement, wrapperElement);
      const container = document.getElementById('container');
      expect(container.children.length).toBe(1);
      expect(container.children[0].id).toBe('wrapper');
      expect(wrapperElement.children.length).toBe(1);
      expect(wrapperElement.children[0].id).toBe('target');
    });

    test('should not wrap if target or wrapper is null', () => {
      const originalHtml = document.body.innerHTML;
      wrapElement(null, wrapperElement);
      expect(document.body.innerHTML).toBe(originalHtml);
      wrapElement(targetElement, null);
      expect(document.body.innerHTML).toBe(originalHtml);
    });

    test('should not wrap if target has no parent', () => {
      const isolatedElement = document.createElement('p');
      const originalHtml = document.body.innerHTML;
      wrapElement(isolatedElement, wrapperElement);
      expect(document.body.innerHTML).toBe(originalHtml);
    });
  });
});
