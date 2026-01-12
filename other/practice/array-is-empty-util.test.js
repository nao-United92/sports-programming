import { isEmpty } from './array-is-empty-util';

describe('isEmpty', () => {
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return false for a non-array value', () => {
    expect(isEmpty(null)).toBe(false);
    expect(isEmpty(undefined)).toBe(false);
    expect(isEmpty({})).toBe(false);
    expect(isEmpty("")).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });
});
