import { mapKeys } from './object-map-keys-utils.js';

describe('mapKeys', () => {
  it('should map keys of an object', () => {
    const object = { 'a': 1, 'b': 2 };
    const result = mapKeys(object, (value, key) => key + value);
    expect(result).toEqual({ 'a1': 1, 'b2': 2 });
  });

  it('should pass value, key, and object to the iteratee', () => {
    const object = { 'a': 1, 'b': 2 };
    const keys = [];
    const values = [];
    mapKeys(object, (value, key, obj) => {
      values.push(value);
      keys.push(key);
      expect(obj).toBe(object);
    });
    expect(values).toEqual([1, 2]);
    expect(keys).toEqual(['a', 'b']);
  });

  it('should handle an empty object', () => {
    expect(mapKeys({}, (value, key) => key + value)).toEqual({});
  });

  it('should handle null or undefined input', () => {
    expect(mapKeys(null, (value, key) => key + value)).toEqual({});
    expect(mapKeys(undefined, (value, key) => key + value)).toEqual({});
  });

  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  Foo.prototype.c = 3;

  it('should only include own properties', () => {
    const result = mapKeys(new Foo(), (value, key) => key + value);
    expect(result).toEqual({ 'a1': 1, 'b2': 2 });
  });
});
