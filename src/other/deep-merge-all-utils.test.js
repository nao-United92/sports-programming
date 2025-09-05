import { deepMergeAll } from './deep-merge-all-utils';

describe('deepMergeAll', () => {
  test('should deeply merge multiple objects into a new object', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const obj3 = { f: 5, b: { c: 10, g: 6 } };

    const merged = deepMergeAll([obj1, obj2, obj3]);

    expect(merged).toEqual({
      a: 1,
      b: { c: 10, e: 4, g: 6 },
      d: 3,
      f: 5,
    });
  });

  test('should not mutate original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };

    deepMergeAll([obj1, obj2]);

    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ d: 3, b: { e: 4 } });
  });

  test('should handle arrays by concatenating them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4], b: ['x'] };

    const merged = deepMergeAll([obj1, obj2]);

    expect(merged).toEqual({ a: [1, 2, 3, 4], b: ['x'] });
  });

  test('should handle empty objects and arrays', () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    const obj3 = { b: 2 };

    expect(deepMergeAll([obj1, obj2, obj3])).toEqual({ a: 1, b: 2 });
    expect(deepMergeAll([{}, {}])).toEqual({});
    expect(deepMergeAll([])).toEqual({});
  });

  test('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 2, b: 'world' };

    const merged = deepMergeAll([obj1, obj2]);
    expect(merged).toEqual({ a: 2, b: 'world' });
  });

  test('should handle mixed types, overwriting non-objects with objects', () => {
    const obj1 = { a: 1, b: 'test' };
    const obj2 = { a: { x: 10 }, b: { y: 20 } };

    const merged = deepMergeAll([obj1, obj2]);
    expect(merged).toEqual({ a: { x: 10 }, b: { y: 20 } });
  });

  test('should handle null and undefined values', () => {
    const obj1 = { a: null, b: undefined, c: 1 };
    const obj2 = { a: 10, b: 20, d: null };

    const merged = deepMergeAll([obj1, obj2]);
    expect(merged).toEqual({ a: 10, b: 20, c: 1, d: null });
  });

  test('should handle objects with different nesting levels', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { d: 2 }, e: 3 } };
    const obj3 = { a: { f: 4 } };

    const merged = deepMergeAll([obj1, obj2, obj3]);
    expect(merged).toEqual({ a: { b: { c: 1, d: 2 }, e: 3, f: 4 } });
  });
});
