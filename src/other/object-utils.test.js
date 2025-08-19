const { isEmptyObject } = require('./object-utils.js');

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for an object with properties', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('should return false for a string', () => {
    expect(isEmptyObject('hello')).toBe(false);
  });

  test('should return false for a number', () => {
    expect(isEmptyObject(123)).toBe(false);
  });

  test('should return false for an empty array', () => {
    expect(isEmptyObject([])).toBe(false); // Arrays are not considered empty objects
  });

  test('should return false for a non-empty array', () => {
    expect(isEmptyObject([1, 2])).toBe(false);
  });
});
