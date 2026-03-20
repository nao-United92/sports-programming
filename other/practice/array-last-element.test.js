import { lastElement } from './array-last-element';

describe('lastElement', () => {
  test('returns the last element of an array', () => {
    expect(lastElement([1, 2, 3])).toBe(3);
  });

  test('returns undefined for empty array', () => {
    expect(lastElement([])).toBeUndefined();
  });

  test('returns undefined for non-array', () => {
    expect(lastElement(null)).toBeUndefined();
  });
});
