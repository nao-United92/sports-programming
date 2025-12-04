import { hasClass, toggleClass } from './dom-class-utils.js';

describe('DOM Class Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('hasClass', () => {
    it('should return true if element has the class', () => {
      element.classList.add('test-class');
      expect(hasClass(element, 'test-class')).toBe(true);
    });

    it('should return false if element does not have the class', () => {
      expect(hasClass(element, 'non-existent-class')).toBe(false);
    });

    it('should return false if element is null/undefined', () => {
      expect(hasClass(null, 'test-class')).toBe(false);
      expect(hasClass(undefined, 'test-class')).toBe(false);
    });

    it('should return false if className is null/undefined/empty', () => {
      element.classList.add('test-class');
      expect(hasClass(element, null)).toBe(false);
      expect(hasClass(element, undefined)).toBe(false);
      expect(hasClass(element, '')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    it('should add class if element does not have it', () => {
      toggleClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(true);
    });

    it('should remove class if element has it', () => {
      element.classList.add('test-class');
      toggleClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(false);
    });

    it('should force add class if force is true', () => {
      element.classList.remove('test-class');
      toggleClass(element, 'test-class', true);
      expect(element.classList.contains('test-class')).toBe(true);
    });

    it('should force remove class if force is false', () => {
      element.classList.add('test-class');
      toggleClass(element, 'test-class', false);
      expect(element.classList.contains('test-class')).toBe(false);
    });

    it('should not throw error if element is null/undefined', () => {
      expect(() => toggleClass(null, 'test-class')).not.toThrow();
      expect(() => toggleClass(undefined, 'test-class')).not.toThrow();
    });

    it('should not throw error if className is null/undefined/empty', () => {
      element.classList.add('test-class');
      expect(() => toggleClass(element, null)).not.toThrow();
      expect(() => toggleClass(element, undefined)).not.toThrow();
      expect(() => toggleClass(element, '')).not.toThrow();
    });
  });
});
