import { unique } from './array-unique-util';

describe('unique', () => {
  it('should remove duplicate values from an array', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the same array if there are no duplicates', () => {
    expect(unique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array for an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle different data types', () => {
    expect(unique([1, 'a', 'a', 2, 'b', 2])).toEqual([1, 'a', 2, 'b']);
  });

  it('should return an empty array for non-array values', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
    expect(unique({})).toEqual([]);
    expect(unique('')).toEqual([]);
    expect(unique(123)).toEqual([]);
  });
});
