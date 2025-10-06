
import { romanToInteger } from './roman-to-integer-utils.js';

describe('romanToInteger', () => {
  it('should convert basic Roman numerals to integers', () => {
    expect(romanToInteger('III')).toBe(3);
    expect(romanToInteger('IV')).toBe(4);
    expect(romanToInteger('IX')).toBe(9);
    expect(romanToInteger('LVIII')).toBe(58);
    expect(romanToInteger('MCMXCIV')).toBe(1994);
  });

  it('should handle edge cases', () => {
    expect(romanToInteger('I')).toBe(1);
    expect(romanToInteger('MMMCMXCIX')).toBe(3999);
  });

  it('should throw an error for empty string input', () => {
    expect(() => romanToInteger('')).toThrow('Input must be a non-empty string.');
  });

  it('should throw an error for non-string input', () => {
    expect(() => romanToInteger(123)).toThrow('Input must be a non-empty string.');
    expect(() => romanToInteger(null)).toThrow('Input must be a non-empty string.');
    expect(() => romanToInteger(undefined)).toThrow('Input must be a non-empty string.');
  });

  it('should throw an error for invalid Roman numeral characters', () => {
    expect(() => romanToInteger('IIZ')).toThrow('Input contains invalid Roman numeral characters.');
    expect(() => romanToInteger('VX')).toThrow('Input contains invalid Roman numeral characters.');
  });
});
