import { countOccurrences } from './array-count-occurrences-v2-utils.js';

describe('countOccurrences', () => {
  it('should count the occurrences of a value in an array', () => {
    const arr = [1, 2, 2, 3, 4, 2, 5];
    expect(countOccurrences(arr, 2)).toBe(3);
  });

  it('should return 0 if the value is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(countOccurrences(arr, 6)).toBe(0);
  });

  it('should handle an empty array', () => {
    expect(countOccurrences([], 1)).toBe(0);
  });

  it('should handle different data types', () => {
    const arr = ['a', 'b', 'a', 'c', 'a'];
    expect(countOccurrences(arr, 'a')).toBe(3);
  });
});
