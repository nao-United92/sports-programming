import { smoothScroll, isElementInViewport } from './dom-scroll-utils.js';

// Mocking scrollIntoView
if (typeof window.HTMLElement !== 'undefined') {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
}

describe('DOM Scroll Utils', () => {
  beforeEach(() => {
    // Clear mock history before each test
    if (typeof window.HTMLElement !== 'undefined') {
      window.HTMLElement.prototype.scrollIntoView.mockClear();
    }
    // Set up a basic DOM for testing
    document.body.innerHTML = '<div id="test-element" style="height: 100px; width: 100px;"></div>';
  });

  describe('smoothScroll', () => {
    it('should call scrollIntoView on the element', () => {
      smoothScroll('#test-element');
      const element = document.querySelector('#test-element');
      expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('should not throw an error if the element does not exist', () => {
      expect(() => smoothScroll('#non-existent-element')).not.toThrow();
    });
  });

  describe('isElementInViewport', () => {
    it('should return true if the element is in the viewport', () => {
      const element = document.querySelector('#test-element');
      // Mock getBoundingClientRect to simulate being in the viewport
      element.getBoundingClientRect = jest.fn(() => ({
        top: 10,
        left: 10,
        bottom: 110,
        right: 110,
        width: 100,
        height: 100,
      }));
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 500 });
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

      expect(isElementInViewport(element)).toBe(true);
    });

    it('should return false if the element is not in the viewport', () => {
      const element = document.querySelector('#test-element');
      // Mock getBoundingClientRect to simulate being outside the viewport
      element.getBoundingClientRect = jest.fn(() => ({
        top: -200,
        left: -200,
        bottom: -100,
        right: -100,
        width: 100,
        height: 100,
      }));
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 500 });
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

      expect(isElementInViewport(element)).toBe(false);
    });

    it('should return false for a null element', () => {
      expect(isElementInViewport(null)).toBe(false);
    });
  });
});
