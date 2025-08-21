import { mapKeys } from './map-keys-utils.js';

describe('mapKeys', () => {
  const obj = { a: 1, b: 2 };

  test('should map keys of an object', () => {
    const result = mapKeys(obj, (value, key) => key + value);
    expect(result).toEqual({ a1: 1, b2: 2 });
  });

  test('should pass value, key, and object to the iteratee', () => {
    const iteratee = vi.fn();
    mapKeys({ a: 1 }, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', { a: 1 });
  });

  test('should return a new object', () => {
    const result = mapKeys(obj, (value, key) => key);
    expect(result).not.toBe(obj);
    expect(result).toEqual(obj);
  });

  test('should handle an empty object', () => {
    const result = mapKeys({}, (value, key) => key);
    expect(result).toEqual({});
  });

  test('should handle key collisions by taking the last value', () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = mapKeys(data, (value, key) => (value > 1 ? 'over1' : 'under1'));
    // The order of keys is not guaranteed, but in modern JS it's often insertion order.
    // The last value for 'over1' will be from key 'c'.
    expect(result).toEqual({ under1: 1, over1: 3 });
  });
});