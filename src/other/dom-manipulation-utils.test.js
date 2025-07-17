import {
  createElement,
  appendChildren,
  prependChildren,
  removeElement,
  emptyElement,
  setAttributes,
  getAttributes,
  isVisible,
} from './dom-manipulation-utils';

describe('dom-manipulation-utils', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('createElement', () => {
    it('should create an element with a tag name', () => {
      const el = createElement('span');
      expect(el.tagName).toBe('SPAN');
    });

    it('should create an element with attributes', () => {
      const el = createElement('div', { id: 'test', class: 'my-class' });
      expect(el.id).toBe('test');
      expect(el.className).toBe('my-class');
    });

    it('should create an element with text content children', () => {
      const el = createElement('p', {}, ['Hello, ', 'World!']);
      expect(el.textContent).toBe('Hello, World!');
    });

    it('should create an element with HTMLElement children', () => {
      const child1 = document.createElement('span');
      const child2 = document.createElement('b');
      const el = createElement('div', {}, [child1, child2]);
      expect(el.children.length).toBe(2);
      expect(el.children[0]).toBe(child1);
      expect(el.children[1]).toBe(child2);
    });

    it('should create an element with mixed children', () => {
      const child = document.createElement('span');
      const el = createElement('div', {}, ['Text before', child, 'Text after']);
      expect(el.childNodes.length).toBe(3);
      expect(el.childNodes[0].nodeType).toBe(Node.TEXT_NODE);
      expect(el.childNodes[1]).toBe(child);
      expect(el.childNodes[2].nodeType).toBe(Node.TEXT_NODE);
    });
  });

  describe('appendChildren', () => {
    it('should append children to an element', () => {
      const child1 = document.createElement('span');
      const child2 = document.createElement('b');
      appendChildren(container, [child1, 'text', child2]);
      expect(container.children.length).toBe(2);
      expect(container.textContent).toBe('text');
      expect(container.children[0]).toBe(child1);
      expect(container.children[1]).toBe(child2);
    });

    it('should do nothing if parent is null', () => {
      const child = document.createElement('span');
      expect(() => appendChildren(null, [child])).not.toThrow();
    });
  });

  describe('prependChildren', () => {
    it('should prepend children to an element', () => {
      const existingChild = document.createElement('p');
      container.appendChild(existingChild);

      const newChild1 = document.createElement('span');
      const newChild2 = document.createElement('b');
      prependChildren(container, [newChild1, 'text', newChild2]);

      expect(container.children.length).toBe(3);
      expect(container.children[0]).toBe(newChild2);
      expect(container.children[1]).toBe(newChild1);
      expect(container.children[2]).toBe(existingChild);
      expect(container.textContent).toBe('text');
    });

    it('should do nothing if parent is null', () => {
      const child = document.createElement('span');
      expect(() => prependChildren(null, [child])).not.toThrow();
    });
  });

  describe('removeElement', () => {
    it('should remove an element from its parent', () => {
      const child = document.createElement('span');
      container.appendChild(child);
      expect(container.contains(child)).toBe(true);
      removeElement(child);
      expect(container.contains(child)).toBe(false);
    });

    it('should do nothing if element is null or has no parent', () => {
      const detachedElement = document.createElement('div');
      expect(() => removeElement(null)).not.toThrow();
      expect(() => removeElement(detachedElement)).not.toThrow();
    });
  });

  describe('emptyElement', () => {
    it('should remove all children from an element', () => {
      const child1 = document.createElement('span');
      const child2 = document.createElement('b');
      container.appendChild(child1);
      container.appendChild(child2);
      expect(container.children.length).toBe(2);
      emptyElement(container);
      expect(container.children.length).toBe(0);
    });

    it('should do nothing if element is null', () => {
      expect(() => emptyElement(null)).not.toThrow();
    });
  });

  describe('setAttributes', () => {
    it('should set multiple attributes on an element', () => {
      const el = document.createElement('div');
      setAttributes(el, { id: 'my-id', 'data-test': 'value' });
      expect(el.id).toBe('my-id');
      expect(el.getAttribute('data-test')).toBe('value');
    });

    it('should do nothing if element is null', () => {
      expect(() => setAttributes(null, { id: 'test' })).not.toThrow();
    });
  });

  describe('getAttributes', () => {
    it('should get multiple attributes from an element', () => {
      const el = document.createElement('div');
      el.setAttribute('id', 'my-id');
      el.setAttribute('data-test', 'value');
      const attrs = getAttributes(el, ['id', 'data-test', 'non-existent']);
      expect(attrs).toEqual({ id: 'my-id', 'data-test': 'value', 'non-existent': null });
    });

    it('should return an empty object if element is null', () => {
      expect(getAttributes(null, ['id'])).toEqual({});
    });
  });

  describe('isVisible', () => {
    it('should return true for a visible element', () => {
      const el = document.createElement('div');
      document.body.appendChild(el);
      expect(isVisible(el)).toBe(true);
    });

    it('should return false for an element with display: none', () => {
      const el = document.createElement('div');
      el.style.display = 'none';
      document.body.appendChild(el);
      expect(isVisible(el)).toBe(false);
    });

    it('should return false for an element with visibility: hidden', () => {
      const el = document.createElement('div');
      el.style.visibility = 'hidden';
      document.body.appendChild(el);
      expect(isVisible(el)).toBe(false);
    });

    it('should return false for an element with opacity: 0', () => {
      const el = document.createElement('div');
      el.style.opacity = '0';
      document.body.appendChild(el);
      expect(isVisible(el)).toBe(false);
    });

    it('should return false if element is null', () => {
      expect(isVisible(null)).toBe(false);
    });
  });

  describe('replaceElement', () => {
    it('should replace an old element with a new one', () => {
      const oldEl = createElement('div', { id: 'old' });
      const newEl = createElement('span', { id: 'new' });
      container.appendChild(oldEl);
      expect(container.children[0]).toBe(oldEl);

      replaceElement(oldEl, newEl);
      expect(container.children[0]).toBe(newEl);
      expect(container.children.length).toBe(1);
    });

    it('should return null if oldElement is null', () => {
      const newEl = createElement('span');
      expect(replaceElement(null, newEl)).toBeNull();
    });

    it('should return null if newElement is null', ()2 => {
      const oldEl = createElement('div');
      container.appendChild(oldEl);
      expect(replaceElement(oldEl, null)).toBeNull();
    });
  });

  describe('wrapElement', () => {
    it('should wrap an element with another element', () => {
      const innerEl = createElement('span', { id: 'inner' });
      const wrapperEl = createElement('div', { id: 'wrapper' });
      container.appendChild(innerEl);

      wrapElement(innerEl, wrapperEl);
      expect(container.children[0]).toBe(wrapperEl);
      expect(wrapperEl.children[0]).toBe(innerEl);
    });

    it('should return null if elementToWrap is null', () => {
      const wrapperEl = createElement('div');
      expect(wrapElement(null, wrapperEl)).toBeNull();
    });

    it('should return null if wrapperElement is null', () => {
      const innerEl = createElement('span');
      container.appendChild(innerEl);
      expect(wrapElement(innerEl, null)).toBeNull();
    });
  });
});