import { selectElement, selectAllElements, createElement, appendChild, removeElement, show, hide, toggle, addClass, removeClass, hasClass, setAttributes, appendChildren } from './dom-utils.js';

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
});