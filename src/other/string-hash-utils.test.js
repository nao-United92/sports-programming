import { stringToHash } from './string-hash-utils';

describe('stringToHash', () => {
  test('should return a number for any string input', () => {
    expect(typeof stringToHash('hello')).toBe('number');
    expect(typeof stringToHash('')).toBe('number');
    expect(typeof stringToHash('12345')).toBe('number');
  });

  test('should return consistent hash for the same string', () => {
    expect(stringToHash('test')).toBe(stringToHash('test'));
    expect(stringToHash('another string')).toBe(stringToHash('another string'));
  });

  test('should return different hashes for different strings', () => {
    expect(stringToHash('hello')).not.toBe(stringToHash('world'));
    expect(stringToHash('abc')).not.toBe(stringToHash('abcd'));
  });

  test('should handle empty string', () => {
    expect(stringToHash('')).toBeDefined();
    expect(stringToHash('')).toBeGreaterThanOrEqual(0);
  });

  test('should produce a positive 32-bit integer hash', () => {
    const hash = stringToHash('test string for positive hash');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(0xFFFFFFFF);
  });

  test('should handle strings with special characters', () => {
    expect(stringToHash('!@#$%^&*()_+')).toBeDefined();
    expect(stringToHash('你好世界')).toBeDefined(); // Chinese characters
    expect(stringToHash('こんにちは世界')).toBeDefined(); // Japanese characters
  });
});
