import { addClass, removeClass, toggleClass, hasClass, setStyle } from './dom-manipulation-utils.js';

describe('DOM Manipulation Utilities', () => {
  let element;

  beforeEach(() => {
    // Create a new div element for each test
    element = document.createElement('div');
  });

  describe('addClass', () => {
    test('should add a class to an element', () => {
      addClass(element, 'test-class');
      expect(element.className).toBe('test-class');
    });

    test('should not add a class if it already exists', () => {
      element.className = 'test-class';
      addClass(element, 'test-class');
      expect(element.className).toBe('test-class');
    });
  });

  describe('removeClass', () => {
    test('should remove a class from an element', () => {
      element.className = 'test-class another-class';
      removeClass(element, 'test-class');
      expect(element.className).toBe(' another-class'); // Note the leading space
    });

    test('should do nothing if the class does not exist', () => {
      element.className = 'another-class';
      removeClass(element, 'test-class');
      expect(element.className).toBe('another-class');
    });
  });

  describe('toggleClass', () => {
    test('should add a class if it does not exist', () => {
      toggleClass(element, 'test-class');
      expect(hasClass(element, 'test-class')).toBe(true);
    });

    test('should remove a class if it exists', () => {
      element.className = 'test-class';
      toggleClass(element, 'test-class');
      expect(hasClass(element, 'test-class')).toBe(false);
    });
  });

  describe('hasClass', () => {
    test('should return true if the element has the class', () => {
      element.className = 'test-class';
      expect(hasClass(element, 'test-class')).toBe(true);
    });

    test('should return false if the element does not have the class', () => {
      expect(hasClass(element, 'test-class')).toBe(false);
    });
  });

  describe('setStyle', () => {
    test('should set a style property on an element', () => {
      setStyle(element, 'color', 'red');
      expect(element.style.color).toBe('red');
    });

    test('should set another style property', () => {
      setStyle(element, 'backgroundColor', 'blue');
      expect(element.style.backgroundColor).toBe('blue');
    });
  });
});
