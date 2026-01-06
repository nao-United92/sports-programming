const isNullish = require('./is-nullish-utils');

describe('isNullish', () => {
  test('should return true for null', () => {
    expect(isNullish(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isNullish(undefined)).toBe(true);
  });

  test('should return false for empty string', () => {
    expect(isNullish('')).toBe(false);
  });

  test('should return false for zero', () => {
    expect(isNullish(0)).toBe(false);
  });

  test('should return false for false boolean', () => {
    expect(isNullish(false)).toBe(false);
  });

  test('should return false for empty object', () => {
    expect(isNullish({})).toBe(false);
  });

  test('should return false for empty array', () => {
    expect(isNullish([])).toBe(false);
  });

  test('should return false for any other value', () => {
    expect(isNullish('hello')).toBe(false);
    expect(isNullish(123)).toBe(false);
    expect(isNullish(true)).toBe(false);
    expect(isNullish(Symbol('foo'))).toBe(false);
    expect(isNullish(new Date())).toBe(false);
    expect(isNullish(function() {})).toBe(false);
  });
});
