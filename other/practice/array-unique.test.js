import { unique } from './array-unique.js';

describe('unique', () => {
  it('should remove duplicate elements from an array of numbers', () => {
    const arr = [1, 2, 2, 3, 1, 4];
    const expected = [1, 2, 3, 4];
    expect(unique(arr)).toEqual(expected);
  });

  it('should remove duplicate elements from an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    const expected = ['a', 'b', 'c'];
    expect(unique(arr)).toEqual(expected);
  });

  it('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3];
    expect(unique(arr)).toEqual(arr);
  });

  it('should handle mixed data types', () => {
    const arr = [1, 'a', 1, true, 'a', false];
    const expected = [1, 'a', true, false];
    expect(unique(arr)).toEqual(expected);
  });
});