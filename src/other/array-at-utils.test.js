import { at } from './array-at-utils.js';

describe('at', () => {
  const array = ['a', 'b', 'c', 'd'];

  test('should get an element with a positive index', () => {
    expect(at(array, 0)).toBe('a');
    expect(at(array, 2)).toBe('c');
  });

  test('should get an element with a negative index', () => {
    expect(at(array, -1)).toBe('d');
    expect(at(array, -3)).toBe('b');
  });

  test('should return undefined for out-of-bounds indices', () => {
    expect(at(array, 10)).toBeUndefined();
    expect(at(array, -10)).toBeUndefined();
  });

  test('should handle non-integer indices by truncating', () => {
    expect(at(array, 2.5)).toBe('c');
    expect(at(array, -1.5)).toBe('d');
  });

  test('should return undefined for an empty array', () => {
    expect(at([], 0)).toBeUndefined();
  });

  test('should return undefined for null or non-array input', () => {
    expect(at(null, 0)).toBeUndefined();
    expect(at(undefined, 1)).toBeUndefined();
    expect(at({}, -1)).toBeUndefined();
  });
});
