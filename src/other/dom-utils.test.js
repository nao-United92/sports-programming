import { hasClass, toggleClass } from './dom-utils.js';

describe('DOM Class Utilities', () => {
  let element;

  beforeEach(() => {
    // Create a mock DOM element for each test
    element = document.createElement('div');
    element.className = 'class1 class2';
  });

  describe('hasClass', () => {
    it('should return true if the element has the class', () => {
      expect(hasClass(element, 'class1')).toBe(true);
    });

    it('should return false if the element does not have the class', () => {
      expect(hasClass(element, 'class3')).toBe(false);
    });

    it('should handle elements with no classes', () => {
      element.className = '';
      expect(hasClass(element, 'class1')).toBe(false);
    });

    it('should return false for null or undefined elements', () => {
      expect(hasClass(null, 'class1')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    it('should add the class if it does not exist', () => {
      toggleClass(element, 'class3');
      expect(hasClass(element, 'class3')).toBe(true);
    });

    it('should remove the class if it exists', () => {
      toggleClass(element, 'class1');
      expect(hasClass(element, 'class1')).toBe(false);
    });

    it('should not fail on null or undefined elements', () => {
      expect(() => toggleClass(null, 'class1')).not.toThrow();
    });
  });
});