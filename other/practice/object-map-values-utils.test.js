const mapValues = require('./object-map-values-utils').default;

describe('mapValues', () => {
  test('should map values of an object using the iteratee function', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const square = (n) => n * n;
    expect(mapValues(obj, square)).toEqual({ a: 1, b: 4, c: 9 });
  });

  test('should pass value, key, and object to the iteratee', () => {
    const obj = { a: 1, b: 2 };
    const iteratee = (value, key, originalObject) =>
      `${key}:${value * 2}:${originalObject.a}`;
    expect(mapValues(obj, iteratee)).toEqual({ a: 'a:2:1', b: 'b:4:1' });
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    const iteratee = (n) => n * 2;
    expect(mapValues(obj, iteratee)).toEqual({});
  });

  test('should handle objects with different data types as values', () => {
    const obj = { a: 1, b: 'hello', c: true };
    const iteratee = (value) => {
      if (typeof value === 'number') return value + 1;
      if (typeof value === 'string') return value.toUpperCase();
      if (typeof value === 'boolean') return !value;
      return value;
    };
    expect(mapValues(obj, iteratee)).toEqual({
      a: 2,
      b: 'HELLO',
      c: false,
    });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    const square = (n) => n * n;
    mapValues(obj, square);
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});