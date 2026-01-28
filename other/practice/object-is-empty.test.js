const { isEmpty } = require('./object-is-empty');

describe('isEmpty', () => {
  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  it('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for a non-empty Set', () => {
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
