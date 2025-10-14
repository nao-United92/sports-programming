const { isInViewport } = require('./dom-is-in-viewport-utils.js');

/**
 * @jest-environment jsdom
 */
describe('isInViewport', () => {
  let element;

  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 });

    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  // Helper to mock getBoundingClientRect
  const mockBoundingRect = (rect) => {
    element.getBoundingClientRect = jest.fn(() => rect);
  };

  test('should return true for an element fully in the viewport', () => {
    mockBoundingRect({ top: 100, left: 100, bottom: 200, right: 200, width: 100, height: 100 });
    expect(isInViewport(element)).toBe(true);
  });

  test('should return false for an element outside the viewport (top)', () => {
    mockBoundingRect({ top: -200, left: 100, bottom: -100, right: 200 });
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false for an element outside the viewport (bottom)', () => {
    mockBoundingRect({ top: 800, left: 100, bottom: 900, right: 200 });
    expect(isInViewport(element)).toBe(false);
  });

  describe('with partiallyVisible = true', () => {
    test('should return true for a partially visible element (top)', () => {
      mockBoundingRect({ top: -50, left: 100, bottom: 50, right: 200 });
      expect(isInViewport(element, true)).toBe(true);
    });

    test('should return true for a partially visible element (bottom)', () => {
      mockBoundingRect({ top: 700, left: 100, bottom: 800, right: 200 });
      expect(isInViewport(element, true)).toBe(true);
    });

    test('should return false for an element completely outside the viewport', () => {
      mockBoundingRect({ top: -200, left: 100, bottom: -100, right: 200 });
      expect(isInViewport(element, true)).toBe(false);
    });
  });
});
