const { isNil } = require('./type-is-nil-utils');

describe('isNil', () => {
  it('should return true for null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('should return false for empty string', () => {
    expect(isNil('')).toBe(false);
  });

  it('should return false for zero', () => {
    expect(isNil(0)).toBe(false);
  });

  it('should return false for false boolean', () => {
    expect(isNil(false)).toBe(false);
  });

  it('should return false for empty object', () => {
    expect(isNil({})).toBe(false);
  });

  it('should return false for empty array', () => {
    expect(isNil([])).toBe(false);
  });

  it('should return false for any other value', () => {
    expect(isNil('hello')).toBe(false);
    expect(isNil(123)).toBe(false);
    expect(isNil(true)).toBe(false);
    expect(isNil({ a: 1 })).toBe(false);
    expect(isNil([1, 2])).toBe(false);
  });
});
