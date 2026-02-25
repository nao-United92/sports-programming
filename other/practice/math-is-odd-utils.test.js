import { mathIsOdd } from './math-is-odd-utils';

describe('mathIsOdd', () => {
  test('returns true for odd numbers', () => {
    expect(mathIsOdd(1)).toBe(true);
    expect(mathIsOdd(-3)).toBe(true);
  });

  test('returns false for even numbers', () => {
    expect(mathIsOdd(2)).toBe(false);
    expect(mathIsOdd(0)).toBe(false);
  });

  test('returns false for non-numbers', () => {
    expect(mathIsOdd('1')).toBe(false);
  });
});
