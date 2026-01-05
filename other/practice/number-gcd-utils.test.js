import gcd from './number-gcd-utils';

describe('gcd', () => {
  test('should return the correct GCD for positive integers', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(18, 48)).toBe(6);
    expect(gcd(101, 103)).toBe(1); // Prime numbers
    expect(gcd(17, 17)).toBe(17);
  });

  test('should return the number itself if one is a multiple of the other', () => {
    expect(gcd(10, 5)).toBe(5);
    expect(gcd(25, 50)).toBe(25);
  });

  test('should handle zero correctly', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
    expect(gcd(0, 0)).toBe(0);
  });

  test('should throw an error for non-integer arguments', () => {
    expect(() => gcd(1.5, 2)).toThrow(TypeError);
    expect(() => gcd(1, '2')).toThrow(TypeError);
    expect(() => gcd(null, 2)).toThrow(TypeError);
  });

  test('should throw an error for negative integers', () => {
    expect(() => gcd(-4, 2)).toThrow(Error);
    expect(() => gcd(4, -2)).toThrow(Error);
    expect(() => gcd(-4, -2)).toThrow(Error);
  });
});
