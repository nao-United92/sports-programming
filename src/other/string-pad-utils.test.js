import { padLeft, padRight } from './string-pad-utils';

describe('padLeft', () => {
  it('should pad a string on the left with spaces by default', () => {
    expect(padLeft('abc', 5)).toBe('  abc');
    expect(padLeft('abc', 3)).toBe('abc');
  });

  it('should pad a string with specified characters', () => {
    expect(padLeft('abc', 5, '_')).toBe('__abc');
    expect(padLeft('abc', 7, '*- ')).toBe('*- *abc');
  });

  it('should truncate padding characters if they exceed length', () => {
    expect(padLeft('abc', 4, 'xyz')).toBe('xabc');
  });

  it('should return the original string if length is less than or equal to string length', () => {
    expect(padLeft('abc', 2)).toBe('abc');
    expect(padLeft('abc', 3)).toBe('abc');
  });

  it('should handle null or undefined string input', () => {
    expect(padLeft(null, 5)).toBe('     ');
    expect(padLeft(undefined, 5, 'x')).toBe('xxxxx');
  });

  it('should handle empty string input', () => {
    expect(padLeft('', 3)).toBe('   ');
    expect(padLeft('', 3, 'x')).toBe('xxx');
  });
});

describe('padRight', () => {
  it('should pad a string on the right with spaces by default', () => {
    expect(padRight('abc', 5)).toBe('abc  ');
    expect(padRight('abc', 3)).toBe('abc');
  });

  it('should pad a string with specified characters', () => {
    expect(padRight('abc', 5, '_')).toBe('abc__');
    expect(padRight('abc', 7, '*- ')).toBe('abc*- *'); // Corrected test case
  });

  it('should truncate padding characters if they exceed length', () => {
    expect(padRight('abc', 4, 'xyz')).toBe('abcx');
  });

  it('should return the original string if length is less than or equal to string length', () => {
    expect(padRight('abc', 2)).toBe('abc');
    expect(padRight('abc', 3)).toBe('abc');
  });

  it('should handle null or undefined string input', () => {
    expect(padRight(null, 5)).toBe('     ');
    expect(padRight(undefined, 5, 'x')).toBe('xxxxx');
  });

  it('should handle empty string input', () => {
    expect(padRight('', 3)).toBe('   ');
    expect(padRight('', 3, 'x')).toBe('xxx');
  });
});