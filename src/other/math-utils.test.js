import { clamp, mapRange, sum, average, min, max, median, round, randomInt, isPrime, factorial } from './math-utils';

describe('math-utils', () => {
  describe('clamp', () => {
    it('should clamp a number within the bounds', () => {
      expect(clamp(10, 0, 100)).toBe(10);
    });

    it('should clamp a number below the lower bound', () => {
      expect(clamp(-10, 0, 100)).toBe(0);
    });

    it('should clamp a number above the upper bound', () => {
      expect(clamp(110, 0, 100)).toBe(100);
    });

    it('should handle negative bounds', () => {
      expect(clamp(-5, -10, -2)).toBe(-5);
      expect(clamp(-15, -10, -2)).toBe(-10);
      expect(clamp(0, -10, -2)).toBe(-2);
    });
  });

  describe('mapRange', () => {
    it('should map a number from one range to another', () => {
      expect(mapRange(50, 0, 100, 0, 1)).toBe(0.5);
      expect(mapRange(0, 0, 100, 0, 1000)).toBe(0);
      expect(mapRange(100, 0, 100, 0, 1000)).toBe(1000);
      expect(mapRange(25, 0, 100, 0, 10)).toBe(2.5);
    });

    it('should handle negative ranges', () => {
      expect(mapRange(0, -10, 10, 0, 100)).toBe(50);
      expect(mapRange(-10, -10, 10, 0, 100)).toBe(0);
      expect(mapRange(10, -10, 10, 0, 100)).toBe(100);
    });

    it('should handle inverted output ranges', () => {
      expect(mapRange(50, 0, 100, 1, 0)).toBe(0.5);
      expect(mapRange(0, 0, 100, 100, 0)).toBe(100);
      expect(mapRange(100, 0, 100, 100, 0)).toBe(0);
    });
  });

  describe('sum', () => {
    it('should calculate the sum of numbers in an array', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([])).toBe(0);
      expect(sum([10])).toBe(10);
    });

    it('should return 0 for non-array input', () => {
      expect(sum(null)).toBe(0);
      expect(sum(undefined)).toBe(0);
      expect(sum('abc')).toBe(0);
    });
  });

  describe('average', () => {
    it('should calculate the average of numbers in an array', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10])).toBe(10);
    });

    it('should return 0 for an empty array', () => {
      expect(average([])).toBe(0);
    });

    it('should return 0 for non-array input', () => {
      expect(average(null)).toBe(0);
      expect(average(undefined)).toBe(0);
      expect(average('abc')).toBe(0);
    });
  });

  describe('min', () => {
    it('should find the minimum number in an array', () => {
      expect(min([1, 2, 3, 4, 5])).toBe(1);
      expect(min([-1, -5, 0])).toBe(-5);
      expect(min([10])).toBe(10);
    });

    it('should return Infinity for an empty array', () => {
      expect(min([])).toBe(Infinity);
    });

    it('should return Infinity for non-array input', () => {
      expect(min(null)).toBe(Infinity);
      expect(min(undefined)).toBe(Infinity);
      expect(min('abc')).toBe(Infinity);
    });
  });

  describe('max', () => {
    it('should find the maximum number in an array', () => {
      expect(max([1, 2, 3, 4, 5])).toBe(5);
      expect(max([-1, -5, 0])).toBe(0);
      expect(max([10])).toBe(10);
    });

    it('should return -Infinity for an empty array', () => {
      expect(max([])).toBe(-Infinity);
    });

    it('should return -Infinity for non-array input', () => {
      expect(max(null)).toBe(-Infinity);
      expect(max(undefined)).toBe(-Infinity);
      expect(max('abc')).toBe(-Infinity);
    });
  });

  describe('median', () => {
    it('should calculate the median of an odd-length array', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
      expect(median([5, 1, 4, 2, 3])).toBe(3);
    });

    it('should calculate the median of an even-length array', () => {
      expect(median([1, 2, 3, 4])).toBe(2.5);
      expect(median([4, 1, 3, 2])).toBe(2.5);
    });

    it('should return NaN for an empty array', () => {
      expect(median([])).toBeNaN();
    });

    it('should return NaN for non-array input', () => {
      expect(median(null)).toBeNaN();
      expect(median(undefined)).toBeNaN();
      expect(median('abc')).toBeNaN();
    });
  });

  describe('round', () => {
    it('should round a number to the nearest integer by default', () => {
      expect(round(3.14)).toBe(3);
      expect(round(3.5)).toBe(4);
      expect(round(3.8)).toBe(4);
    });

    it('should round a number to a specified number of decimal places', () => {
      expect(round(3.14159, 2)).toBe(3.14);
      expect(round(3.14159, 3)).toBe(3.142);
      expect(round(10.12345, 0)).toBe(10);
    });

    it('should handle negative numbers', () => {
      expect(round(-3.14)).toBe(-3);
      expect(round(-3.5)).toBe(-3);
      expect(round(-3.8)).toBe(-4);
      expect(round(-3.14159, 2)).toBe(-3.14);
    });

    it('should return NaN for invalid number input', () => {
      expect(round(null)).toBeNaN();
      expect(round(undefined)).toBeNaN();
      expect(round('abc')).toBeNaN();
    });

    it('should handle zero decimal places explicitly', () => {
      expect(round(123.456, 0)).toBe(123);
    });

    it('should handle large numbers of decimal places', () => {
      expect(round(1.23456789, 8)).toBe(1.23456789);
    });
  });

  describe('randomInt', () => {
    it('should generate a random integer within the specified range', () => {
      for (let i = 0; i < 100; i++) {
        const num = randomInt(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
      }
    });

    it('should handle negative ranges', () => {
      for (let i = 0; i < 100; i++) {
        const num = randomInt(-5, 5);
        expect(num).toBeGreaterThanOrEqual(-5);
        expect(num).toBeLessThanOrEqual(5);
      }
    });

    it('should handle single-number ranges', () => {
      expect(randomInt(7, 7)).toBe(7);
    });

    it('should handle float inputs by flooring/ceiling', () => {
      const num = randomInt(1.1, 10.9);
      expect(num).toBeGreaterThanOrEqual(2);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  describe('isPrime', () => {
    test('should return true for prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(19)).toBe(true);
      expect(isPrime(23)).toBe(true);
      expect(isPrime(29)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });
  });

  describe('factorial', () => {
    test('should calculate the factorial of a non-negative integer', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });

    test('should return NaN for negative numbers', () => {
      expect(factorial(-1)).toBeNaN();
    });
  });

  describe('gcd', () => {
    test('should calculate the greatest common divisor of two numbers', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(101, 103)).toBe(1);
      expect(gcd(10, 5)).toBe(5);
    });

    test('should handle zero', () => {
      expect(gcd(10, 0)).toBe(10);
      expect(gcd(0, 10)).toBe(10);
    });
  });

  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });

    test('should return false for non-numbers', () => {
      expect(isEven(null)).toBe(false);
      expect(isEven(undefined)).toBe(false);
      expect(isEven('2')).toBe(false);
      expect(isEven(NaN)).toBe(false);
    });
  });
});