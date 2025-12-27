import mapKeys from './object-map-keys-utils';

describe('mapKeys', () => {
  it('should map object keys using the provided function', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const mapper = (key) => key.toUpperCase();
    expect(mapKeys(obj, mapper)).toEqual({ A: 1, B: 2, C: 3 });
  });

  it('should pass value as a second argument to the mapper function', () => {
    const obj = { a: 1, b: 2 };
    const mapper = (key, value) => `${key}_${value}`;
    expect(mapKeys(obj, mapper)).toEqual({ a_1: 1, b_2: 2 });
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(mapKeys(null, (key) => key)).toEqual({});
    expect(mapKeys(undefined, (key) => key)).toEqual({});
  });

  it('should return a shallow copy if mapper is not a function', () => {
    const obj = { a: 1, b: 2 };
    expect(mapKeys(obj, null)).toEqual({ a: 1, b: 2 });
    expect(mapKeys(obj, undefined)).toEqual({ a: 1, b: 2 });
    expect(mapKeys(obj, 'string')).toEqual({ a: 1, b: 2 });
    expect(mapKeys(obj, 123)).toEqual({ a: 1, b: 2 });
  });

  it('should handle empty objects', () => {
    expect(mapKeys({}, (key) => key)).toEqual({});
  });

  it('should handle objects with non-string keys (converted to string)', () => {
    const obj = { 1: 'one', 2: 'two' };
    const mapper = (key) => `key_${key}`;
    expect(mapKeys(obj, mapper)).toEqual({ key_1: 'one', key_2: 'two' });
  });

  it('should handle complex mapper functions', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    const mapper = (key) =>
      key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    expect(mapKeys(obj, mapper)).toEqual({ 'first-name': 'John', 'last-name': 'Doe' });
  });
});