import { isEmpty } from './validation-utils';

describe('isEmpty', () => {
  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty('text')).toBe(false);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
