import { mathGCD } from './math-gcd-utils';

describe('mathGCD', () => {
  test('calculates GCD of two numbers', () => {
    expect(mathGCD(12, 18)).toBe(6);
  });

  test('calculates GCD with 0', () => {
    expect(mathGCD(12, 0)).toBe(12);
  });
});
