const countOccurrences = require('./array-count-occurrences-utils');

describe('countOccurrences', () => {
  test('should count occurrences of a number in an array', () => {
    const arr = [1, 2, 3, 2, 1, 4, 1];
    expect(countOccurrences(arr, 1)).toBe(3);
    expect(countOccurrences(arr, 2)).toBe(2);
    expect(countOccurrences(arr, 4)).toBe(1);
  });

  test('should count occurrences of a string in an array', () => {
    const arr = ['a', 'b', 'a', 'c', 'a', 'b'];
    expect(countOccurrences(arr, 'a')).toBe(3);
    expect(countOccurrences(arr, 'b')).toBe(2);
  });

  test('should return 0 if the value is not found', () => {
    const arr = [1, 2, 3, 4];
    expect(countOccurrences(arr, 5)).toBe(0);
    expect(countOccurrences(arr, 'a')).toBe(0);
  });

  test('should return 0 for an empty array', () => {
    expect(countOccurrences([], 1)).toBe(0);
  });

  test('should handle null and undefined values', () => {
    const arr = [1, null, undefined, 1, null, 2];
    expect(countOccurrences(arr, null)).toBe(2);
    expect(countOccurrences(arr, undefined)).toBe(1);
    expect(countOccurrences(arr, 1)).toBe(2);
  });

  test('should return 0 if input is not an array', () => {
    expect(countOccurrences(null, 1)).toBe(0);
    expect(countOccurrences(undefined, 1)).toBe(0);
    expect(countOccurrences("string", 's')).toBe(0);
    expect(countOccurrences(123, 1)).toBe(0);
    expect(countOccurrences({}, 1)).toBe(0);
  });

  test('should handle objects (by reference)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      b: 2
    };
    const arr = [obj1, obj2, obj1];
    expect(countOccurrences(arr, obj1)).toBe(2);
    expect(countOccurrences(arr, {
      a: 1
    })).toBe(0); // Different reference
  });
});
