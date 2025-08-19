const { getAttribute, hasAttribute, setAttribute, removeAttribute, setAttributes } = require('./dom-attribute-utils.js');

describe('DOM Attribute Utilities', () => {
  let element;

  beforeEach(() => {
    // Create a dummy DOM element for testing
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up the dummy element
    document.body.removeChild(element);
  });

  describe('getAttribute', () => {
    test('should return the value of a specified attribute', () => {
      element.setAttribute('data-test', 'value');
      expect(getAttribute(element, 'data-test')).toBe('value');
    });

    test('should return null if the attribute does not exist', () => {
      expect(getAttribute(element, 'non-existent')).toBeNull();
    });

    test('should return null for invalid element', () => {
      expect(getAttribute(null, 'data-test')).toBeNull();
      expect(getAttribute(undefined, 'data-test')).toBeNull();
    });
  });

  describe('hasAttribute', () => {
    test('should return true if the element has the attribute', () => {
      element.setAttribute('data-test', 'value');
      expect(hasAttribute(element, 'data-test')).toBe(true);
    });

    test('should return false if the attribute does not exist', () => {
      expect(hasAttribute(element, 'non-existent')).toBe(false);
    });

    test('should return false for invalid element', () => {
      expect(hasAttribute(null, 'data-test')).toBe(false);
      expect(hasAttribute(undefined, 'data-test')).toBe(false);
    });
  });

  describe('setAttribute', () => {
    test('should set the value of a specified attribute', () => {
      setAttribute(element, 'id', 'my-id');
      expect(element.getAttribute('id')).toBe('my-id');
    });

    test('should overwrite an existing attribute', () => {
      element.setAttribute('data-value', 'old');
      setAttribute(element, 'data-value', 'new');
      expect(element.getAttribute('data-value')).toBe('new');
    });

    test('should not throw error for invalid element', () => {
      expect(() => setAttribute(null, 'id', 'my-id')).not.toThrow();
    });
  });

  describe('removeAttribute', () => {
    test('should remove a specified attribute', () => {
      element.setAttribute('data-remove', 'true');
      expect(element.hasAttribute('data-remove')).toBe(true);
      removeAttribute(element, 'data-remove');
      expect(element.hasAttribute('data-remove')).toBe(false);
    });

    test('should not throw error if attribute does not exist', () => {
      expect(() => removeAttribute(element, 'non-existent')).not.toThrow();
    });

    test('should not throw error for invalid element', () => {
      expect(() => removeAttribute(null, 'data-test')).not.toThrow();
    });
  });

  describe('setAttributes', () => {
    test('should set multiple attributes from an object', () => {
      const attrs = {
        id: 'test-id',
        'data-type': 'button',
        tabindex: '0'
      };
      setAttributes(element, attrs);
      expect(element.getAttribute('id')).toBe('test-id');
      expect(element.getAttribute('data-type')).toBe('button');
      expect(element.getAttribute('tabindex')).toBe('0');
    });

    test('should overwrite existing attributes', () => {
      element.setAttribute('id', 'old-id');
      element.setAttribute('data-type', 'old-type');
      const attrs = {
        id: 'new-id',
        'data-type': 'new-type'
      };
      setAttributes(element, attrs);
      expect(element.getAttribute('id')).toBe('new-id');
      expect(element.getAttribute('data-type')).toBe('new-type');
    });

    test('should not throw error for invalid element', () => {
      const attrs = { id: 'test' };
      expect(() => setAttributes(null, attrs)).not.toThrow();
      expect(() => setAttributes(undefined, attrs)).not.toThrow();
    });

    test('should not throw error for invalid attributes object', () => {
      expect(() => setAttributes(element, null)).not.toThrow();
      expect(() => setAttributes(element, undefined)).not.toThrow();
      expect(() => setAttributes(element, 'string')).not.toThrow();
    });
  });
});