import { sortedIndex } from './array-sortedIndex-utils';

describe('sortedIndex', () => {
  test('should return the lowest index at which value should be inserted', () => {
    expect(sortedIndex([30, 50], 40)).toBe(1);
  });

  test('should return 0 for values smaller than the first element', () => {
    expect(sortedIndex([30, 50], 10)).toBe(0);
  });

  test('should return array length for values larger than the last element', () => {
    expect(sortedIndex([30, 50], 60)).toBe(2);
  });

  test('should handle duplicates by returning the first possible insertion point', () => {
    expect(sortedIndex([30, 40, 50], 40)).toBe(1);
    expect(sortedIndex([30, 40, 40, 50], 40)).toBe(1);
  });

  test('should handle empty array', () => {
    expect(sortedIndex([], 10)).toBe(0);
  });

  test('should handle array with single element', () => {
    expect(sortedIndex([50], 40)).toBe(0);
    expect(sortedIndex([50], 60)).toBe(1);
    expect(sortedIndex([50], 50)).toBe(0);
  });

  test('should work with different data types (assuming comparable)', () => {
    expect(sortedIndex(['a', 'c'], 'b')).toBe(1);
    expect(sortedIndex(['apple', 'banana', 'orange'], 'grape')).toBe(2);
  });
});
