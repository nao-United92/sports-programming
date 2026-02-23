import { clampList } from './array-clamp-util';

describe('clampList', () => {
  test('clamps all numbers in an array', () => {
    expect(clampList([1, 5, 10, 15], 5, 10)).toEqual([5, 5, 10, 10]);
  });

  test('handles empty array', () => {
    expect(clampList([], 0, 10)).toEqual([]);
  });

  test('returns empty array for non-array input', () => {
    expect(clampList(null, 0, 10)).toEqual([]);
  });
});
