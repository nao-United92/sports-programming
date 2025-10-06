
import { numberToHex } from './number-to-hex-utils.js';

describe('numberToHex', () => {
  it('should convert basic numbers to hexadecimal strings', () => {
    expect(numberToHex(0)).toBe('0');
    expect(numberToHex(10)).toBe('A');
    expect(numberToHex(16)).toBe('10');
    expect(numberToHex(255)).toBe('FF');
    expect(numberToHex(256)).toBe('100');
  });

  it('should convert large numbers to hexadecimal strings', () => {
    expect(numberToHex(1048575)).toBe('FFFFF');
    expect(numberToHex(16777215)).toBe('FFFFFF');
  });

  it('should throw an error for negative numbers', () => {
    expect(() => numberToHex(-1)).toThrow('Input must be a non-negative integer.');
    expect(() => numberToHex(-100)).toThrow('Input must be a non-negative integer.');
  });

  it('should throw an error for non-integer numbers', () => {
    expect(() => numberToHex(1.5)).toThrow('Input must be a non-negative integer.');
    expect(() => numberToHex(10.01)).toThrow('Input must be a non-negative integer.');
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => numberToHex('abc')).toThrow('Input must be a non-negative integer.');
    expect(() => numberToHex(null)).toThrow('Input must be a non-negative integer.');
    expect(() => numberToHex(undefined)).toThrow('Input must be a non-negative integer.');
  });
});
