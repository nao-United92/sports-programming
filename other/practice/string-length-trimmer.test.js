const { truncate } = require('./string-length-trimmer');

describe('truncate', () => {
  it('should not truncate if string length is less than or equal to limit', () => {
    expect(truncate('hello world', 20)).toBe('hello world');
    expect(truncate('hello world', 11)).toBe('hello world');
  });

  it('should truncate and add default omission', () => {
    expect(truncate('hello world, this is a long string', 20)).toBe('hello world, this i...');
  });

  it('should use custom omission', () => {
    expect(truncate('hello world, this is a long string', 20, '---')).toBe('hello world, this---');
  });

  it('should handle length smaller than omission length', () => {
    expect(truncate('abc', 2)).toBe('...');
    expect(truncate('abc', 2, '')).toBe('ab');
  });

  it('should return empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('');
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
  });

  it('should handle zero length limit', () => {
    expect(truncate('hello', 0)).toBe('...');
    expect(truncate('hello', 0, '')).toBe('');
  });

  it('should handle very small length limit', () => {
    expect(truncate('hello', 1)).toBe('...');
    expect(truncate('hello', 1, '--')).toBe('--');
  });
});
