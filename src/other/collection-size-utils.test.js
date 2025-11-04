
import { size } from './collection-size-utils.js';

describe('size', () => {
  test('should return the length of an array', () => {
    expect(size([1, 2, 3])).toBe(3);
  });

  test('should return the number of own enumerable string keyed properties of an object', () => {
    expect(size({ 'a': 1, 'b': 2 })).toBe(2);
  });

  test('should return the length of a string', () => {
    expect(size('hello')).toBe(5);
  });

  test('should return 0 for an empty array', () => {
    expect(size([])).toBe(0);
  });

  test('should return 0 for an empty object', () => {
    expect(size({})).toBe(0);
  });

  test('should return 0 for null or undefined input', () => {
    expect(size(null)).toBe(0);
    expect(size(undefined)).toBe(0);
  });

  test('should return 0 for other primitive types', () => {
    expect(size(123)).toBe(0);
    expect(size(true)).toBe(0);
  });
});
