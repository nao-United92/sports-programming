import { unique } from './array-unique-utils.js';

describe('unique', () => {
  it('should remove duplicate values from an array', () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('should return the same array if no duplicates exist', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle an array with all duplicate values', () => {
    expect(unique([1, 1, 1, 1])).toEqual([1]);
  });
});