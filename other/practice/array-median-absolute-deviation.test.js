import { medianAbsoluteDeviation } from './array-median-absolute-deviation';

describe('medianAbsoluteDeviation', () => {
  test('should calculate MAD correctly', () => {
    expect(medianAbsoluteDeviation([1, 1, 2, 2, 4, 6, 9])).toBe(1);
  });

  test('should return 0 for empty array', () => {
    expect(medianAbsoluteDeviation([])).toBe(0);
  });

  test('should handle single element', () => {
    expect(medianAbsoluteDeviation([10])).toBe(0);
  });
});
