const { isEmpty } = require('./object-utils.js');

describe('isEmpty', () => {
  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an object with only inherited properties', () => {
    const parent = { a: 1 };
    const child = Object.create(parent);
    expect(isEmpty(child)).toBe(true);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});