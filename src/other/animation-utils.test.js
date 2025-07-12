import { scrollIntoViewSmoothly, fadeIn, fadeOut } from './animation-utils.js';

describe('animation-utils', () => {
  it('should scroll an element into view', () => {
    const el = document.createElement('div');
    el.scrollIntoView = jest.fn();
    scrollIntoViewSmoothly(el);
    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('should fade in an element', async () => {
    const el = document.createElement('div');
    await fadeIn(el, 10);
    expect(el.style.opacity).toBe('1');
  });

  it('should fade out an element', async () => {
    const el = document.createElement('div');
    await fadeOut(el, 10);
    expect(el.style.opacity).toBe('0');
    expect(el.style.display).toBe('none');
  });
});
