import { isInViewport, isElementPartiallyInViewport, getScrollPosition } from './dom-viewport-utils';

describe('isInViewport', () => {
  let element;

  beforeEach(() => {
    // 各テストの前に新しいDOM要素を作成し、bodyに追加
    document.body.innerHTML = '<div id="testElement"></div>';
    element = document.getElementById('testElement');

    // window.innerWidth/Height をモック
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1000 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 800 });

    // document.documentElement.clientWidth/Height をモック
    Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, configurable: true, value: 1000 });
    Object.defineProperty(document.documentElement, 'clientHeight', { writable: true, configurable: true, value: 800 });
  });

  afterEach(() => {
    // クリーンアップ
    document.body.innerHTML = '';
  });

  test('should return true if element is fully within viewport', () => {
    // Mock getBoundingClientRect to simulate element within viewport
    element.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 100,
      bottom: 200,
      right: 200,
      width: 100,
      height: 100,
      x: 100,
      y: 100,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(true);
  });

  test('should return false if element is partially outside viewport (top)', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: -50,
      left: 100,
      bottom: 150,
      right: 200,
      width: 100,
      height: 100,
      x: -50,
      y: 100,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false if element is partially outside viewport (left)', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: -50,
      bottom: 200,
      right: 150,
      width: 100,
      height: 100,
      x: 100,
      y: -50,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false if element is partially outside viewport (bottom)', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: 750,
      left: 100,
      bottom: 850, // 850 > 800 (innerHeight)
      right: 200,
      width: 100,
      height: 100,
      x: 750,
      y: 100,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false if element is partially outside viewport (right)', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 950,
      bottom: 200,
      right: 1050, // 1050 > 1000 (innerWidth)
      width: 100,
      height: 100,
      x: 100,
      y: 950,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false if element is completely outside viewport', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: -200,
      left: -200,
      bottom: -100,
      right: -100,
      width: 100,
      height: 100,
      x: -200,
      y: -200,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(false);
  });

  test('should return false for non-HTMLElement input', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(isInViewport(null)).toBe(false);
    expect(isInViewport(undefined)).toBe(false);
    expect(isInViewport({})).toBe(false);
    consoleWarnSpy.mockRestore();
  });

  test('should return true if element is exactly at viewport edges', () => {
    element.getBoundingClientRect = jest.fn(() => ({
      top: 0,
      left: 0,
      bottom: 800,
      right: 1000,
      width: 1000,
      height: 800,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }));
    expect(isInViewport(element)).toBe(true);
  });
});

describe('isElementPartiallyInViewport', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement"></div>';
    element = document.getElementById('testElement');
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1000 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 800 });
  });

  test('should return true if element is partially visible from the top', () => {
    element.getBoundingClientRect = jest.fn(() => ({ top: -50, bottom: 50, left: 100, right: 200 }));
    expect(isElementPartiallyInViewport(element)).toBe(true);
  });

  test('should return true if element is partially visible from the bottom', () => {
    element.getBoundingClientRect = jest.fn(() => ({ top: 750, bottom: 850, left: 100, right: 200 }));
    expect(isElementPartiallyInViewport(element)).toBe(true);
  });

  test('should return false if element is completely outside the viewport', () => {
    element.getBoundingClientRect = jest.fn(() => ({ top: -100, bottom: -10, left: 100, right: 200 }));
    expect(isElementPartiallyInViewport(element)).toBe(false);
  });
});

describe('getScrollPosition', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'pageXOffset', { writable: true, configurable: true, value: 100 });
    Object.defineProperty(window, 'pageYOffset', { writable: true, configurable: true, value: 200 });
  });

  test('should return the correct scroll position', () => {
    expect(getScrollPosition()).toEqual({ x: 100, y: 200 });
  });
});
