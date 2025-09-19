import { sortedIndex, sortedLastIndex, sortedIndexBy } from './array-sorted-index-utils.js';

describe('sortedIndex', () => {
  test('should return the correct index for a value in the middle', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('should return 0 for a value smaller than all elements', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  test('should return the array length for a value larger than all elements', () => {
    expect(sortedIndex([10, 20, 30], 35)).toBe(3);
  });

  test('should return the index of an existing value', () => {
    // It should return the first possible insertion point
    expect(sortedIndex([10, 20, 30, 40], 30)).toBe(2);
  });

  test('should handle duplicate values correctly', () => {
    expect(sortedIndex([10, 20, 30, 30, 40], 30)).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(sortedIndex([], 5)).toBe(0);
  });

  test('should work with string arrays', () => {
    expect(sortedIndex(['a', 'c', 'e'], 'b')).toBe(1);
  });
});

describe('sortedLastIndex', () => {
  test('should return the correct index for a value in the middle', () => {
    expect(sortedLastIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('should return the correct index for a value smaller than all elements', () => {
    expect(sortedLastIndex([10, 20, 30], 5)).toBe(0);
  });

  test('should return the array length for a value larger than all elements', () => {
    expect(sortedLastIndex([10, 20, 30], 35)).toBe(3);
  });

  test('should return the highest index of an existing value', () => {
    expect(sortedLastIndex([10, 20, 30, 30, 40], 30)).toBe(4); // Should be after the last 30
  });

  test('should return 0 for an empty array', () => {
    expect(sortedLastIndex([], 5)).toBe(0);
  });

  test('should work with string arrays', () => {
    expect(sortedLastIndex(['a', 'c', 'e'], 'c')).toBe(2);
  });
});

describe('sortedIndexBy', () => {
  const objects = [{ 'x': 4 }, { 'x': 5 }];

  test('should return the correct index based on iteratee function', () => {
    expect(sortedIndexBy(objects, { 'x': 4 }, (o) => o.x)).toBe(0);
    expect(sortedIndexBy(objects, { 'x': 6 }, (o) => o.x)).toBe(2);
  });

  test('should return the correct index for a value in the middle', () => {
    const array = [{ 'x': 10 }, { 'x': 20 }, { 'x': 30 }, { 'x': 40 }, { 'x': 50 }];
    expect(sortedIndexBy(array, { 'x': 35 }, (o) => o.x)).toBe(3);
  });

  test('should handle empty array', () => {
    expect(sortedIndexBy([], { 'x': 5 }, (o) => o.x)).toBe(0);
  });

  test('should handle duplicate values correctly', () => {
    const array = [{ 'x': 10 }, { 'x': 20 }, { 'x': 30 }, { 'x': 30 }, { 'x': 40 }];
    expect(sortedIndexBy(array, { 'x': 30 }, (o) => o.x)).toBe(2);
  });
});
