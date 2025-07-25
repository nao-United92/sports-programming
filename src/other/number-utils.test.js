import { isNumber, clamp, getRandomInt, formatNumber, isEven, isOdd, toPercentage, isInRange, roundToDecimalPlace, isDivisibleBy, toCurrency, addCommas, isInteger } from './number-utils.js';

describe('number-utils', () => {
  describe('isNumber', () => {
    it('should return true for a number', () => {
      expect(isNumber(123)).toBe(true);
    });

    it('should return false for a non-number', () => {
      expect(isNumber('hello')).toBe(false);
    });
  });

  describe('clamp', () => {
    it('should clamp a number between a min and max', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });
  });

  describe('getRandomInt', () => {
    it('should return a random integer within a range', () => {
      const random = getRandomInt(1, 10);
      expect(random).toBeGreaterThanOrEqual(1);
      expect(random).toBeLessThanOrEqual(10);
    });
  });

  describe('formatNumber', () => {
    it('should format a number with a specified number of decimals', () => {
      expect(formatNumber(123.456, 2)).toBe('123.46');
    });

    it('should return an empty string if the input is not a number', () => {
      expect(formatNumber('hello', 2)).toBe('');
    });
  });

  describe('isEven', () => {
    it('should return true for an even number', () => {
      expect(isEven(2)).toBe(true);
    });

    it('should return false for an odd number', () => {
      expect(isEven(3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('should return true for an odd number', () => {
      expect(isOdd(3)).toBe(true);
    });

    it('should return false for an even number', () => {
      expect(isOdd(2)).toBe(false);
    });
  });

  describe('toPercentage', () => {
    it('should convert a number to a percentage string with default decimals', () => {
      expect(toPercentage(0.5)).toBe('50%');
      expect(toPercentage(0.1234, 2)).toBe('12.34%');
    });

    it('should return an empty string for non-number inputs', () => {
      expect(toPercentage(null)).toBe('');
      expect(toPercentage(undefined)).toBe('');
      expect(toPercentage('abc')).toBe('');
    });
  });

  describe('isInRange', () => {
    it('should return true if the number is within the range', () => {
      expect(isInRange(5, 1, 10)).toBe(true);
      expect(isInRange(1, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    it('should return false if the number is outside the range', () => {
      expect(isInRange(0, 1, 10)).toBe(false);
      expect(isInRange(11, 1, 10)).toBe(false);
    });

    it('should return false for non-number inputs', () => {
      expect(isInRange(null, 1, 10)).toBe(false);
      expect(isInRange(undefined, 1, 10)).toBe(false);
      expect(isInRange('abc', 1, 10)).toBe(false);
    });
  });

  describe('roundToDecimalPlace', () => {
    test('should round a number to the specified decimal places', () => {
      expect(roundToDecimalPlace(123.456, 2)).toBe(123.46);
      expect(roundToDecimalPlace(123.454, 2)).toBe(123.45);
      expect(roundToDecimalPlace(123.4, 0)).toBe(123);
      expect(roundToDecimalPlace(123.5, 0)).toBe(124);
    });

    test('should handle negative decimal places as NaN', () => {
      expect(roundToDecimalPlace(123.456, -1)).toBeNaN();
    });

    test('should return NaN for non-number inputs', () => {
      expect(roundToDecimalPlace(null, 2)).toBeNaN();
      expect(roundToDecimalPlace(123.456, 'abc')).toBeNaN();
    });
  });

  describe('isDivisibleBy', () => {
    it('should return true if the number is divisible by the divisor', () => {
      expect(isDivisibleBy(10, 2)).toBe(true);
      expect(isDivisibleBy(9, 3)).toBe(true);
      expect(isDivisibleBy(7, 7)).toBe(true);
    });

    it('should return false if the number is not divisible by the divisor', () => {
      expect(isDivisibleBy(10, 3)).toBe(false);
      expect(isDivisibleBy(7, 2)).toBe(false);
    });

    it('should return false if the divisor is 0', () => {
      expect(isDivisibleBy(10, 0)).toBe(false);
    });

    it('should return false for non-number inputs', () => {
      expect(isDivisibleBy(null, 2)).toBe(false);
      expect(isDivisibleBy(10, undefined)).toBe(false);
      expect(isDivisibleBy('abc', 2)).toBe(false);
    });
  });

  describe('toCurrency', () => {
    test('should format a number as currency with default decimals', () => {
      expect(toCurrency(1234.56)).toBe('$1234.56');
      expect(toCurrency(100)).toBe('$100.00');
    });

    test('should format a number as currency with custom currency symbol and decimals', () => {
      expect(toCurrency(1234.567, '€', 3)).toBe('€1234.567');
      expect(toCurrency(99.9, '¥', 0)).toBe('¥100');
    });

    test('should return empty string for non-number inputs', () => {
      expect(toCurrency(null)).toBe('');
      expect(toCurrency(undefined)).toBe('');
      expect(toCurrency('abc')).toBe('');
    });
  });

  

  describe('addCommas', () => {
    test('should add commas to a number', () => {
      expect(addCommas(1000)).toBe('1,000');
      expect(addCommas(1000000)).toBe('1,000,000');
      expect(addCommas(123456789)).toBe('123,456,789');
      expect(addCommas(123)).toBe('123');
    });

    test('should handle decimal numbers', () => {
      expect(addCommas(1234.56)).toBe('1,234.56');
      expect(addCommas(1234567.8912)).toBe('1,234,567.8912');
    });

    test('should return empty string for non-number inputs', () => {
      expect(addCommas(null)).toBe('');
      expect(addCommas(undefined)).toBe('');
      expect(addCommas('abc')).toBe('');
    });
  });

  describe('isInteger', () => {
    test('should return true for an integer', () => {
      expect(isInteger(10)).toBe(true);
      expect(isInteger(-5)).toBe(true);
      expect(isInteger(0)).toBe(true);
    });

    test('should return false for a non-integer', () => {
      expect(isInteger(10.5)).toBe(false);
      expect(isInteger(Math.PI)).toBe(false);
      expect(isInteger(NaN)).toBe(false);
      expect(isInteger(Infinity)).toBe(false);
      expect(isInteger(-Infinity)).toBe(false);
    });

    test('should return false for non-numeric values', () => {
      expect(isInteger('10')).toBe(false);
      expect(isInteger(null)).toBe(false);
      expect(isInteger(undefined)).toBe(false);
      expect(isInteger(true)).toBe(false);
    });
  });
});