import { isEmpty } from './empty-value-checker.js';

describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty or whitespace-only strings', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  test('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return false for numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });
});
