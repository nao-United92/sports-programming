import { isVisible, toggleVisibility } from './dom-visibility-utils.js';

describe('DOM Visibility Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('isVisible', () => {
    it('should return true if the element is visible', () => {
      element.style.display = 'block';
      element.style.visibility = 'visible';
      element.style.opacity = '1';
      expect(isVisible(element)).toBe(true);
    });

    it('should return false if the element has display: none', () => {
      element.style.display = 'none';
      expect(isVisible(element)).toBe(false);
    });

    it('should return false if the element has visibility: hidden', () => {
      element.style.visibility = 'hidden';
      expect(isVisible(element)).toBe(false);
    });

    it('should return false if the element has opacity: 0', () => {
      element.style.opacity = '0';
      expect(isVisible(element)).toBe(false);
    });

    it('should return false for a non-existent element', () => {
      expect(isVisible(null)).toBe(false);
    });
  });

  describe('toggleVisibility', () => {
    it('should hide a visible element', () => {
      element.style.display = 'block';
      toggleVisibility(element);
      expect(element.style.display).toBe('none');
    });

    it('should show a hidden element with default display', () => {
      element.style.display = 'none';
      toggleVisibility(element);
      expect(element.style.display).toBe('block');
    });

    it('should show a hidden element with specified display', () => {
      element.style.display = 'none';
      toggleVisibility(element, 'flex');
      expect(element.style.display).toBe('flex');
    });
  });
});