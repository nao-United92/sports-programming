const { isEmpty } = require('./validation-is-empty-utils.js');

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty strings, arrays, and objects', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty strings, arrays, and objects', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
