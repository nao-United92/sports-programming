import { mapValues } from './map-values-utils';

describe('mapValues', () => {
  const users = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
  };

  test('should map values using an iteratee function', () => {
    const result = mapValues(users, (user) => user.age);
    expect(result).toEqual({ 'fred': 40, 'pebbles': 1 });
  });

  test('should map values using a property string shorthand', () => {
    const result = mapValues(users, 'age');
    expect(result).toEqual({ 'fred': 40, 'pebbles': 1 });
  });

  test('should pass key and object to the iteratee', () => {
    const callback = jest.fn();
    mapValues({ a: 1, b: 2 }, callback);
    expect(callback).toHaveBeenCalledWith(1, 'a', { a: 1, b: 2 });
    expect(callback).toHaveBeenCalledWith(2, 'b', { a: 1, b: 2 });
  });

  test('should return a new object', () => {
    const original = { a: 1 };
    const result = mapValues(original, (val) => val);
    expect(result).not.toBe(original);
    expect(result).toEqual(original);
  });

  test('should return an empty object for null or non-object input', () => {
    expect(mapValues(null)).toEqual({});
    expect(mapValues(undefined)).toEqual({});
    expect(mapValues('string')).toEqual({});
  });

  test('should not iterate over inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const result = mapValues(new Foo(), (val) => val * 2);
    expect(result).toEqual({ a: 2 });
  });
});
