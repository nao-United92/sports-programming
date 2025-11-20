import { unique, removeDuplicates } from './array-unique-utils.js';

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

describe('removeDuplicates', () => {
  it('should remove duplicate numbers from an array', () => {
    expect(removeDuplicates([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  });

  it('should remove duplicate strings from an array', () => {
    expect(removeDuplicates(['apple', 'banana', 'apple', 'orange'])).toEqual(['apple', 'banana', 'orange']);
  });

  it('should handle an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    expect(removeDuplicates([10, 20, 30])).toEqual([10, 20, 30]);
  });

  it('should handle mixed types including null and undefined', () => {
    expect(removeDuplicates([1, null, 'a', undefined, 1, null, 'b'])).toEqual([1, null, 'a', undefined, 'b']);
  });

  it('should not remove duplicate objects (by reference)', () => {
    const objA = { id: 1 };
    const objB = { id: 2 };
    expect(removeDuplicates([objA, objB, objA])).toEqual([objA, objB]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(removeDuplicates(null)).toEqual([]);
    expect(removeDuplicates(undefined)).toEqual([]);
    expect(removeDuplicates('test')).toEqual([]);
    expect(removeDuplicates(123)).toEqual([]);
  });
});
