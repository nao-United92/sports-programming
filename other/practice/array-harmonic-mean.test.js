import { harmonicMean } from './array-harmonic-mean';

describe('harmonicMean', () => {
  test('should calculate harmonic mean correctly', () => {
    expect(harmonicMean([1, 4, 4])).toBe(2);
  });

  test('should return 0 for empty array', () => {
    expect(harmonicMean([])).toBe(0);
  });
});
