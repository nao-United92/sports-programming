import { isEmpty } from './is-empty-utils.js';

describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  test('should return true for empty objects, Maps, and Sets', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for non-empty objects, Maps, and Sets', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('should return false for numbers, booleans, and functions', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
  });
});