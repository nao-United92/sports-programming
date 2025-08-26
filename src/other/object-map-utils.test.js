import { mapValues, mapKeys } from './object-map-utils.js';

describe('mapValues', () => {
  it('should map values of an object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });

  it('should pass key and object to the iteratee', () => {
    const obj = { a: 1, b: 2 };
    const keys = [];
    mapValues(obj, (value, key, o) => {
      keys.push(key);
      expect(o).toBe(obj);
    });
    expect(keys).toEqual(['a', 'b']);
  });
});

describe('mapKeys', () => {
  it('should map keys of an object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, (value, key) => key + value);
    expect(result).toEqual({ a1: 1, b2: 2 });
  });

  it('should handle key collisions by overwriting', () => {
    const obj = { a: 1, b: 1 };
    const result = mapKeys(obj, (value) => String(value));
    expect(result).toEqual({ '1': 1 });
  });
});
