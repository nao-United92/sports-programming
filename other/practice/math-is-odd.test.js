import { isOdd } from './math-is-odd';

describe('isOdd', () => {
  test('returns true for odd numbers', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  test('returns false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
});
