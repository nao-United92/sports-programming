import { isPrimeFast } from './math-is-prime-number-fast';

describe('isPrimeFast', () => {
  test('should return true for prime numbers', () => {
    expect(isPrimeFast(2)).toBe(true);
    expect(isPrimeFast(3)).toBe(true);
    expect(isPrimeFast(5)).toBe(true);
    expect(isPrimeFast(7)).toBe(true);
    expect(isPrimeFast(11)).toBe(true);
    expect(isPrimeFast(13)).toBe(true);
    expect(isPrimeFast(17)).toBe(true);
    expect(isPrimeFast(19)).toBe(true);
    expect(isPrimeFast(23)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrimeFast(1)).toBe(false);
    expect(isPrimeFast(4)).toBe(false);
    expect(isPrimeFast(6)).toBe(false);
    expect(isPrimeFast(8)).toBe(false);
    expect(isPrimeFast(9)).toBe(false);
    expect(isPrimeFast(15)).toBe(false);
    expect(isPrimeFast(21)).toBe(false);
    expect(isPrimeFast(25)).toBe(false);
  });
});
