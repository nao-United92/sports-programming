import { isOdd } from './math-is-odd-util-v2';

describe('isOdd', () => {
  test('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(101)).toBe(true);
  });

  test('should return false for even numbers', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
});
