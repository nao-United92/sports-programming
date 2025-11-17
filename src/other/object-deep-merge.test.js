const { deepMerge } = require('./object-deep-merge');

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    // Use a copy to test the result, as deepMerge mutates the target
    expect(deepMerge({}, target, source)).toEqual(expected);
  });

  it('should merge nested objects', () => {
    const target = { a: { x: 1 }, b: 2 };
    const source = { a: { y: 2 }, c: 3 };
    const expected = { a: { x: 1, y: 2 }, b: 2, c: 3 };
    expect(deepMerge({}, target, source)).toEqual(expected);
  });

  it('should handle multiple source objects', () => {
    const target = { a: 1 };
    const source1 = { b: 2, a: 0 };
    const source2 = { c: 3, b: 99 };
    const expected = { a: 0, b: 99, c: 3 };
    expect(deepMerge({}, target, source1, source2)).toEqual(expected);
  });

  it('should overwrite existing properties', () => {
    const target = { a: { x: 1, y: 1 } };
    const source = { a: { y: 2 } };
    const expected = { a: { x: 1, y: 2 } };
    expect(deepMerge({}, target, source)).toEqual(expected);
  });

  it('should replace arrays, not merge them', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    const expected = { a: [3, 4] };
    expect(deepMerge({}, target, source)).toEqual(expected);
  });

  it('should add new properties without affecting existing ones', () => {
    const target = { a: { x: 1 } };
    const source = { b: { y: 2 } };
    const expected = { a: { x: 1 }, b: { y: 2 } };
    expect(deepMerge({}, target, source)).toEqual(expected);
  });

  it('should mutate the target object', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    deepMerge(target, source);
    expect(target).toEqual({ a: 1, b: 2 });
  });

  it('should not mutate source objects', () => {
    const target = {};
    const source = { a: { b: 1 } };
    const sourceCopy = JSON.parse(JSON.stringify(source));
    deepMerge(target, source);
    expect(source).toEqual(sourceCopy);
  });
});
