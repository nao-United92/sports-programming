import { areArraysEqual, areArraysEqualUnordered } from './array-comparison-utils';

describe('areArraysEqual', () => {
  test('should return true for identical arrays', () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for arrays with different elements', () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    expect(areArraysEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should return true for empty arrays', () => {
    expect(areArraysEqual([], [])).toBe(true);
  });

  test('should handle arrays with different order', () => {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });

  test('should handle arrays with mixed types', () => {
    expect(areArraysEqual([1, '2', true], [1, '2', true])).toBe(true);
    expect(areArraysEqual([1, '2', true], [1, '2', false])).toBe(false);
  });

  test('should handle arrays with objects (shallow comparison)', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(areArraysEqual([obj1], [obj1])).toBe(true);
    expect(areArraysEqual([obj1], [obj2])).toBe(false); // Different object references
  });

  test('should return false for non-array inputs', () => {
    expect(areArraysEqual(null, [])).toBe(false);
    expect(areArraysEqual([], undefined)).toBe(false);
    expect(areArraysEqual('string', [])).toBe(false);
  });
});

describe('areArraysEqualUnordered', () => {
  test('should return true for identical arrays', () => {
    expect(areArraysEqualUnordered([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return true for arrays with same elements in different order', () => {
    expect(areArraysEqualUnordered([1, 2, 3], [3, 1, 2])).toBe(true);
  });

  test('should return false for arrays with different elements', () => {
    expect(areArraysEqualUnordered([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    expect(areArraysEqualUnordered([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should return true for empty arrays', () => {
    expect(areArraysEqualUnordered([], [])).toBe(true);
  });

  test('should handle arrays with duplicate elements', () => {
    expect(areArraysEqualUnordered([1, 2, 2], [2, 1, 2])).toBe(true);
    expect(areArraysEqualUnordered([1, 2, 2], [1, 1, 2])).toBe(false);
  });

  test('should handle arrays with mixed types', () => {
    expect(areArraysEqualUnordered([1, '2', true], [true, 1, '2'])).toBe(true);
    expect(areArraysEqualUnordered([1, '2', true], [false, 1, '2'])).toBe(false);
  });

  test('should handle arrays with objects (shallow comparison)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { a: 1 }; // Different reference
    expect(areArraysEqualUnordered([obj1, obj2], [obj2, obj1])).toBe(true);
    expect(areArraysEqualUnordered([obj1], [obj3])).toBe(true); // JSON.stringify will make them equal
    expect(areArraysEqualUnordered([obj1, { c: 3 }], [{ c: 3 }, obj1])).toBe(true);
  });

  test('should return false for non-array inputs', () => {
    expect(areArraysEqualUnordered(null, [])).toBe(false);
    expect(areArraysEqualUnordered([], undefined)).toBe(false);
    expect(areArraysEqualUnordered('string', [])).toBe(false);
  });
});
