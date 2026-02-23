import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for empty string and array', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  test('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns true for empty Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('returns false for non-empty values', () => {
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });
});
