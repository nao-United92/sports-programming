import { isInteger } from './math-is-integer';

describe('isInteger', () => {
  test('should return true for integers', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-10)).toBe(true);
  });

  test('should return false for non-integers', () => {
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger('1')).toBe(false);
    expect(isInteger(null)).toBe(false);
  });
});
