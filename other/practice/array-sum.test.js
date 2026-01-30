// other/practice/array-sum.test.js
const arraySum = require('./array-sum');

describe('arraySum', () => {
  test('should return the sum of positive numbers', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return the sum of negative numbers', () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
  });

  test('should return the sum of mixed positive and negative numbers', () => {
    expect(arraySum([-1, 2, -3, 4])).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(arraySum([])).toBe(0);
  });

  test('should return the number itself for an array with a single number', () => {
    expect(arraySum([10])).toBe(10);
  });

  test('should return 0 for an array containing non-numeric values', () => {
    expect(arraySum([1, 2, 'a', 4])).toBe(0);
    expect(arraySum([1, 2, null, 4])).toBe(0); // null is not typeof number, so this should return 0
    expect(arraySum([1, 2, undefined, 4])).toBe(0);
    expect(arraySum([1, 2, {}, 4])).toBe(0);
  });

  test('should handle arrays with zero', () => {
    expect(arraySum([0, 0, 0])).toBe(0);
    expect(arraySum([-5, 0, 5])).toBe(0);
  });

  test('should return 0 for non-array inputs', () => {
    expect(arraySum(null)).toBe(0);
    expect(arraySum(undefined)).toBe(0);
    expect(arraySum(123)).toBe(0);
    expect(arraySum('string')).toBe(0);
    expect(arraySum({})).toBe(0);
  });
});
