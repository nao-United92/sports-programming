
import { mapKeys } from './object-map-keys-utils.js';

describe('mapKeys', () => {
  test('should map keys of an object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, (value, key) => key.toUpperCase());
    expect(result).toEqual({ A: 1, B: 2 });
  });

  test('should provide value, key, and object to the iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapKeys(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should handle key collisions by taking the last one', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, () => 'key');
    expect(result).toEqual({ key: 2 });
  });

  test('should return an empty object for null or undefined input', () => {
    expect(mapKeys(null, () => {})).toEqual({});
    expect(mapKeys(undefined, () => {})).toEqual({});
  });
});
