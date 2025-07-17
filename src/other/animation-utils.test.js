import { scrollIntoViewSmoothly, fadeIn, fadeOut, slideDown, slideUp } from './animation-utils.js';

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

  describe('slideDown', () => {
    it('should slide down an element', async () => {
      const el = document.createElement('div');
      el.style.display = 'none';
      el.style.height = '0px';
      el.innerHTML = '<div style="height: 50px;">Content</div>'; // Simulate content for scrollHeight
      document.body.appendChild(el);

      await slideDown(el, 10);

      expect(el.style.display).toBe('block');
      expect(el.style.height).toBe(''); // Should remove inline height
      expect(el.style.overflow).toBe('');
      document.body.removeChild(el);
    });

    it('should resolve immediately if element is null', async () => {
      await expect(slideDown(null, 10)).resolves.toBeUndefined();
    });
  });

  describe('slideUp', () => {
    it('should slide up an element', async () => {
      const el = document.createElement('div');
      el.style.display = 'block';
      el.style.height = '50px';
      el.innerHTML = '<div style="height: 50px;">Content</div>';
      document.body.appendChild(el);

      await slideUp(el, 10);

      expect(el.style.display).toBe('none');
      expect(el.style.height).toBe('');
      expect(el.style.overflow).toBe('');
      document.body.removeChild(el);
    });

    it('should resolve immediately if element is null', async () => {
      await expect(slideUp(null, 10)).resolves.toBeUndefined();
    });
  });
});
