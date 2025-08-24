import { getAttribute, setAttribute, hasAttribute, removeAttribute } from './dom-attribute-utils.js';

describe('DOM Attribute Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('getAttribute', () => {
    it('should return the value of the specified attribute', () => {
      element.setAttribute('data-test', 'value');
      expect(getAttribute(element, 'data-test')).toBe('value');
    });

    it('should return null if the attribute does not exist', () => {
      expect(getAttribute(element, 'non-existent')).toBeNull();
    });
  });

  describe('setAttribute', () => {
    it('should set the value of an attribute', () => {
      setAttribute(element, 'id', 'my-id');
      expect(element.getAttribute('id')).toBe('my-id');
    });

    it('should update the value of an existing attribute', () => {
      element.setAttribute('data-count', '1');
      setAttribute(element, 'data-count', '2');
      expect(element.getAttribute('data-count')).toBe('2');
    });
  });

  describe('hasAttribute', () => {
    it('should return true if the element has the attribute', () => {
      element.setAttribute('aria-hidden', 'true');
      expect(hasAttribute(element, 'aria-hidden')).toBe(true);
    });

    it('should return false if the element does not have the attribute', () => {
      expect(hasAttribute(element, 'aria-label')).toBe(false);
    });
  });

  describe('removeAttribute', () => {
    it('should remove the specified attribute', () => {
      element.setAttribute('tabindex', '-1');
      removeAttribute(element, 'tabindex');
      expect(element.hasAttribute('tabindex')).toBe(false);
    });

    it('should not throw an error if the attribute does not exist', () => {
      expect(() => removeAttribute(element, 'non-existent')).not.toThrow();
    });
  });
});
