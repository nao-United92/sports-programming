import { isBrowser, scrollToTop, getScrollPosition, isInViewport } from './browser-utils.js';

describe('browser-utils', () => {
  it('should check if in a browser environment', () => {
    expect(isBrowser()).toBe(true);
  });

  it('should scroll to the top of an element', () => {
    const el = document.createElement('div');
    el.scrollTo = jest.fn();
    scrollToTop(el);
    expect(el.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should get the scroll position of an element', () => {
    const el = document.createElement('div');
    el.scrollTop = 100;
    el.scrollLeft = 50;
    const pos = getScrollPosition(el);
    expect(pos).toEqual({ scrollTop: 100, scrollLeft: 50 });
  });

  it('should check if an element is in the viewport', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'getBoundingClientRect', {
      value: () => ({
        top: 10,
        left: 10,
        bottom: 100,
        right: 100,
      }),
    });
    expect(isInViewport(el)).toBe(true);
  });
});
