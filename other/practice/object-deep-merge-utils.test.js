const { deepMerge } = require('./object-deep-merge-utils');

describe('deepMerge', () => {
  test('should merge two simple objects', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2 });
  });

  test('should overwrite properties in target with source properties', () => {
    const target = { a: 1, b: 1 };
    const source = { b: 2, c: 3 };
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should merge nested objects', () => {
    const target = { a: { x: 1 } };
    const source = { a: { y: 2 } };
    expect(deepMerge(target, source)).toEqual({ a: { x: 1, y: 2 } });
  });

  test('should handle arrays by replacing them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    expect(deepMerge(target, source)).toEqual({ a: [3, 4] });
  });

  test('should not modify the original objects', () => {
    const target = { a: { x: 1 } };
    const source = { a: { y: 2 } };
    const targetCopy = JSON.parse(JSON.stringify(target));
    const sourceCopy = JSON.parse(JSON.stringify(source));
    deepMerge(target, source);
    expect(target).toEqual(targetCopy);
    expect(source).toEqual(sourceCopy);
  });
});
