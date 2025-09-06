import { zipObject } from './array-zip-object-utils.js';

describe('zipObject', () => {
  test('should create an object from arrays of keys and values', () => {
    const result = zipObject(['a', 'b'], [1, 2]);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should handle unequal length arrays', () => {
    const result = zipObject(['a', 'b', 'c'], [1]);
    expect(result).toEqual({ a: 1, b: undefined, c: undefined });
  });

  test('should handle empty arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });

  test('should handle arrays with null or undefined values', () => {
    const result = zipObject(['a', null], [1, 2]);
    expect(result).toEqual({ a: 1, null: 2 });
  });
});
