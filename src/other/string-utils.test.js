import { padLeft } from './string-utils.js';

describe('padLeft', () => {
  it('should pad a string with spaces by default', () => {
    expect(padLeft('abc', 5)).toBe('  abc');
  });

  it('should pad a string with a specified character', () => {
    expect(padLeft('abc', 5, '0')).toBe('00abc');
  });

  it('should not pad if the string is already at the desired length', () => {
    expect(padLeft('abcde', 5)).toBe('abcde');
  });

  it('should not pad if the string is longer than the desired length', () => {
    expect(padLeft('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padLeft('a', 5, 'xo')).toBe('xoxoa');
  });

  it('should handle non-string inputs by converting them to strings', () => {
    expect(padLeft(123, 5, '0')).toBe('00123');
  });
});
