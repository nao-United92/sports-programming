/**
 * @jest-environment jsdom
 */
import { isElementInViewport } from './viewport-utils';

describe('isElementInViewport', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('完全に表示されている要素', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({
        top: 50,
        left: 50,
        bottom: 150,
        right: 150,
      }),
    });
    window.innerWidth = 200;
    window.innerHeight = 200;
    expect(isElementInViewport(element)).toBe(true);
  });

  test('部分的に表示されている要素（partiallyVisible = true）', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({
        top: -50,
        left: 50,
        bottom: 50,
        right: 150,
      }),
    });
    window.innerWidth = 200;
    window.innerHeight = 200;
    expect(isElementInViewport(element, true)).toBe(true);
  });

  test('部分的に表示されている要素（partiallyVisible = false）', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({
        top: -50,
        left: 50,
        bottom: 50,
        right: 150,
      }),
    });
    window.innerWidth = 200;
    window.innerHeight = 200;
    expect(isElementInViewport(element, false)).toBe(false);
  });

  test('表示されていない要素', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({
        top: 250,
        left: 250,
        bottom: 350,
        right: 350,
      }),
    });
    window.innerWidth = 200;
    window.innerHeight = 200;
    expect(isElementInViewport(element)).toBe(false);
  });
});
