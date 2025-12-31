import { sortByProperty } from './array-sorted-index-by-utils.js';

describe('sortByProperty', () => {
  it('should sort an array of objects by a specified property', () => {
    const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];
    const expected = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(sortByProperty(arr, 'a')).toEqual(expected);
  });

  it('should handle an empty array', () => {
    expect(sortByProperty([], 'a')).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [{ a: 1 }];
    expect(sortByProperty(arr, 'a')).toEqual(arr);
  });

  it('should handle an array that is already sorted', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(sortByProperty(arr, 'a')).toEqual(arr);
  });
});