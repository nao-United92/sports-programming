import { average } from './math-average-simple';

describe('average', () => {
  test('calculates average of numbers', () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  test('returns 0 for empty array', () => {
    expect(average([])).toBe(0);
  });
});
