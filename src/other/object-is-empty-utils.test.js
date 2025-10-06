import { isEmpty } from './object-is-empty-utils';

describe('isEmpty', () => {
  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return false for non-objects', () => {
    expect(isEmpty([])).toBe(false);
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
  });
});
