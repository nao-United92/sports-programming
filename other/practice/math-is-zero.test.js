import { isZero } from './math-is-zero';

describe('isZero', () => {
  test('should return true for zero', () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(-0)).toBe(true);
  });

  test('should return false for non-zero numbers', () => {
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
  });
});
