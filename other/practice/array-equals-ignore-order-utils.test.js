const arrayEqualsIgnoreOrder = require('./array-equals-ignore-order-utils');

describe('arrayEqualsIgnoreOrder', () => {
  test('should return true for identical arrays in different orders', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 1, 2];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(true);
  });

  test('should return true for identical arrays in the same order', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(true);
  });

  test('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(false);
  });

  test('should return false for arrays with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(false);
  });

  test('should return true for empty arrays', () => {
    const arr1 = [];
    const arr2 = [];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(true);
  });

  test('should handle arrays with duplicate elements correctly', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 1, 3, 2];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(true);
  });

  test('should return false for arrays with different counts of duplicate elements', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [1, 2, 3, 3];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(false);
  });

  test('should handle arrays with string elements', () => {
    const arr1 = ['b', 'a', 'c'];
    const arr2 = ['a', 'c', 'b'];
    expect(arrayEqualsIgnoreOrder(arr1, arr2)).toBe(true);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayEqualsIgnoreOrder(null, [1, 2])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayEqualsIgnoreOrder(undefined, [1, 2])).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => arrayEqualsIgnoreOrder([1, 2], null)).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayEqualsIgnoreOrder([1, 2], 'string')).toThrow('Expected both arguments to be arrays.');
  });
});
