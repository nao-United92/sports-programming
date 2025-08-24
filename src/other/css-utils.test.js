import { getStyle, setStyle, hideElement, showElement } from './css-utils.js';

describe('CSS Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('getStyle', () => {
    it('should return the computed style of an element', () => {
      element.style.width = '100px';
      expect(getStyle(element, 'width')).toBe('100px');
    });

    it('should return empty string for non-existent property', () => {
      expect(getStyle(element, 'non-existent-property')).toBe('');
    });
  });

  describe('setStyle', () => {
    it('should set a CSS property of an element', () => {
      setStyle(element, 'height', '50px');
      expect(element.style.height).toBe('50px');
    });
  });

  describe('hideElement', () => {
    it('should hide an element', () => {
      hideElement(element);
      expect(element.style.display).toBe('none');
    });
  });

  describe('showElement', () => {
    it('should show an element with default display', () => {
      element.style.display = 'none';
      showElement(element);
      expect(element.style.display).toBe('block');
    });

    it('should show an element with specified display', () => {
      element.style.display = 'none';
      showElement(element, 'flex');
      expect(element.style.display).toBe('flex');
    });
  });
});