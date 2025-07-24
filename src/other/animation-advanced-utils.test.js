
import { animateCss, fadeIn, fadeOut, slideToggle, pulse } from './animation-advanced-utils';

describe('animateCss', () => {
  let element;
  let callback;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    callback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('should add and remove animation classes and call callback', () => {
    animateCss(element, 'bounce', callback);

    expect(element.classList.contains('animated')).toBe(true);
    expect(element.classList.contains('bounce')).toBe(true);

    // Simulate animation end event
    element.dispatchEvent(new Event('animationend'));

    expect(element.classList.contains('animated')).toBe(false);
    expect(element.classList.contains('bounce')).toBe(false);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should not animate if element is invalid', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    animateCss(null, 'bounce', callback);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });
});

describe('fadeIn', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.style.opacity = 0;
    element.style.display = 'none';
    document.body.appendChild(element);
    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should fade in an element', () => {
    fadeIn(element, 100);
    expect(element.style.display).toBe('');
    expect(element.style.opacity).toBe('0');

    jest.advanceTimersByTime(50);
    expect(parseFloat(element.style.opacity)).toBeGreaterThan(0);

    jest.advanceTimersByTime(50);
    expect(parseFloat(element.style.opacity)).toBe(1);
  });

  test('should not fade in if element is invalid', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    fadeIn(null, 100);
    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });
});

describe('fadeOut', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.style.opacity = 1;
    element.style.display = '';
    document.body.appendChild(element);
    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should fade out an element', () => {
    fadeOut(element, 100);
    expect(element.style.opacity).toBe('1');

    jest.advanceTimersByTime(50);
    expect(parseFloat(element.style.opacity)).toBeLessThan(1);

    jest.advanceTimersByTime(50);
    expect(parseFloat(element.style.opacity)).toBe(0);
    expect(element.style.display).toBe('none');
  });

  test('should not fade out if element is invalid', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      fadeOut(null, 100);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('slideToggle', () => {
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      element.innerHTML = '<div style="height: 50px;">Content</div>';
      document.body.appendChild(element);
      jest.useFakeTimers();
    });

    afterEach(() => {
      document.body.removeChild(element);
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    test('should slide down if element is hidden', async () => {
      element.style.display = 'none';
      element.style.height = '0px';
      const promise = slideToggle(element, 100);
      jest.advanceTimersByTime(100);
      await promise;
      expect(element.style.display).toBe('block');
      expect(element.style.height).toBe('');
    });

    test('should slide up if element is visible', async () => {
      element.style.display = 'block';
      element.style.height = '50px';
      const promise = slideToggle(element, 100);
      jest.advanceTimersByTime(100);
      await promise;
      expect(element.style.display).toBe('none');
      expect(element.style.height).toBe('');
    });

    test('should resolve immediately if element is invalid', async () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      await expect(slideToggle(null, 100)).resolves.toBeUndefined();
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('pulse', () => {
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      document.body.appendChild(element);
      jest.spyOn(element, 'animate').mockReturnValue({ finish: jest.fn() });
    });

    afterEach(() => {
      document.body.removeChild(element);
      jest.restoreAllMocks();
    });

    test('should apply a pulsing animation', () => {
      pulse(element);
      expect(element.animate).toHaveBeenCalledTimes(1);
      expect(element.animate).toHaveBeenCalledWith([
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' }
      ], {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });

    test('should use custom scale, duration, and iterations', () => {
      pulse(element, 1.5, 1000, 5);
      expect(element.animate).toHaveBeenCalledWith([
        { transform: 'scale(1)' },
        { transform: 'scale(1.5)' },
        { transform: 'scale(1)' }
      ], {
        duration: 1000,
        iterations: 5,
        easing: 'ease-in-out'
      });
    });

    test('should warn if element is invalid', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      pulse(null);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });
});
