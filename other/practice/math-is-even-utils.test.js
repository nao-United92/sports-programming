import { mathIsEven } from './math-is-even-utils';

describe('mathIsEven', () => {
  test('returns true for even numbers', () => {
    expect(mathIsEven(2)).toBe(true);
    expect(mathIsEven(0)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(mathIsEven(1)).toBe(false);
  });

  test('returns false for non-numbers', () => {
    expect(mathIsEven('2')).toBe(false);
  });
});
