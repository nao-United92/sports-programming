const isEmpty = require('./object-is-empty');

describe('object-is-empty', () => {
  test('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('returns false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isEmpty([])).toBe(false);
    expect(isEmpty([1])).toBe(false);
  });

  test('returns false for primitives', () => {
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty('hello')).toBe(false);
  });
});
