const { removeAt } = require('./array-remove-at-index');

describe('removeAt', () => {
  it('should remove the element at a specified index', () => {
    const arr = [1, 2, 3, 4];
    expect(removeAt(arr, 2)).toEqual([1, 2, 4]);
  });

  it('should remove the first element (index 0)', () => {
    const arr = [1, 2, 3];
    expect(removeAt(arr, 0)).toEqual([2, 3]);
  });

  it('should remove the last element', () => {
    const arr = [1, 2, 3];
    expect(removeAt(arr, 2)).toEqual([1, 2]);
  });
  
  it('should return a copy of the original array if index is out of bounds (too high)', () => {
    const arr = [1, 2];
    expect(removeAt(arr, 5)).toEqual([1, 2]);
  });

  it('should return a copy of the original array if index is out of bounds (negative)', () => {
    const arr = [1, 2];
    expect(removeAt(arr, -1)).toEqual([1, 2]);
  });

  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    removeAt(originalArr, 1);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(removeAt([], 0)).toEqual([]);
  });

  it('should throw an error if not given an array as the first argument', () => {
    expect(() => removeAt('not an array', 0)).toThrow(TypeError);
  });
});
