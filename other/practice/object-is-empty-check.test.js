import { isEmptyObject } from './object-is-empty-check';

describe('isEmptyObject', () => {
  test('returns true for empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('returns false for non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('returns false for non-object', () => {
    expect(isEmptyObject(null)).toBeFalsy();
    expect(isEmptyObject(undefined)).toBeFalsy();
    expect(isEmptyObject([])).toBe(false);
  });
});
