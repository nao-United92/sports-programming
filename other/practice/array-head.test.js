import { head } from './array-head';

describe('head', () => {
  test('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  test('returns undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });
});
