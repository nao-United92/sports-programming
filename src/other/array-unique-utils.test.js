import { unique } from './array-unique-utils.js';

describe('unique', () => {
  it('should remove duplicate numbers from an array', () => {
    expect(unique([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  });

  it('should remove duplicate strings from an array', () => {
    expect(unique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an array with null and undefined values', () => {
    expect(unique([1, null, 2, undefined, 1, null])).toEqual([1, null, 2, undefined]);
  });

  it('should not remove duplicate objects (by reference)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(unique([obj1, obj2, obj1])).toEqual([obj1, obj2]);
  });

  it('should return an empty array if input is not an array', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
    expect(unique('string')).toEqual([]);
    expect(unique(123)).toEqual([]);
  });
});
