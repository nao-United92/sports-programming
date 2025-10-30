const { truncate } = require('./string-truncate-utils.js');

describe('truncate', () => {
  it('should not truncate if string is shorter than or equal to length', () => {
    expect(truncate('hello', { length: 10 })).toBe('hello');
    expect(truncate('hello world', { length: 11 })).toBe('hello world');
  });

  it('should truncate a string and add default omission', () => {
    expect(truncate('hello world', { length: 7 })).toBe('hell...');
  });

  it('should use custom omission', () => {
    expect(truncate('hello world', { length: 8, omission: '---' })).toBe('hello---');
  });

  it('should handle empty string', () => {
    expect(truncate('', { length: 5 })).toBe('');
  });

  it('should handle string shorter than omission length', () => {
    expect(truncate('a', { length: 2, omission: '...' })).toBe('...');
    expect(truncate('ab', { length: 3, omission: '...' })).toBe('ab...');
  });

  it('should return omission if length is less than or equal to omission length', () => {
    expect(truncate('long string', { length: 3, omission: '...' })).toBe('...');
    expect(truncate('long string', { length: 2, omission: '...' })).toBe('...');
  });

  it('should use default length if not provided', () => {
    const longString = 'This is a very long string that needs to be truncated.';
    expect(truncate(longString)).toBe('This is a very long stri...'); // Default length is 30
  });

  it('should handle non-string input', () => {
    expect(truncate(null)).toBe('');
    expect(truncate(undefined)).toBe('');
    expect(truncate(123)).toBe('');
    expect(truncate({})).toBe('');
  });
});
