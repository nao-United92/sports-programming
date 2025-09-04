import { sortedIndex, sortedIndexBy } from './sorted-index-utils.js';

describe('sortedIndex', () => {
  test('should return the correct index for a value in a sorted array', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 30)).toBe(2);
  });

  test('should return the insertion point for a value not in the array', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('should return 0 for a value smaller than all elements', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  test('should return the array length for a value larger than all elements', () => {
    expect(sortedIndex([10, 20, 30], 35)).toBe(3);
  });

  test('should handle duplicate values correctly, returning the first possible index', () => {
    expect(sortedIndex([10, 20, 30, 30, 40], 30)).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(sortedIndex([], 5)).toBe(0);
  });

  test('should handle string arrays', () => {
    expect(sortedIndex(['a', 'c', 'e'], 'b')).toBe(1);
    expect(sortedIndex(['a', 'c', 'e'], 'f')).toBe(3);
  });

  test('should handle a null or undefined array', () => {
    expect(sortedIndex(null, 5)).toBe(0);
    expect(sortedIndex(undefined, 5)).toBe(0);
  });
});

describe('sortedIndexBy', () => {
  test('should work with an iteratee function on objects', () => {
    const objects = [{ 'x': 4 }, { 'x': 5 }];
    const iteratee = o => o.x;
    expect(sortedIndexBy(objects, { 'x': 4 }, iteratee)).toBe(0);
    expect(sortedIndexBy(objects, { 'x': 5 }, iteratee)).toBe(1);
    expect(sortedIndexBy(objects, { 'x': 6 }, iteratee)).toBe(2);
  });

  test('should return correct index when value is not present', () => {
    const objects = [{ v: 10 }, { v: 20 }];
    expect(sortedIndexBy(objects, { v: 15 }, o => o.v)).toBe(1);
  });

  test('should handle duplicate values correctly', () => {
    const objects = [{ v: 10 }, { v: 20 }, { v: 20 }, { v: 30 }];
    expect(sortedIndexBy(objects, { v: 20 }, o => o.v)).toBe(1);
  });

  test('should handle a null or undefined array', () => {
    const iteratee = o => o.x;
    expect(sortedIndexBy(null, { 'x': 4 }, iteratee)).toBe(0);
    expect(sortedIndexBy(undefined, { 'x': 4 }, iteratee)).toBe(0);
  });
});