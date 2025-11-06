import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  const longString = 'This is a very long string that needs to be truncated.';

  it('should not truncate a string shorter than the specified length', () => {
    expect(truncate('short', 10)).toBe('short');
  });

  it('should truncate a string longer than the specified length', () => {
    expect(truncate(longString, 20)).toBe('This is a very lo...');
  });

  it('should use the default suffix', () => {
    expect(truncate(longString, 20)).toContain('...');
  });

  it('should use a custom suffix', () => {
    expect(truncate(longString, 20, '---')).toBe('This is a very---');
  });

  it('should return the original string if input is not a string', () => {
    expect(truncate(null, 10)).toBe(null);
    expect(truncate(undefined, 10)).toBe(undefined);
    expect(truncate(12345, 10)).toBe(12345);
  });

  it('should handle edge case where length is equal to string length', () => {
    const str = 'exact length';
    expect(truncate(str, str.length)).toBe(str);
  });
});