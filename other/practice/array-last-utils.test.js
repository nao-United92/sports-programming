import { arrayLast } from './array-last-utils';

describe('arrayLast', () => {
  test('returns the last element of an array', () => {
    expect(arrayLast([1, 2, 3])).toBe(3);
  });

  test('returns undefined for empty array', () => {
    expect(arrayLast([])).toBeUndefined();
  });
});
