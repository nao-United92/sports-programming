
import { hexToNumber } from './hex-to-number-utils.js';

describe('hexToNumber', () => {
  it('should convert basic hexadecimal strings to numbers', () => {
    expect(hexToNumber('0')).toBe(0);
    expect(hexToNumber('A')).toBe(10);
    expect(hexToNumber('a')).toBe(10);
    expect(hexToNumber('F')).toBe(15);
    expect(hexToNumber('f')).toBe(15);
    expect(hexToNumber('10')).toBe(16);
    expect(hexToNumber('FF')).toBe(255);
    expect(hexToNumber('ff')).toBe(255);
  });

  it('should convert large hexadecimal strings to numbers', () => {
    expect(hexToNumber('FFFFF')).toBe(1048575);
    expect(hexToNumber('FFFFFF')).toBe(16777215);
  });

  it('should throw an error for non-string input', () => {
    expect(() => hexToNumber(123)).toThrow('Input must be a valid hexadecimal string.');
    expect(() => hexToNumber(null)).toThrow('Input must be a valid hexadecimal string.');
    expect(() => hexToNumber(undefined)).toThrow('Input must be a valid hexadecimal string.');
  });

  it('should throw an error for empty string input', () => {
    expect(() => hexToNumber('')).toThrow('Input must be a valid hexadecimal string.');
  });

  it('should throw an error for invalid hexadecimal characters', () => {
    expect(() => hexToNumber('FG')).toThrow('Input must be a valid hexadecimal string.');
    expect(() => hexToNumber('123G')).toThrow('Input must be a valid hexadecimal string.');
    expect(() => hexToNumber('0x123')).toThrow('Input must be a valid hexadecimal string.'); // Does not handle 0x prefix
  });
});
