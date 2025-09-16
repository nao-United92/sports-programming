const { isVisible, getScrollPosition, scrollTo } = require('./dom-utils.js');

// Mock DOM elements and window
global.window = {
  getComputedStyle: jest.fn(() => ({
    width: '100px',
    height: '100px',
    opacity: '1',
    display: 'block',
    visibility: 'visible',
  })),
  scrollTo: jest.fn(),
  pageXOffset: 0,
  pageYOffset: 0,
};

global.HTMLElement = class HTMLElement {};

describe('DOM Utilities', () => {
  beforeEach(() => {
    window.getComputedStyle.mockClear();
    window.scrollTo.mockClear();
    window.pageXOffset = 0;
    window.pageYOffset = 0;
  });

  describe('isVisible', () => {
    it('should return true if the element is visible', () => {
      const el = {};
      expect(isVisible(el)).toBe(true);
    });

    it('should return false if the element is null', () => {
      expect(isVisible(null)).toBe(false);
    });

    it('should return false if the element has display: none', () => {
      window.getComputedStyle.mockReturnValueOnce({
        width: '100px',
        height: '100px',
        opacity: '1',
        display: 'none',
        visibility: 'visible',
      });
      const el = {};
      expect(isVisible(el)).toBe(false);
    });
  });

  describe('getScrollPosition', () => {
    it('should return the scroll position of the window', () => {
      window.pageXOffset = 100;
      window.pageYOffset = 200;
      expect(getScrollPosition()).toEqual({ x: 100, y: 200 });
    });

    it('should return the scroll position of an element', () => {
      const el = { scrollLeft: 50, scrollTop: 75 };
      expect(getScrollPosition(el)).toEqual({ x: 50, y: 75 });
    });
  });

  describe('scrollTo', () => {
    it('should scroll the window to the specified position', () => {
      scrollTo(window, 100, 200);
      expect(window.scrollTo).toHaveBeenCalledWith(100, 200);
    });

    it('should scroll an element to the specified position', () => {
      const el = { scrollLeft: 0, scrollTop: 0 };
      scrollTo(el, 50, 75);
      expect(el.scrollLeft).toBe(50);
      expect(el.scrollTop).toBe(75);
    });
  });
});
