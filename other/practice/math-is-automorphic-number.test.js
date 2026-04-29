import { isAutomorphicNumber } from './math-is-automorphic-number';

describe('isAutomorphicNumber', () => {
  test('should return true for Automorphic numbers', () => {
    expect(isAutomorphicNumber(5)).toBe(true);
    expect(isAutomorphicNumber(6)).toBe(true);
    expect(isAutomorphicNumber(25)).toBe(true);
    expect(isAutomorphicNumber(76)).toBe(true);
    expect(isAutomorphicNumber(0)).toBe(true);
    expect(isAutomorphicNumber(1)).toBe(true);
  });

  test('should return false for non-Automorphic numbers', () => {
    expect(isAutomorphicNumber(4)).toBe(false);
    expect(isAutomorphicNumber(10)).toBe(false);
  });
});
