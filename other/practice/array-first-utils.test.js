import { arrayFirst } from './array-first-utils';

describe('arrayFirst', () => {
  test('returns the first element of an array', () => {
    expect(arrayFirst([1, 2, 3])).toBe(1);
  });

  test('returns undefined for empty array', () => {
    expect(arrayFirst([])).toBeUndefined();
  });

  test('returns undefined for null', () => {
    expect(arrayFirst(null)).toBeUndefined();
  });
});
