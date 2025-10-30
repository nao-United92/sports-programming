const { isEmpty } = require('./type-is-empty-utils.js');

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty string and empty array', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for empty Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for non-empty string and non-empty array', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for non-empty Map and Set', () => {
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1, 2]))).toBe(false);
  });

  it('should return false for numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isEmpty(() => {})).toBe(false);
  });

  it('should return false for Date objects', () => {
    expect(isEmpty(new Date())).toBe(false);
  });
});