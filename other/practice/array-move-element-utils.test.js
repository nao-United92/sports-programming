import moveElement from './array-move-element-utils';

describe('moveElement', () => {
  test('should move an element from one position to another within the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(moveElement(array, 0, 2)).toEqual([2, 3, 1, 4, 5]);
    expect(moveElement(array, 3, 1)).toEqual([1, 4, 2, 3, 5]);
    expect(moveElement(array, 4, 0)).toEqual([5, 1, 2, 3, 4]);
  });

  test('should not modify the original array', () => {
    const array = [1, 2, 3];
    moveElement(array, 0, 1);
    expect(array).toEqual([1, 2, 3]);
  });

  test('should handle moving to the same position', () => {
    const array = [1, 2, 3];
    expect(moveElement(array, 1, 1)).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => moveElement(null, 0, 1)).toThrow(TypeError);
    expect(() => moveElement(undefined, 0, 1)).toThrow(TypeError);
    expect(() => moveElement({}, 0, 1)).toThrow(TypeError);
  });

  test('should throw RangeError if fromIndex is out of bounds', () => {
    const array = [1, 2, 3];
    expect(() => moveElement(array, -1, 1)).toThrow(RangeError);
    expect(() => moveElement(array, 3, 1)).toThrow(RangeError);
  });

  test('should throw RangeError if toIndex is out of bounds', () => {
    const array = [1, 2, 3];
    expect(() => moveElement(array, 0, -1)).toThrow(RangeError);
    expect(() => moveElement(array, 0, 3)).toThrow(RangeError);
  });

  test('should work with single-element array', () => {
    const array = [1];
    expect(moveElement(array, 0, 0)).toEqual([1]);
  });

  test('should work with empty array (and throw RangeError for invalid indices)', () => {
    const array = [];
    expect(() => moveElement(array, 0, 0)).toThrow(RangeError);
  });
});