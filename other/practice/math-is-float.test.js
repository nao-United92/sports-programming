import { isFloat } from './math-is-float';

describe('isFloat', () => {
  test('should return true for floats', () => {
    expect(isFloat(1.1)).toBe(true);
    expect(isFloat(-0.5)).toBe(true);
  });

  test('should return false for non-floats', () => {
    expect(isFloat(1)).toBe(false);
    expect(isFloat(0)).toBe(false);
    expect(isFloat('1.1')).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
  });
});
