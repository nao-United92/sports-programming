// src/other/dom-manipulation-utils.test.js

const { addClass } = require('./dom-manipulation-utils');

describe('DOM Manipulation Utils', () => {
  describe('addClass', () => {
    let mockElement;

    beforeEach(() => {
      mockElement = {
        classList: {
          add: jest.fn(),
          contains: jest.fn(),
        },
      };
    });

    test('should add a class to the element', () => {
      addClass(mockElement, 'test-class');
      expect(mockElement.classList.add).toHaveBeenCalledWith('test-class');
    });

    test('should not add a class if element is null or undefined', () => {
      addClass(null, 'test-class');
      expect(mockElement.classList.add).not.toHaveBeenCalled();

      addClass(undefined, 'test-class');
      expect(mockElement.classList.add).not.toHaveBeenCalled();
    });

    test('should not add a class if className is empty', () => {
      addClass(mockElement, '');
      expect(mockElement.classList.add).not.toHaveBeenCalled();
    });

    test('should not add a class if className is not a string', () => {
      addClass(mockElement, null);
      expect(mockElement.classList.add).not.toHaveBeenCalled();

      addClass(mockElement, 123);
      expect(mockElement.classList.add).not.toHaveBeenCalled();
    });

    test('should handle element without classList property gracefully', () => {
      const elementWithoutClassList = {};
      addClass(elementWithoutClassList, 'test-class');
      // No error should be thrown, and nothing should happen
      expect(elementWithoutClassList).toEqual({});
    });
  });
});
