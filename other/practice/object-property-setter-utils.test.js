const { set } = require('./object-property-setter-utils');

describe('set', () => {
  test('should set a top-level property', () => {
    const obj = {};
    set(obj, 'a', 1);
    expect(obj).toEqual({ a: 1 });
  });

  test('should set a nested property', () => {
    const obj = { b: {} };
    set(obj, 'b.c', 2);
    expect(obj).toEqual({ b: { c: 2 } });
  });

  test('should set an array element by index', () => {
    const obj = { b: { d: ['x'] } };
    set(obj, 'b.d[1]', 'y');
    expect(obj).toEqual({ b: { d: ['x', 'y'] } });
  });

  test('should set a nested property within an array element', () => {
    const obj = { b: { d: ['x', 'y', {}] } };
    set(obj, 'b.d[2].e', 3);
    expect(obj).toEqual({ b: { d: ['x', 'y', { e: 3 }] } });
  });

  test('should create intermediate objects/arrays if they dont exist', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  test('should create intermediate arrays for numeric paths', () => {
    const obj = {};
    set(obj, 'a[0].b', 1);
    expect(obj).toEqual({ a: [{ b: 1 }] });
  });

  test('should overwrite existing values', () => {
    const obj = { a: 1 };
    set(obj, 'a', 2);
    expect(obj).toEqual({ a: 2 });
  });

  test('should handle path as array', () => {
    const obj = {};
    set(obj, ['a', 'b', 'c'], 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  test('should handle path with mixed array and dot notation', () => {
    const obj = {};
    set(obj, ['a', 0, 'b'], 1);
    expect(obj).toEqual({ a: [{ b: 1 }] });
  });

  test('should return the modified object', () => {
    const obj = {};
    const result = set(obj, 'a', 1);
    expect(result).toBe(obj);
  });
});
