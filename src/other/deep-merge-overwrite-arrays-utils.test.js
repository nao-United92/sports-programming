import { deepMergeOverwriteArrays } from './deep-merge-overwrite-arrays-utils.js';

describe('deepMergeOverwriteArrays', () => {
  test('should deeply merge objects, overwriting arrays', () => {
    const obj1 = {
      a: 1,
      b: { c: 2, d: [1, 2] },
      e: [3, 4],
      f: 'hello',
    };

    const obj2 = {
      a: 10,
      b: { c: 20, g: 30, d: [5, 6] },
      e: [7, 8],
      h: 'world',
    };

    const obj3 = {
      b: { c: 200, h: 300 },
      e: [9],
    };

    const merged = deepMergeOverwriteArrays([obj1, obj2, obj3]);

    expect(merged).toEqual({
      a: 10,
      b: { c: 200, d: [5, 6], g: 30, h: 300 },
      e: [9],
      f: 'hello',
      h: 'world',
    });
  });

  test('should handle empty objects', () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    const merged = deepMergeOverwriteArrays([obj1, obj2]);
    expect(merged).toEqual({ a: 1 });
  });

  test('should handle non-object values in the input array', () => {
    const obj1 = { a: 1 };
    const merged = deepMergeOverwriteArrays([obj1, null, undefined, { b: 2 }]);
    expect(merged).toEqual({ a: 1, b: 2 });
  });

  test('should not mutate original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const originalObj1 = JSON.parse(JSON.stringify(obj1));
    const originalObj2 = JSON.parse(JSON.stringify(obj2));

    deepMergeOverwriteArrays([obj1, obj2]);

    expect(obj1).toEqual(originalObj1);
    expect(obj2).toEqual(originalObj2);
  });

  test('should correctly merge nested objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const merged = deepMergeOverwriteArrays([obj1, obj2]);
    expect(merged).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should overwrite properties with non-object values', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 'new', b: 3 };
    const merged = deepMergeOverwriteArrays([obj1, obj2]);
    expect(merged).toEqual({ a: 'new', b: 3 });
  });

  test('should handle arrays at the root level', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const merged = deepMergeOverwriteArrays([{
      key: arr1
    }, {
      key: arr2
    }]);
    expect(merged).toEqual({
      key: [3, 4]
    });
  });
});
