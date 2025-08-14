import { smoothScroll, isElementInViewport, scrollToElement } from './dom-scroll-utils.js';

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

  describe('scrollToElement', () => {
    let element;
    let scrollIntoViewMock;

    beforeEach(() => {
      document.body.innerHTML = '<div id="targetElement"></div>';
      element = document.getElementById('targetElement');
      scrollIntoViewMock = jest.fn();
      element.scrollIntoView = scrollIntoViewMock; // elementのscrollIntoViewをモック
      jest.spyOn(console, 'warn').mockImplementation(() => {}); // console.warnをモック
    });

    afterEach(() => {
      jest.restoreAllMocks(); // モックをリストア
      document.body.innerHTML = '';
    });

    test('should call scrollIntoView on the element with default smooth behavior', () => {
      scrollToElement(element);
      expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test('should call scrollIntoView with custom options', () => {
      const customOptions = { behavior: 'auto', block: 'center' };
      scrollToElement(element, customOptions);
      expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
      expect(scrollIntoViewMock).toHaveBeenCalledWith(customOptions);
    });

    test('should warn and return if a non-HTMLElement is provided', () => {
      scrollToElement(null);
      expect(scrollIntoViewMock).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith('Invalid element provided to scrollToElement.', null);

      scrollToElement(undefined);
      expect(scrollIntoViewMock).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith('Invalid element provided to scrollToElement.', undefined);

      scrollToElement({});
      expect(scrollIntoViewMock).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith('Invalid element provided to scrollToElement.', {});
    });
  });
});
