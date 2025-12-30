import clamp from './number-clamp-utils';

describe('clamp', () => {
  test('should clamp a number to the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should not change a number within the bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should work with negative bounds', () => {
    expect(clamp(-20, -10, -5)).toBe(-10);
    expect(clamp(0, -10, -5)).toBe(-5);
  });

  test('should return NaN for non-number inputs', () => {
    expect(clamp('a', 1, 10)).toBeNaN();
    expect(clamp(1, 'b', 10)).toBeNaN();
    expect(clamp(1, 1, 'c')).toBeNaN();
  });
});
