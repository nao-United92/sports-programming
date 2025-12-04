import { getWindowSize, getElementSize } from './dom-size-utils.js';

describe('DOM Size Utilities', () => {
  describe('getWindowSize', () => {
    it('should return the current window dimensions', () => {
      // Mock window dimensions for testing
      Object.defineProperty(window, 'innerWidth', { writable: true, value: 1024 });
      Object.defineProperty(window, 'innerHeight', { writable: true, value: 768 });

      const size = getWindowSize();
      expect(size).toEqual({ width: 1024, height: 768 });
    });

    it('should return { width: 0, height: 0 } if window is undefined', () => {
      const originalWindow = global.window;
      delete global.window;
      const size = getWindowSize();
      expect(size).toEqual({ width: 0, height: 0 });
      global.window = originalWindow; // Restore
    });
  });

  describe('getElementSize', () => {
    let mockElement;

    beforeEach(() => {
      mockElement = document.createElement('div');
      // Mock getBoundingClientRect
      mockElement.getBoundingClientRect = jest.fn(() => ({
        width: 200,
        height: 100,
        x: 0, y: 0, top: 0, right: 0, bottom: 0, left: 0,
      }));
      document.body.appendChild(mockElement);
    });

    afterEach(() => {
      document.body.removeChild(mockElement);
    });

    it('should return the dimensions of the given element', () => {
      const size = getElementSize(mockElement);
      expect(size).toEqual({ width: 200, height: 100 });
      expect(mockElement.getBoundingClientRect).toHaveBeenCalledTimes(1);
    });

    it('should return { width: 0, height: 0 } if element is null/undefined', () => {
      expect(getElementSize(null)).toEqual({ width: 0, height: 0 });
      expect(getElementSize(undefined)).toEqual({ width: 0, height: 0 });
    });

    it('should return { width: 0, height: 0 } if element does not have getBoundingClientRect', () => {
      const invalidElement = {};
      expect(getElementSize(invalidElement)).toEqual({ width: 0, height: 0 });
    });
  });
});
