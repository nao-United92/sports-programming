import { interquartileRange } from './array-interquartile-range';

describe('interquartileRange', () => {
  test('should calculate IQR correctly', () => {
    expect(interquartileRange([1, 2, 5, 6, 7, 9, 12, 15, 18, 19, 27])).toBe(18 - 5);
  });

  test('should return 0 for small arrays', () => {
    expect(interquartileRange([1, 2, 3])).toBe(0);
  });
});
