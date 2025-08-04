import { isEmpty } from './is-empty-utils.js';

describe('isEmpty', () => {
  test('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return false for a number', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for a boolean', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
