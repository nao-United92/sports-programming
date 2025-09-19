import { mapKeys } from './object-map-keys-utils.js';

describe('mapKeys', () => {
  test('should map keys and create a new object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, (value, key) => key.toUpperCase());
    expect(result).toEqual({ A: 1, B: 2 });
  });

  test('iteratee should receive value, key, and the original object', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapKeys(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should handle key collisions by taking the last value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = mapKeys(obj, () => 'key');
    expect(result).toEqual({ key: 3 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1 };
    mapKeys(obj, (v, k) => k.toUpperCase());
    expect(obj).toEqual({ a: 1 });
  });

  test('should return an empty object for an empty object input', () => {
    const result = mapKeys({}, (v, k) => k);
    expect(result).toEqual({});
  });

  test('should handle null or undefined input', () => {
    expect(mapKeys(null, (v, k) => k)).toEqual({});
    expect(mapKeys(undefined, (v, k) => k)).toEqual({});
  });
});