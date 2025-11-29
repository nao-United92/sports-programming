// src/other/dom-manipulation-utils-advanced.test.js

const { removeClass } = require('./dom-manipulation-utils-advanced');

describe('DOM Manipulation Utils Advanced', () => {
  let mockElement;

  beforeEach(() => {
    mockElement = {
      classList: {
        remove: jest.fn(),
        contains: jest.fn(), // Mock contains for completeness
      },
    };
  });

  test('should remove a class from the element', () => {
    removeClass(mockElement, 'test-class');
    expect(mockElement.classList.remove).toHaveBeenCalledWith('test-class');
  });

  test('should not remove a class if element is null or undefined', () => {
    removeClass(null, 'test-class');
    expect(mockElement.classList.remove).not.toHaveBeenCalled();

    removeClass(undefined, 'test-class');
    expect(mockElement.classList.remove).not.toHaveBeenCalled();
  });

  test('should not remove a class if className is empty', () => {
    removeClass(mockElement, '');
    expect(mockElement.classList.remove).not.toHaveBeenCalled();
  });

  test('should not remove a class if className is not a string', () => {
    removeClass(mockElement, null);
    expect(mockElement.classList.remove).not.toHaveBeenCalled();

    removeClass(mockElement, 123);
    expect(mockElement.classList.remove).not.toHaveBeenCalled();
  });

  test('should handle element without classList property gracefully', () => {
    const elementWithoutClassList = {};
    removeClass(elementWithoutClassList, 'test-class');
    // No error should be thrown, and nothing should happen
    expect(elementWithoutClassList).toEqual({});
  });
});
