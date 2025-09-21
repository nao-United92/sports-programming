import { isEmpty } from './collection-utils.js';

describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(' ')).toBe(false);
  });

  test('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('should return false for non-empty Map', () => {
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
  });

  test('should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty Set', () => {
    expect(isEmpty(new Set([1, 2]))).toBe(false);
  });

  test('should return true for NaN', () => {
    expect(isEmpty(NaN)).toBe(true);
  });

  test('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isEmpty(() => {})).toBe(false);
  });
});