import { mapValues } from './object-map-values-utils.js';

describe('mapValues', () => {
  it('should map values of an object', () => {
    const object = { 'a': 1, 'b': 2 };
    const result = mapValues(object, (value) => value * 2);
    expect(result).toEqual({ 'a': 2, 'b': 4 });
  });

  it('should pass key and object to the iteratee', () => {
    const object = { 'a': 1, 'b': 2 };
    const keys = [];
    mapValues(object, (value, key, obj) => {
      keys.push(key);
      expect(obj).toBe(object);
    });
    expect(keys).toEqual(['a', 'b']);
  });

  it('should handle an empty object', () => {
    expect(mapValues({}, (value) => value * 2)).toEqual({});
  });

  it('should handle null or undefined input', () => {
    expect(mapValues(null, (value) => value * 2)).toEqual({});
    expect(mapValues(undefined, (value) => value * 2)).toEqual({});
  });

  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  Foo.prototype.c = 3;

  it('should only include own properties', () => {
    const result = mapValues(new Foo(), (value) => value * 2);
    expect(result).toEqual({ 'a': 2, 'b': 4 });
  });
});