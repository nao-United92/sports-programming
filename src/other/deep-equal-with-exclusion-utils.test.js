
import { deepEqualWithExclusion } from './deep-equal-with-exclusion-utils.js';

describe('deepEqualWithExclusion', () => {
  it('should return true for deeply equal objects with no exclusions', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqualWithExclusion(obj1, obj2)).toBe(true);
  });

  it('should return false for deeply unequal objects with no exclusions', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(deepEqualWithExclusion(obj1, obj2)).toBe(false);
  });

  it('should return true when excluded keys make objects equal', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 99, c: 3 };
    expect(deepEqualWithExclusion(obj1, obj2, ['b'])).toBe(true);
  });

  it('should return false when excluded keys do not make objects equal', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 5, b: 99, c: 3 };
    expect(deepEqualWithExclusion(obj1, obj2, ['b'])).toBe(false);
  });

  it('should handle multiple excluded keys', () => {
    const obj1 = { a: 1, b: 2, c: 3, d: 4 };
    const obj2 = { a: 1, b: 99, c: 100, d: 4 };
    expect(deepEqualWithExclusion(obj1, obj2, ['b', 'c'])).toBe(true);
  });

  it('should handle non-existent keys in the exclusion list', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(deepEqualWithExclusion(obj1, obj2, ['x', 'y'])).toBe(false);
  });

  it('should handle empty objects', () => {
    expect(deepEqualWithExclusion({}, {})).toBe(true);
    expect(deepEqualWithExclusion({}, {}, ['a'])).toBe(true);
  });

  it('should handle null or undefined objects', () => {
    expect(deepEqualWithExclusion(null, null)).toBe(true);
    expect(deepEqualWithExclusion(undefined, undefined)).toBe(true);
    expect(deepEqualWithExclusion(null, {})).toBe(false);
  });

  it('should handle arrays of primitive values', () => {
    expect(deepEqualWithExclusion([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqualWithExclusion([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it('should handle arrays of objects with exclusions', () => {
    const arr1 = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
    const arr2 = [{ id: 1, value: 'a' }, { id: 2, value: 'c' }];
    const arr3 = [{ id: 1, value: 'a' }, { id: 3, value: 'b' }];

    expect(deepEqualWithExclusion(arr1, arr2, ['value'])).toBe(true);
    expect(deepEqualWithExclusion(arr1, arr3, ['value'])).toBe(false);
  });

  it('should not modify the original objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    const originalObj1 = { ...obj1 };
    const originalObj2 = { ...obj2 };

    deepEqualWithExclusion(obj1, obj2, ['b']);

    expect(obj1).toEqual(originalObj1);
    expect(obj2).toEqual(originalObj2);
  });
});
