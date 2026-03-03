const pick = require('./object-pick');

describe('object-pick', () => {
  test('picks specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('handles missing keys', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  test('handles empty keys array', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('handles null or non-object inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });
});
