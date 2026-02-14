const { arrayEvery } = require('./array-every');

describe('arrayEvery', () => {
  test('should return true if all elements satisfy the predicate', () => {
    const arr = [2, 4, 6, 8];
    expect(arrayEvery(arr, (n) => n % 2 === 0)).toBe(true);
  });

  test('should return false if any element does not satisfy the predicate', () => {
    const arr = [2, 4, 7, 8];
    expect(arrayEvery(arr, (n) => n % 2 === 0)).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(arrayEvery([], (n) => n > 0)).toBe(true);
  });

  test('should return true for an array with one element that satisfies the predicate', () => {
    expect(arrayEvery([5], (n) => n > 0)).toBe(true);
  });

  test('should return false for an array with one element that does not satisfy the predicate', () => {
    expect(arrayEvery([-5], (n) => n > 0)).toBe(false);
  });

  test('should pass index and array as arguments to predicate', () => {
    const arr = [10, 20, 30];
    const predicate = jest.fn((val, idx, array) => {
      expect(array).toBe(arr);
      return val === (idx + 1) * 10;
    });
    expect(arrayEvery(arr, predicate)).toBe(true);
    expect(predicate).toHaveBeenCalledTimes(3);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayEvery('not an array', () => true)).toThrow(TypeError);
    expect(() => arrayEvery(null, () => true)).toThrow(TypeError);
    expect(() => arrayEvery(undefined, () => true)).toThrow(TypeError);
    expect(() => arrayEvery({}, () => true)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    expect(() => arrayEvery([1, 2, 3], 'not a function')).toThrow(TypeError);
    expect(() => arrayEvery([1, 2, 3], null)).toThrow(TypeError);
    expect(() => arrayEvery([1, 2, 3], undefined)).toThrow(TypeError);
    expect(() => arrayEvery([1, 2, 3], 123)).toThrow(TypeError);
  });
});
