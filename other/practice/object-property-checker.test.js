const { isEmpty } = require('./object-property-checker');

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(NaN)).toBe(false); // NaN is a number
  });

  it('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isEmpty(() => {})).toBe(false);
  });

  it('should return false for symbols', () => {
    expect(isEmpty(Symbol(''))).toBe(false);
  });

  it('should return false for Maps with elements', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  it('should return true for empty Maps', () => {
    const map = new Map();
    expect(isEmpty(map)).toBe(true);
  });

  it('should return false for Sets with elements', () => {
    const set = new Set([1]);
    expect(isEmpty(set)).toBe(false);
  });

  it('should return true for empty Sets', () => {
    const set = new Set();
    expect(isEmpty(set)).toBe(true);
  });
});
