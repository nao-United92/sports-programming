// src/other/dom-visibility-utils.test.js

const { hideElement } = require('./dom-visibility-utils');

describe('DOM Visibility Utils', () => {
  let mockElement;
  let consoleWarnSpy;

  beforeEach(() => {
    mockElement = {
      style: {
        display: '',
      },
    };
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  test('should set the display style of the element to "none"', () => {
    hideElement(mockElement);
    expect(mockElement.style.display).toBe('none');
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  test('should not throw an error if element is null or undefined', () => {
    hideElement(null);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    consoleWarnSpy.mockClear();

    hideElement(undefined);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not throw an error if element has no style property', () => {
    const elementWithoutStyle = {};
    hideElement(elementWithoutStyle);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(elementWithoutStyle).toEqual({}); // Should not modify the element
  });

  test('should overwrite existing display style', () => {
    mockElement.style.display = 'block';
    hideElement(mockElement);
    expect(mockElement.style.display).toBe('none');
  });
});