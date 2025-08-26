import { pad, padStart, padEnd } from './string-padding-utils.js';

describe('padStart', () => {
  it('should pad a string at the start', () => {
    expect(padStart('abc', 5)).toBe('  abc');
    expect(padStart('abc', 5, '_')).toBe('__abc');
  });

  it('should not pad if the string is long enough', () => {
    expect(padStart('abcde', 5)).toBe('abcde');
    expect(padStart('abcdef', 5)).toBe('abcdef');
  });
});

describe('padEnd', () => {
  it('should pad a string at the end', () => {
    expect(padEnd('abc', 5)).toBe('abc  ');
    expect(padEnd('abc', 5, '_')).toBe('abc__');
  });

  it('should not pad if the string is long enough', () => {
    expect(padEnd('abcde', 5)).toBe('abcde');
    expect(padEnd('abcdef', 5)).toBe('abcdef');
  });
});

describe('pad', () => {
  it('should pad a string on both sides', () => {
    expect(pad('abc', 5)).toBe(' abc ');
    expect(pad('abc', 6)).toBe(' abc  ');
    expect(pad('abc', 7, '_')).toBe('__abc__');
  });

  it('should not pad if the string is long enough', () => {
    expect(pad('abcde', 5)).toBe('abcde');
    expect(pad('abcdef', 5)).toBe('abcdef');
  });
});
