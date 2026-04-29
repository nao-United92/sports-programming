import { objectMapToArray } from './object-map-to-array';

describe('objectMapToArray', () => {
  test('should map object to array', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = objectMapToArray(obj, (v, k) => k + v);
    expect(result).toEqual(['a1', 'b2', 'c3']);
  });

  test('should handle empty objects', () => {
    expect(objectMapToArray({}, (v) => v)).toEqual([]);
  });
});
