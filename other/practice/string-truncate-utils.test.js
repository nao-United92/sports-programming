import truncateString from './string-truncate-utils';

describe('truncateString', () => {
  test('should truncate a string to the specified maxLength with default indicator', () => {
    expect(truncateString('This is a long string', 10)).toBe('This is...');
    expect(truncateString('Hello World', 5)).toBe('He...');
  });

  test('should not truncate if string length is less than or equal to maxLength', () => {
    expect(truncateString('Short', 10)).toBe('Short');
    expect(truncateString('Exact', 5)).toBe('Exact');
  });

  test('should use a custom indicator', () => {
    expect(truncateString('This is a long string', 10, '---')).toBe('This is---');
    expect(truncateString('Hello World', 5, '..')).toBe('Hel..');
  });

  test('should handle empty string', () => {
    expect(truncateString('', 10)).toBe('');
    expect(truncateString('', 0)).toBe('');
  });

  test('should handle maxLength of 0', () => {
    expect(truncateString('Hello', 0)).toBe('');
    expect(truncateString('Hello', 0, '..')).toBe('');
  });

  test('should handle maxLength less than indicator length', () => {
    expect(truncateString('Hello World', 2, '...')).toBe('..'); // indicator '...' should be truncated to '..'
    expect(truncateString('Hello World', 0, '...')).toBe('');
  });

  test('should throw TypeError if first argument is not a string', () => {
    expect(() => truncateString(null, 10)).toThrow(TypeError);
    expect(() => truncateString(undefined, 10)).toThrow(TypeError);
    expect(() => truncateString(123, 10)).toThrow(TypeError);
  });

  test('should throw TypeError if maxLength is not a non-negative integer', () => {
    expect(() => truncateString('hello', -1)).toThrow(TypeError);
    expect(() => truncateString('hello', 1.5)).toThrow(TypeError);
    expect(() => truncateString('hello', '5')).toThrow(TypeError);
  });

  test('should throw TypeError if indicator is not a string', () => {
    expect(() => truncateString('hello', 5, null)).toThrow(TypeError);
    expect(() => truncateString('hello', 5, 123)).toThrow(TypeError);
  });
});