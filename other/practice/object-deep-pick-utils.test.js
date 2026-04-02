const { deepPick } = require('./object-deep-pick-utils');

describe('deepPick', () => {
  test('picks top-level properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(deepPick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('picks nested properties', () => {
    const obj = { a: { b: 1, d: 4 }, c: 2 };
    expect(deepPick(obj, ['a.b', 'c'])).toEqual({ a: { b: 1 }, c: 2 });
  });

  test('picks multiple properties in the same nested object', () => {
    const obj = { a: { b: 1, d: 4 }, c: 2 };
    expect(deepPick(obj, ['a.b', 'a.d'])).toEqual({ a: { b: 1, d: 4 } });
  });

  test('handles missing paths gracefully', () => {
    const obj = { a: 1 };
    expect(deepPick(obj, ['a', 'b.c'])).toEqual({ a: 1 });
  });

  test('returns empty object if no paths match', () => {
    const obj = { a: 1 };
    expect(deepPick(obj, ['b', 'c.d'])).toEqual({});
  });
});
