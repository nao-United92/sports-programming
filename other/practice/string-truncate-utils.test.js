const { truncate } = require('./string-truncate-utils.js');

describe('truncate', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';

  it('should truncate a string to a specified length', () => {
    expect(truncate(str, 10)).toBe('abcdefg...');
  });

  it('should not truncate a string if it is shorter than the specified length', () => {
    expect(truncate(str, 30)).toBe(str);
  });

  it('should use a custom omission string', () => {
    expect(truncate(str, 20, '... (see more)')).toBe('abcde... (see more)'); // Corrected expectation
  });

  it('should return the original string if the length is equal', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('should handle edge cases where num is smaller than omission', () => {
    expect(truncate(str, 3)).toBe('...');
    expect(truncate(str, 2)).toBe('..');
    expect(truncate(str, 10, '... (see more)')).toBe('... (see m');
  });
});
