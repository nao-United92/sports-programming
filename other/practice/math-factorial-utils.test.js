import { mathFactorial } from './math-factorial-utils';

describe('mathFactorial', () => {
  test('calculates factorial of 0', () => {
    expect(mathFactorial(0)).toBe(1);
  });

  test('calculates factorial of 5', () => {
    expect(mathFactorial(5)).toBe(120);
  });

  test('returns undefined for negative numbers', () => {
    expect(mathFactorial(-1)).toBeUndefined();
  });
});
