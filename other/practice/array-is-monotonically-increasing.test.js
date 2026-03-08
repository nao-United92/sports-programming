import { isMonotonicallyIncreasing } from './array-is-monotonically-increasing';

describe('isMonotonicallyIncreasing', () => {
  test('should return true for increasing sequence', () => {
    expect(isMonotonicallyIncreasing([1, 2, 2, 3])).toBe(true);
  });

  test('should return false for non-increasing sequence', () => {
    expect(isMonotonicallyIncreasing([1, 2, 1, 3])).toBe(false);
  });

  test('should return true for empty array', () => {
    expect(isMonotonicallyIncreasing([])).toBe(true);
  });

  test('should return true for single element', () => {
    expect(isMonotonicallyIncreasing([5])).toBe(true);
  });
});
