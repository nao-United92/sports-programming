import { nthElement } from './array-nth-element-utils.js';

describe('nthElement', () => {
  test('should return the nth element of an array', () => {
    expect(nthElement(['a', 'b', 'c'], 1)).toBe('b');
  });

  test('should work with negative indices', () => {
    expect(nthElement(['a', 'b', 'c'], -1)).toBe('c');
  });

  test('should return the first element by default', () => {
    expect(nthElement(['a', 'b', 'c'])).toBe('a');
  });

  test('should return undefined for out-of-bounds indices', () => {
    expect(nthElement(['a', 'b', 'c'], 5)).toBeUndefined();
  });

  test('should return undefined for an empty array', () => {
    expect(nthElement([])).toBeUndefined();
  });
});
