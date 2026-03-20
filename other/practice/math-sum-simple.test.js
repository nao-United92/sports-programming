import { sum } from './math-sum-simple';

describe('sum', () => {
  test('sums numbers in array', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test('returns 0 for empty array', () => {
    expect(sum([])).toBe(0);
  });
});
