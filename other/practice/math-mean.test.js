import { mean } from './math-mean';

describe('mean', () => {
  test('returns the mean of array elements', () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
  });

  test('returns NaN for an empty array', () => {
    expect(mean([])).toBeNaN();
  });

  test('handles a single element array', () => {
    expect(mean([10])).toBe(10);
  });
});
