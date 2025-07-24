import { scrollIntoViewSmoothly, fadeIn, fadeOut, slideDown, slideUp, animateScrollTo, stopAnimations, animateProperty, stopAnimation } from './animation-utils.js';

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

  describe('animateScrollTo', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should animate scroll to a specific position', async () => {
      const el = document.createElement('div');
      el.scrollTop = 0;
      // Mock scrollHeight and clientHeight for testing scroll behavior
      Object.defineProperty(el, 'scrollHeight', { value: 1000, configurable: true });
      Object.defineProperty(el, 'clientHeight', { value: 500, configurable: true });
      el.style.overflow = 'scroll';
      document.body.appendChild(el);

      const rAFSpy = jest.spyOn(window, 'requestAnimationFrame');
      rAFSpy.mockImplementation(cb => setTimeout(() => cb(performance.now()), 10));

      const promise = animateScrollTo(el, 500, 100);

      jest.advanceTimersByTime(50);
      // Expect scrollTop to be somewhere between 0 and 500
      expect(el.scrollTop).toBeGreaterThan(0);
      expect(el.scrollTop).toBeLessThan(500);

      jest.advanceTimersByTime(50);
      await promise;

      expect(el.scrollTop).toBe(500);
      document.body.removeChild(el);
      rAFSpy.mockRestore();
    });

    it('should resolve immediately if element is null', async () => {
      await expect(animateScrollTo(null, 100, 10)).resolves.toBeUndefined();
    });
  });

  describe('stopAnimations', () => {
    test('should cancel all animations on an element', () => {
      const el = document.createElement('div');
      const mockAnimation1 = { cancel: jest.fn() };
      const mockAnimation2 = { cancel: jest.fn() };

      // Mock getAnimations to return our mock animations
      el.getAnimations = jest.fn(() => [mockAnimation1, mockAnimation2]);

      stopAnimations(el);

      expect(mockAnimation1.cancel).toHaveBeenCalledTimes(1);
      expect(mockAnimation2.cancel).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if element is null', () => {
      stopAnimations(null);
      // No error should be thrown
    });

    test('should not throw error if getAnimations is not available', () => {
      const el = document.createElement('div');
      // Mock getAnimations to return an empty array if not available
      el.getAnimations = undefined; 
      stopAnimations(el);
      // No error should be thrown
    });
  });

  describe('animateProperty', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('should animate a CSS property', async () => {
      const el = document.createElement('div');
      el.style.width = '0px';
      document.body.appendChild(el);

      const rAFSpy = jest.spyOn(window, 'requestAnimationFrame');
      rAFSpy.mockImplementation(cb => setTimeout(() => cb(performance.now()), 10));

      const promise = animateProperty(el, 'width', 0, 100, 'px', 100);

      jest.advanceTimersByTime(50);
      expect(parseFloat(el.style.width)).toBeGreaterThan(0);
      expect(parseFloat(el.style.width)).toBeLessThan(100);

      jest.advanceTimersByTime(50);
      await promise;

      expect(el.style.width).toBe('100px');
      document.body.removeChild(el);
      rAFSpy.mockRestore();
    });

    test('should resolve immediately if element is null', async () => {
      await expect(animateProperty(null, 'width', 0, 100, 'px', 100)).resolves.toBeUndefined();
    });
  });

  describe('stopAnimation', () => {
    test('should cancel all animations on an element', () => {
      const el = document.createElement('div');
      const mockAnimation1 = { cancel: jest.fn() };
      const mockAnimation2 = { cancel: jest.fn() };

      el.getAnimations = jest.fn(() => [mockAnimation1, mockAnimation2]);

      stopAnimation(el);

      expect(mockAnimation1.cancel).toHaveBeenCalledTimes(1);
      expect(mockAnimation2.cancel).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if element is null', () => {
      stopAnimation(null);
    });

    test('should not throw error if getAnimations is not available', () => {
      const el = document.createElement('div');
      el.getAnimations = undefined;
      stopAnimation(el);
    });
  });
});
