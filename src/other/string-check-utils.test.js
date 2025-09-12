import { startsWith, endsWith } from './string-check-utils';

describe('startsWith', () => {
  it('should return true if string starts with target', () => {
    expect(startsWith('abc', 'a')).toBe(true);
    expect(startsWith('abc', 'ab')).toBe(true);
  });

  it('should return false if string does not start with target', () => {
    expect(startsWith('abc', 'b')).toBe(false);
    expect(startsWith('abc', 'ac')).toBe(false);
  });

  it('should handle position argument', () => {
    expect(startsWith('abc', 'b', 1)).toBe(true);
    expect(startsWith('abc', 'c', 2)).toBe(true);
    expect(startsWith('abc', 'a', 1)).toBe(false);
  });

  it('should handle empty string or target', () => {
    expect(startsWith('', '')).toBe(true);
    expect(startsWith('abc', '')).toBe(true);
    expect(startsWith('', 'a')).toBe(false);
  });

  it('should handle null or undefined string input', () => {
    expect(startsWith(null, 'a')).toBe(false);
    expect(startsWith(undefined, 'a')).toBe(false);
    expect(startsWith(null, '')).toBe(true);
  });
});

describe('endsWith', () => {
  it('should return true if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'bc')).toBe(true);
  });

  it('should return false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'ac')).toBe(false);
  });

  it('should handle position argument', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true); // 'ab' ends with 'b'
    expect(endsWith('abc', 'a', 1)).toBe(true); // 'a' ends with 'a'
    expect(endsWith('abc', 'c', 2)).toBe(false); // 'ab' does not end with 'c'
  });

  it('should handle empty string or target', () => {
    expect(endsWith('', '')).toBe(true);
    expect(endsWith('abc', '')).toBe(true);
    expect(endsWith('', 'a')).toBe(false);
  });

  it('should handle null or undefined string input', () => {
    expect(endsWith(null, 'a')).toBe(false);
    expect(endsWith(undefined, 'a')).toBe(false);
    expect(endsWith(null, '')).toBe(true);
  });
});
