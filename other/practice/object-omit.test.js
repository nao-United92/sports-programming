const omit = require('./object-omit');

describe('object-omit', () => {
  test('omits specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('handles missing keys', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
  });

  test('handles empty keys array', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('handles null or non-object inputs', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });
});
