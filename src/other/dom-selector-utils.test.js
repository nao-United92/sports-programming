import { selectElement, selectAllElements } from './dom-selector-utils.js';

describe('dom-selector-utils', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <p class="item">Item 1</p>
        <p class="item">Item 2</p>
        <span id="unique">Unique Span</span>
      </div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('selectElement', () => {
    test('should select a single element by ID', () => {
      const element = selectElement('#unique');
      expect(element).not.toBeNull();
      expect(element.id).toBe('unique');
    });

    test('should select the first element by class', () => {
      const element = selectElement('.item');
      expect(element).not.toBeNull();
      expect(element.textContent).toBe('Item 1');
    });

    test('should return null if element not found', () => {
      const element = selectElement('.non-existent');
      expect(element).toBeNull();
    });

    test('should select within a parent element', () => {
      const container = selectElement('#container');
      const element = selectElement('.item', container);
      expect(element).not.toBeNull();
      expect(element.textContent).toBe('Item 1');
    });

    test('should return null for invalid selector', () => {
      expect(selectElement(null)).toBeNull();
      expect(selectElement(undefined)).toBeNull();
      expect(selectElement(123)).toBeNull();
    });

    test('should return null for invalid parent', () => {
      const element = selectElement('#unique', null);
      expect(element).toBeNull();
    });
  });

  describe('selectAllElements', () => {
    test('should select all elements by class', () => {
      const elements = selectAllElements('.item');
      expect(elements.length).toBe(2);
      expect(elements[0].textContent).toBe('Item 1');
      expect(elements[1].textContent).toBe('Item 2');
    });

    test('should return an empty array if no elements found', () => {
      const elements = selectAllElements('.non-existent');
      expect(elements.length).toBe(0);
    });

    test('should select all elements within a parent', () => {
      const container = selectElement('#container');
      const elements = selectAllElements('.item', container);
      expect(elements.length).toBe(2);
    });

    test('should return empty array for invalid selector', () => {
      expect(selectAllElements(null).length).toBe(0);
      expect(selectAllElements(undefined).length).toBe(0);
      expect(selectAllElements(123).length).toBe(0);
    });

    test('should return empty array for invalid parent', () => {
      const elements = selectAllElements('.item', null);
      expect(elements.length).toBe(0);
    });
  });

  describe('closest', () => {
    let el, child, grandChild;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="grandparent">
          <div id="parent" class="container">
            <p id="child" class="text-item">
              <span id="grandchild">Hello</span>
            </p>
          </div>
        </div>
      `;
      el = document.getElementById('grandchild');
      child = document.getElementById('child');
      grandChild = document.getElementById('grandchild');
    });

    test('should find the closest ancestor matching the selector', () => {
      expect(closest(el, '.container')).toBe(document.getElementById('parent'));
    });

    test('should return the element itself if it matches the selector', () => {
      expect(closest(child, '.text-item')).toBe(child);
    });

    test('should return null if no matching ancestor is found', () => {
      expect(closest(el, '.non-existent')).toBeNull();
    });

    test('should return null if element is null', () => {
      expect(closest(null, '.container')).toBeNull();
    });

    test('should return null if selector is invalid', () => {
      expect(closest(el, null)).toBeNull();
      expect(closest(el, undefined)).toBeNull();
      expect(closest(el, 123)).toBeNull();
    });
  });
});
