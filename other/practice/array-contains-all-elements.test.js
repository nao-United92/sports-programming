import arrayContainsAllElements from './array-contains-all-elements';

describe('arrayContainsAllElements', () => {
  test('should return true if target array contains all elements of subset array', () => {
    expect(arrayContainsAllElements([1, 2, 3, 4, 5], [1, 3, 5])).toBe(true);
  });

  test('should return false if target array does not contain all elements of subset array', () => {
    expect(arrayContainsAllElements([1, 2, 3, 4, 5], [1, 3, 6])).toBe(false);
  });

  test('should return true if subset array is empty', () => {
    expect(arrayContainsAllElements([1, 2, 3], [])).toBe(true);
  });

  test('should return false if target array is empty and subset array is not empty', () => {
    expect(arrayContainsAllElements([], [1])).toBe(false);
  });

  test('should return true if both arrays are empty', () => {
    expect(arrayContainsAllElements([], [])).toBe(true);
  });

  test('should handle duplicate elements in target array', () => {
    expect(arrayContainsAllElements([1, 2, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should handle duplicate elements in subset array', () => {
    expect(arrayContainsAllElements([1, 2, 3], [1, 1, 2])).toBe(true);
  });

  test('should handle different data types', () => {
    expect(arrayContainsAllElements([1, 'a', true], [1, 'a'])).toBe(true);
    expect(arrayContainsAllElements([1, 'a', true], [1, 'b'])).toBe(false);
  });
});
