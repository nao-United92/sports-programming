import { isElementInViewport } from './dom-viewport-utils.js';

// Mocking window properties for JSDOM environment
global.window.innerHeight = 800;
global.window.innerWidth = 1200;

describe('isElementInViewport', () => {

  const mockElement = (rect) => ({
    getBoundingClientRect: () => rect,
  });

  it('should return true for an element fully within the viewport', () => {
    const el = mockElement({ top: 100, left: 100, bottom: 300, right: 300 });
    expect(isElementInViewport(el)).toBe(true);
  });

  it('should return false for an element partially outside the top', () => {
    const el = mockElement({ top: -50, left: 100, bottom: 150, right: 300 });
    expect(isElementInViewport(el)).toBe(false);
  });

  it('should return false for an element partially outside the bottom', () => {
    const el = mockElement({ top: 700, left: 100, bottom: 850, right: 300 });
    expect(isElementInViewport(el)).toBe(false);
  });

  it('should return false for an element partially outside the left', () => {
    const el = mockElement({ top: 100, left: -50, bottom: 300, right: 150 });
    expect(isElementInViewport(el)).toBe(false);
  });

  it('should return false for an element partially outside the right', () => {
    const el = mockElement({ top: 100, left: 1100, bottom: 300, right: 1250 });
    expect(isElementInViewport(el)).toBe(false);
  });

  it('should return false for an element fully outside the viewport', () => {
    const el = mockElement({ top: 900, left: 1300, bottom: 1000, right: 1400 });
    expect(isElementInViewport(el)).toBe(false);
  });

  it('should return true for an element exactly at the viewport boundaries', () => {
    const el = mockElement({ top: 0, left: 0, bottom: 800, right: 1200 });
    expect(isElementInViewport(el)).toBe(true);
  });

  it('should return false for invalid or non-element inputs', () => {
    expect(isElementInViewport(null)).toBe(false);
    expect(isElementInViewport(undefined)).toBe(false);
    expect(isElementInViewport({})).toBe(false);
  });
});