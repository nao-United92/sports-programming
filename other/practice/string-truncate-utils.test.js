const { truncate } = require('./string-truncate-utils');

describe('truncate', () => {
  test('should truncate a string that is longer than the specified length', () => {
    const str = 'This is a long string';
    expect(truncate(str, 10)).toBe('This is...');
  });

  test('should not truncate a string that is shorter than or equal to the specified length', () => {
    const str = 'Short';
    expect(truncate(str, 10)).toBe('Short');
  });

  test('should use a custom omission string if provided', () => {
    const str = 'This is a long string';
    expect(truncate(str, 15, '... (more)')).toBe('This i... (more)');
  });

  test('should return an empty string if the input string is empty', () => {
    expect(truncate('', 10)).toBe('');
  });

  test('should handle length being zero by returning the omission', () => {
    const str = 'This is a long string';
    expect(truncate(str, 0)).toBe('...');
  });

  test('should return the omission if length is less than omission length', () => {
    const str = 'This is a long string';
    expect(truncate(str, 2, '...')).toBe('...');
  });
});
