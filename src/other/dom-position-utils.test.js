import { getElementAbsolutePosition } from './dom-position-utils';

describe('getElementAbsolutePosition', () => {
  let testDiv;

  beforeEach(() => {
    // Create a div element for testing
    testDiv = document.createElement('div');
    document.body.appendChild(testDiv);

    // Mock getBoundingClientRect for consistent testing without actual rendering
    // In a real browser, this would be dynamic
    Object.defineProperty(testDiv, 'getBoundingClientRect', {
      value: () => ({
        left: 100,
        top: 50,
        right: 200,
        bottom: 150,
        width: 100,
        height: 100,
        x: 100,
        y: 50,
      }),
    });

    // Mock scroll positions
    Object.defineProperty(window, 'pageXOffset', { value: 0, writable: true });
    Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true });
    Object.defineProperty(document.documentElement, 'scrollLeft', { value: 0, writable: true });
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 0, writable: true });
  });

  afterEach(() => {
    // Clean up the test div
    document.body.removeChild(testDiv);
  });

  test('should return correct absolute position when no scroll', () => {
    const position = getElementAbsolutePosition(testDiv);
    expect(position).toEqual({ x: 100, y: 50 });
  });

  test('should return correct absolute position with page scroll', () => {
    window.pageXOffset = 10;
    window.pageYOffset = 20;

    const position = getElementAbsolutePosition(testDiv);
    expect(position).toEqual({ x: 110, y: 70 });
  });

  test('should return correct absolute position with documentElement scroll', () => {
    document.documentElement.scrollLeft = 15;
    document.documentElement.scrollTop = 25;

    const position = getElementAbsolutePosition(testDiv);
    expect(position).toEqual({ x: 115, y: 75 });
  });

  test('should prioritize window scroll over documentElement scroll if both are present (browser behavior)', () => {
    window.pageXOffset = 10;
    window.pageYOffset = 20;
    document.documentElement.scrollLeft = 15;
    document.documentElement.scrollTop = 25;

    const position = getElementAbsolutePosition(testDiv);
    // window.pageXOffset/pageYOffset are typically used if available, otherwise document.documentElement
    expect(position).toEqual({ x: 110, y: 70 });
  });

  test('should throw an error if the argument is not an HTMLElement', () => {
    expect(() => getElementAbsolutePosition(null)).toThrow('Invalid argument: element must be an HTMLElement.');
    expect(() => getElementAbsolutePosition(undefined)).toThrow('Invalid argument: element must be an HTMLElement.');
    expect(() => getElementAbsolutePosition({})).toThrow('Invalid argument: element must be an HTMLElement.');
    expect(() => getElementAbsolutePosition('string')).toThrow('Invalid argument: element must be an HTMLElement.');
  });
});
