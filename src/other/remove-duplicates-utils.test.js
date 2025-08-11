import { removeDuplicates } from './remove-duplicates-utils.js';

describe('removeDuplicates', () => {
  test('should remove duplicate numbers from an array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(removeDuplicates(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should remove duplicate strings from an array', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(removeDuplicates(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(removeDuplicates(arr)).toEqual([]);
  });

  test('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3];
    expect(removeDuplicates(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an array with all duplicate elements', () => {
    const arr = [1, 1, 1, 1];
    expect(removeDuplicates(arr)).toEqual([1]);
  });

  test('should handle mixed types including null and undefined', () => {
    const arr = [1, 'a', null, undefined, 1, 'a', null];
    expect(removeDuplicates(arr)).toEqual([1, 'a', null, undefined]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(removeDuplicates(null)).toEqual([]);
    expect(removeDuplicates(undefined)).toEqual([]);
    expect(removeDuplicates('string')).toEqual([]);
    expect(removeDuplicates(123)).toEqual([]);
    expect(removeDuplicates({})).toEqual([]);
  });
});
