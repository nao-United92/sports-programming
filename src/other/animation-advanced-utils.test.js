
import { animateCss, fadeIn, fadeOut } from './animation-advanced-utils';

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
