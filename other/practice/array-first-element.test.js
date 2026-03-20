import { firstElement } from './array-first-element';

describe('firstElement', () => {
  test('returns the first element of an array', () => {
    expect(firstElement([1, 2, 3])).toBe(1);
  });

  test('returns undefined for empty array', () => {
    expect(firstElement([])).toBeUndefined();
  });

  test('returns undefined for non-array', () => {
    expect(firstElement(null)).toBeUndefined();
  });
});
