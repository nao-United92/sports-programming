const merge = require('./object-merge');

describe('object-merge', () => {
  test('merges two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(merge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('merges multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(merge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('handles null or non-object inputs', () => {
    const obj = { a: 1 };
    expect(merge(obj, null, 123)).toEqual({ a: 1 });
  });

  test('returns an empty object if no arguments are provided', () => {
    expect(merge()).toEqual({});
  });
});
