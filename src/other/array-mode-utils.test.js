import { mode } from './array-mode-utils';

describe('mode', () => {
  test('should return the single mode for an array of numbers', () => {
    expect(mode([1, 2, 2, 3, 4, 2])).toEqual([2]);
  });

  test('should return multiple modes if they exist', () => {
    expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
  });

  test('should return all unique elements if all appear once', () => {
    expect(mode([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work with strings', () => {
    expect(mode(['apple', 'banana', 'apple', 'cherry'])).toEqual(['apple']);
  });

  test('should return multiple string modes', () => {
    expect(mode(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b']);
  });

  test('should return an empty array for an empty input array', () => {
    expect(mode([])).toEqual([]);
  });

  test('should return an empty array for null or undefined input', () => {
    expect(mode(null)).toEqual([]);
    expect(mode(undefined)).toEqual([]);
  });

  test('should handle mixed data types', () => {
    expect(mode([1, 'a', 1, 'b', 'a', 1, 'a'])).toEqual([1, 'a']);
  });

  test('should handle an array with a single element', () => {
    expect(mode([5])).toEqual([5]);
  });
});
