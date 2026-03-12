const isEmpty = require('./object-is-empty-util');

describe('isEmpty', () => {
  test('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
  test('returns true for null/undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
  test('returns false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
