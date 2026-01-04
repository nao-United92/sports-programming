const { lastN } = require('./array-last-n-elements-utils');

describe('lastN', () => {
  const arr = [1, 2, 3, 4, 5];

  test('should return the last N elements when N is positive', () => {
    expect(lastN(arr, 3)).toEqual([3, 4, 5]);
  });

  test('should return the last element when N is not specified (default to 1)', () => {
    expect(lastN(arr)).toEqual([5]);
  });

  test('should return the entire array when N is greater than array length', () => {
    expect(lastN(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return an empty array when N is 0', () => {
    expect(lastN(arr, 0)).toEqual([]);
  });

  test('should return an empty array when N is negative', () => {
    expect(lastN(arr, -2)).toEqual([]);
  });

  test('should handle an empty array, returning an empty array', () => {
    expect(lastN([], 3)).toEqual([]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => lastN(null, 2)).toThrow(TypeError);
    expect(() => lastN('string', 2)).toThrow(TypeError);
    expect(() => lastN(undefined, 2)).toThrow(TypeError);
    expect(() => lastN({}, 2)).toThrow(TypeError);
  });
});
