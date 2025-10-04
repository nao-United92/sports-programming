
import { integerToRoman } from './integer-to-roman-utils.js';

describe('integerToRoman', () => {
  it('should convert basic integers to Roman numerals', () => {
    expect(integerToRoman(3)).toBe('III');
    expect(integerToRoman(4)).toBe('IV');
    expect(integerToRoman(9)).toBe('IX');
    expect(integerToRoman(58)).toBe('LVIII');
    expect(integerToRoman(1994)).toBe('MCMXCIV');
  });

  it('should handle edge cases', () => {
    expect(integerToRoman(1)).toBe('I');
    expect(integerToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('should throw an error for numbers less than 1', () => {
    expect(() => integerToRoman(0)).toThrow('Input must be an integer between 1 and 3999.');
    expect(() => integerToRoman(-1)).toThrow('Input must be an integer between 1 and 3999.');
  });

  it('should throw an error for numbers greater than 3999', () => {
    expect(() => integerToRoman(4000)).toThrow('Input must be an integer between 1 and 3999.');
  });

  it('should throw an error for non-integer numbers', () => {
    expect(() => integerToRoman(1.5)).toThrow('Input must be an integer between 1 and 3999.');
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => integerToRoman('abc')).toThrow('Input must be an integer between 1 and 3999.');
    expect(() => integerToRoman(null)).toThrow('Input must be an integer between 1 and 3999.');
    expect(() => integerToRoman(undefined)).toThrow('Input must be an integer between 1 and 3999.');
  });
});
