import { sum } from './math-sum';

describe('sum', () => {
  test('returns the sum of array elements', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test('returns 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(sum([1, -2, 3])).toBe(2);
  });
});
