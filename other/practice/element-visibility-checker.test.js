import { isElementInViewport } from './element-visibility-checker.js';

describe('isElementInViewport', () => {
  let element;

  beforeEach(() => {
    // Mock the DOM element and its getBoundingClientRect method
    element = {
      getBoundingClientRect: jest.fn(() => ({
        top: 0,
        left: 0,
        bottom: 100,
        right: 100,
        width: 100,
        height: 100,
        x: 0,
        y: 0,
      })),
    };

    // Mock window dimensions for consistent testing
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 500 });
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
  });

  test('should return true if the element is entirely within the viewport', () => {
    expect(isElementInViewport(element)).toBe(true);
  });

  test('should return false if the element is above the viewport', () => {
    element.getBoundingClientRect.mockReturnValue({ top: -10, left: 0, bottom: 90, right: 100 });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if the element is below the viewport', () => {
    element.getBoundingClientRect.mockReturnValue({ top: 501, left: 0, bottom: 601, right: 100 });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if the element is to the left of the viewport', () => {
    element.getBoundingClientRect.mockReturnValue({ top: 0, left: -10, bottom: 100, right: 90 });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if the element is to the right of the viewport', () => {
    element.getBoundingClientRect.mockReturnValue({ top: 0, left: 501, bottom: 100, right: 601 });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return true if the element fills the entire viewport', () => {
    element.getBoundingClientRect.mockReturnValue({ top: 0, left: 0, bottom: 500, right: 500 });
    expect(isElementInViewport(element)).toBe(true);
  });

  test('should return false if element is null or undefined', () => {
    expect(isElementInViewport(null)).toBe(false);
    expect(isElementInViewport(undefined)).toBe(false);
  });
  
  test('should return false if element does not have getBoundingClientRect method', () => {
    expect(isElementInViewport({})).toBe(false);
  });
});
