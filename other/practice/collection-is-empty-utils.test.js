const { isEmpty } = require('./collection-is-empty-utils');

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return true for empty Maps', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return false for non-empty Maps', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  it('should return true for empty Sets', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for non-empty Sets', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  it('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
