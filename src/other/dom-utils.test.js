import { hasClass, toggleClass, toggleVisibility, isInViewport } from './dom-utils.js';

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

  describe('toggleVisibility', () => {
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      element.style.display = ''; // Default display
    });

    it('should hide an element if it is visible', () => {
      toggleVisibility(element);
      expect(element.style.display).toBe('none');
    });

    it('should show an element if it is hidden', () => {
      element.style.display = 'none';
      toggleVisibility(element);
      expect(element.style.display).toBe('block');
    });

    it('should use the specified display type when showing', () => {
      element.style.display = 'none';
      toggleVisibility(element, 'inline-block');
      expect(element.style.display).toBe('inline-block');
    });

    it('should not fail on null or undefined elements', () => {
      expect(() => toggleVisibility(null)).not.toThrow();
    });
  });

  describe('isInViewport', () => {
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      document.body.appendChild(element);
      // Mock getBoundingClientRect for testing viewport visibility
      Object.defineProperty(element, 'getBoundingClientRect', {
        value: () => ({
          top: 10,
          left: 10,
          bottom: 20,
          right: 20,
          width: 10,
          height: 10,
          x: 10,
          y: 10,
          toJSON: () => {},
        }),
      });

      // Mock window and document for viewport dimensions
      Object.defineProperty(window, 'innerHeight', { writable: true, value: 100 });
      Object.defineProperty(window, 'innerWidth', { writable: true, value: 100 });
      Object.defineProperty(document.documentElement, 'clientHeight', { writable: true, value: 100 });
      Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, value: 100 });
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    test('should return true if element is fully in viewport', () => {
      expect(isInViewport(element)).toBe(true);
    });

    test('should return false if element is above viewport', () => {
      Object.defineProperty(element, 'getBoundingClientRect', {
        value: () => ({ top: -50, left: 10, bottom: -40, right: 20 }),
      });
      expect(isInViewport(element)).toBe(false);
    });

    test('should return false if element is below viewport', () => {
      Object.defineProperty(element, 'getBoundingClientRect', {
        value: () => ({ top: 110, left: 10, bottom: 120, right: 20 }),
      });
      expect(isInViewport(element)).toBe(false);
    });

    test('should return false if element is left of viewport', () => {
      Object.defineProperty(element, 'getBoundingClientRect', {
        value: () => ({ top: 10, left: -50, bottom: 20, right: -40 }),
      });
      expect(isInViewport(element)).toBe(false);
    });

    test('should return false if element is right of viewport', () => {
      Object.defineProperty(element, 'getBoundingClientRect', {
        value: () => ({ top: 10, left: 110, bottom: 20, right: 120 }),
      });
      expect(isInViewport(element)).toBe(false);
    });

    test('should return false for null or undefined elements', () => {
      expect(isInViewport(null)).toBe(false);
      expect(isInViewport(undefined)).toBe(false);
    });
  });
});