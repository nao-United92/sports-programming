const { initialN } = require('./array-initial-n-elements-utils');

describe('initialN', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return the first N elements when N is positive', () => {
    expect(initialN(arr, 3)).toEqual([1, 2, 3]);
  });

  test('should return the first element when N is not specified (default to 1)', () => {
    expect(initialN(arr)).toEqual([1]);
  });

  test('should return the entire array when N is greater than array length', () => {
    expect(initialN(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array when N is 0', () => {
    expect(initialN(arr, 0)).toEqual([]);
  });

  test('should return an empty array when N is negative', () => {
    expect(initialN(arr, -2)).toEqual([]);
  });

  test('should handle an empty array, returning an empty array', () => {
    expect(initialN([], 3)).toEqual([]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => initialN(null, 2)).toThrow(TypeError);
    expect(() => initialN('string', 2)).toThrow(TypeError);
    expect(() => initialN(undefined, 2)).toThrow(TypeError);
    expect(() => initialN({}, 2)).toThrow(TypeError);
  });
});
