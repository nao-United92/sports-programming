import { isEmpty } from './lang-is-empty-utils.js';

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  test('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for a non-empty Set', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
