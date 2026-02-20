import { last } from './array-last';

describe('last', () => {
  test('returns the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });
});
