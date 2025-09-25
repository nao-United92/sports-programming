const { deepMerge } = require('./deep-merge-utils.js');

describe('deepMerge', () => {
  test('should merge objects recursively', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    expect(deepMerge(target, source)).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should overwrite non-object properties', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should handle more than two objects', () => {
    const target = { a: { b: 1 } };
    const source1 = { a: { c: 2 } };
    const source2 = { a: { d: 3 }, c: 5 };
    expect(deepMerge(target, source1, source2)).toEqual({ a: { b: 1, c: 2, d: 3 }, c: 5 });
  });

  test('should not merge arrays, but overwrite them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    expect(deepMerge(target, source)).toEqual({ a: [3, 4] });
  });

  test('should handle empty objects', () => {
    const target = { a: 1 };
    const source = {};
    expect(deepMerge(target, source)).toEqual({ a: 1 });
    const target2 = {};
    const source2 = { a: 1 };
    expect(deepMerge(target2, source2)).toEqual({ a: 1 });
  });

  test('should handle complex nested objects', () => {
    const target = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
      f: [1, 2],
    };
    const source = {
      b: {
        d: {
          g: 4,
        },
        h: 5,
      },
      f: [3],
      i: 6,
    };
    const expected = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          g: 4,
        },
        h: 5,
      },
      f: [3],
      i: 6,
    };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  test('should not mutate the source objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    const sourceClone = JSON.parse(JSON.stringify(source));
    deepMerge(target, source);
    expect(source).toEqual(sourceClone);
  });
});
