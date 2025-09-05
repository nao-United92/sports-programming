import { padLeft, padRight, truncate } from './string-utils.js';

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

describe('padRight', () => {
  it('should pad a string with spaces by default', () => {
    expect(padRight('abc', 5)).toBe('abc  ');
  });

  it('should pad a string with a specified character', () => {
    expect(padRight('abc', 5, '0')).toBe('abc00');
  });

  it('should not pad if the string is already at the desired length', () => {
    expect(padRight('abcde', 5)).toBe('abcde');
  });

  it('should not pad if the string is longer than the desired length', () => {
    expect(padRight('abcdef', 5)).toBe('abcdef');
  });

  it('should handle multi-character padding strings', () => {
    expect(padRight('a', 5, 'xo')).toBe('axoxo');
  });

  it('should handle non-string inputs by converting them to strings', () => {
    expect(padRight(123, 5, '0')).toBe('12300');
  });
});

describe('truncate', () => {
  it('should truncate a string and add an omission', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  it('should not truncate a string that is shorter than the length', () => {
    expect(truncate('hello', 8)).toBe('hello');
  });

  it('should use a custom omission string', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello --');
  });

  it('should handle cases where length is smaller than omission length', () => {
    expect(truncate('hello world', 2, '...')).toBe('..');
  });

  it('should return the original string if length is equal', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });
});
