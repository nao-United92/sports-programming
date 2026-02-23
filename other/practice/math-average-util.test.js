import { average } from './math-average-util';

describe('average', () => {
  test('calculates the average of numbers', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
  });

  test('handles array input (flat)', () => {
    expect(average([10, 20, 30])).toBe(20);
  });

  test('returns 0 for empty input', () => {
    expect(average()).toBe(0);
    expect(average([])).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(average(-10, 10)).toBe(0);
  });
});
