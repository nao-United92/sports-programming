const arrayFilterOut = require('./array-filter-out-utils');

describe('arrayFilterOut', () => {
  test('should remove elements that satisfy the predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const predicate = (num) => num % 2 === 0; // Remove even numbers
    expect(arrayFilterOut(arr, predicate)).toEqual([1, 3, 5]);
  });

  test('should return all elements if no element satisfies the predicate', () => {
    const arr = [1, 3, 5];
    const predicate = (num) => num % 2 === 0; // Remove even numbers
    expect(arrayFilterOut(arr, predicate)).toEqual([1, 3, 5]);
  });

  test('should return an empty array if all elements satisfy the predicate', () => {
    const arr = [2, 4, 6];
    const predicate = (num) => num % 2 === 0; // Remove even numbers
    expect(arrayFilterOut(arr, predicate)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    const predicate = (num) => num > 0;
    expect(arrayFilterOut(arr, predicate)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayFilterOut(arr, (num) => num === 2);
    expect(arr).toEqual(originalArr);
  });

  test('should pass element, index, and array to predicate', () => {
    const arr = ['a', 'b', 'c'];
    const mockPredicate = jest.fn((item, index) => index === 1); // Remove element at index 1
    arrayFilterOut(arr, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith('a', 0, arr);
    expect(mockPredicate).toHaveBeenCalledWith('b', 1, arr);
    expect(mockPredicate).toHaveBeenCalledWith('c', 2, arr);
    expect(arrayFilterOut(arr, mockPredicate)).toEqual(['a', 'c']);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayFilterOut(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayFilterOut(123, () => true)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayFilterOut([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayFilterOut([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});
