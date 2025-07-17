import { isElementVisible } from './visibility-utils.js';

describe('isElementVisible', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  // Mock getBoundingClientRect
  const mockBoundingClientRect = (rect) => {
    el.getBoundingClientRect = () => rect;
  };

  test('should return false for non-element', () => {
    expect(isElementVisible(null)).toBe(false);
    expect(isElementVisible(undefined)).toBe(false);
    expect(isElementVisible(document.createTextNode('text'))).toBe(false);
  });

  test('should return true for fully visible element', () => {
    mockBoundingClientRect({ top: 50, left: 50, bottom: 150, right: 150 });
    Object.defineProperty(window, 'innerHeight', { value: 500, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    expect(isElementVisible(el)).toBe(true);
  });

  test('should return false for element outside the viewport', () => {
    mockBoundingClientRect({ top: -200, left: -200, bottom: -100, right: -100 });
    expect(isElementVisible(el)).toBe(false);
  });

  test('should return true for partially visible element when partiallyVisible is true', () => {
    mockBoundingClientRect({ top: -50, left: -50, bottom: 50, right: 50 });
    expect(isElementVisible(el, true)).toBe(true);
  });

  test('should return false for partially visible element when partiallyVisible is false', () => {
    mockBoundingClientRect({ top: -50, left: -50, bottom: 50, right: 50 });
    expect(isElementVisible(el, false)).toBe(false);
  });
});
