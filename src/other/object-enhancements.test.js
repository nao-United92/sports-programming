const { deepGet, mapValues, invert } = require('./object-enhancements.js');

describe('Object Enhancements', () => {
  describe('deepGet', () => {
    const obj = { a: { b: { c: 1 } }, d: [{ e: 2 }] };

    test('should get a nested property value', () => {
      expect(deepGet(obj, 'a.b.c')).toBe(1);
    });

    test('should get a nested property value with array path', () => {
      expect(deepGet(obj, ['a', 'b', 'c'])).toBe(1);
    });

    test('should get a nested property value within an array', () => {
      expect(deepGet(obj, 'd[0].e')).toBe(2);
    });

    test('should return default value for non-existent path', () => {
      expect(deepGet(obj, 'a.b.f', 'default')).toBe('default');
    });

    test('should return undefined for non-existent path without default value', () => {
      expect(deepGet(obj, 'x.y.z')).toBeUndefined();
    });
  });

  describe('mapValues', () => {
    const obj = { a: 1, b: 2, c: 3 };

    test('should apply a function to each value', () => {
      const double = (n) => n * 2;
      expect(mapValues(obj, double)).toEqual({ a: 2, b: 4, c: 6 });
    });

    test('should pass key and object to the function', () => {
      const fn = (val, key, o) => `${key}-${val * Object.keys(o).length}`;
      expect(mapValues(obj, fn)).toEqual({ a: 'a-3', b: 'b-6', c: 'c-9' });
    });
  });

  describe('invert', () => {
    const obj = { a: '1', b: '2', c: '3' };

    test('should invert keys and values', () => {
      expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
    });

    test('should handle objects with non-unique values (last one wins)', () => {
      const objWithDuplicates = { a: '1', b: '2', c: '1' };
      expect(invert(objWithDuplicates)).toEqual({ '1': 'c', '2': 'b' });
    });
  });
});
