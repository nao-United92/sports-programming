import { mapKeys } from './map-keys-utils';

describe('mapKeys', () => {
  const obj = { a: 1, b: 2, c: 3 };

  test('should map keys using an iteratee function', () => {
    const result = mapKeys(obj, (value, key) => key + value);
    expect(result).toEqual({ 'a1': 1, 'b2': 2, 'c3': 3 });
  });

  test('should handle key collisions by using the last value', () => {
    const result = mapKeys({ a: 1, b: 2, c: 1 }, (value) => 'key' + value);
    // The key 'key1' is generated for both 'a' and 'c'. The last one wins.
    expect(result).toEqual({ 'key1': 1, 'key2': 2 });
  });

  test('should pass value, key, and object to the iteratee', () => {
    const callback = jest.fn();
    mapKeys({ a: 1 }, callback);
    expect(callback).toHaveBeenCalledWith(1, 'a', { a: 1 });
  });

  test('should return a new object', () => {
    const original = { a: 1 };
    const result = mapKeys(original, (val, key) => key);
    expect(result).not.toBe(original);
    expect(result).toEqual(original);
  });

  test('should return an empty object for null or non-object input', () => {
    expect(mapKeys(null)).toEqual({});
    expect(mapKeys('string')).toEqual({});
  });

  test('should not iterate over inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const result = mapKeys(new Foo(), (val, key) => 'new_' + key);
    expect(result).toEqual({ 'new_a': 1 });
  });
});
