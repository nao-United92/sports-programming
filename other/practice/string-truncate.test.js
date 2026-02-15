const truncateString = require('./string-truncate');

describe('truncateString', () => {
  test('should truncate a string and add ellipsis if it exceeds maxLength', () => {
    expect(truncateString('This is a long string', 10)).toBe('This is...');
  });

  test('should not truncate if string length is less than or equal to maxLength', () => {
    expect(truncateString('Short string', 20)).toBe('Short string');
    expect(truncateString('Exact length', 12)).toBe('Exact length');
  });

  test('should handle an empty string', () => {
    expect(truncateString('', 10)).toBe('');
  });

  test('should handle maxLength being 0', () => {
    expect(truncateString('abc', 0)).toBe('');
    expect(truncateString('abc', 0, '..')).toBe('');
  });

  test('should use a custom suffix if provided', () => {
    expect(truncateString('This is a long string', 10, '...ReadMore')).toBe('...ReadMor');
    expect(truncateString('This is a long string', 5, '..')).toBe('Thi..');
  });

  test('should return only suffix if maxLength is too small for both string and suffix', () => {
    expect(truncateString('abc', 2, '...')).toBe('..');
    expect(truncateString('abc', 1, '...')).toBe('.');
    expect(truncateString('abc', 3, '...')).toBe('abc'); // original is returned if no truncation
    expect(truncateString('abcdef', 3, '...')).toBe('...'); // edge case where suffix consumes part of maxLength
  });


  test('should throw an error if the first argument is not a string', () => {
    expect(() => truncateString(123, 5)).toThrow('First argument must be a string.');
  });

  test('should throw an error if maxLength is not a number or negative', () => {
    expect(() => truncateString('abc', '5')).toThrow('Second argument (maxLength) must be a non-negative integer.');
    expect(() => truncateString('abc', -1)).toThrow('Second argument (maxLength) must be a non-negative integer.');
    expect(() => truncateString('abc', 5.5)).toThrow('Second argument (maxLength) must be a non-negative integer.');
  });

  test('should throw an error if suffix is not a string', () => {
    expect(() => truncateString('abc', 5, 123)).toThrow('Third argument (suffix) must be a string.');
  });
});
