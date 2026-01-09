import { isEmptyObject } from './object-is-empty-utils.js';

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for non-object inputs', () => {
    expect(isEmptyObject(null)).toBe(false);
    expect(isEmptyObject([])).toBe(false); // An array is an object, but we are checking for an empty plain object
    expect(isEmptyObject('string')).toBe(false);
  });

  test('should return false for an object with undefined properties', () => {
      expect(isEmptyObject({ a: undefined })).toBe(false);
  });
});