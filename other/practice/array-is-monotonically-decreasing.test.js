import { isMonotonicallyDecreasing } from './array-is-monotonically-decreasing';

describe('isMonotonicallyDecreasing', () => {
  test('should return true for decreasing sequence', () => {
    expect(isMonotonicallyDecreasing([3, 2, 2, 1])).toBe(true);
  });

  test('should return false for non-decreasing sequence', () => {
    expect(isMonotonicallyDecreasing([3, 2, 3, 1])).toBe(false);
  });

  test('should return true for empty array', () => {
    expect(isMonotonicallyDecreasing([])).toBe(true);
  });

  test('should return true for single element', () => {
    expect(isMonotonicallyDecreasing([5])).toBe(true);
  });
});
