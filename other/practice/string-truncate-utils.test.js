const truncate = require('./string-truncate-utils');

describe('truncate', () => {
  test('should truncate a string longer than the specified length with default ending', () => {
    expect(truncate('hello world', 7)).toBe('hell...');
  });

  test('should not truncate if string length is less than or equal to specified length', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hi', 5)).toBe('hi');
  });

  test('should truncate with a custom ending string', () => {
    expect(truncate('hello world', 8, '---')).toBe('hello---');
  });

  test('should handle empty string input', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should return empty string for non-string input', () => {
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
    expect(truncate(123, 5)).toBe('');
    expect(truncate({}, 5)).toBe('');
  });

  test('should handle length argument being 0', () => {
    expect(truncate('hello', 0)).toBe('...');
    expect(truncate('hello', 0, '')).toBe('');
  });

  test('should handle length argument less than end string length', () => {
    expect(truncate('hello world', 2)).toBe('..'); // default '...' length 3. 2-3=-1, so Math.max(0,-1) = 0.
    expect(truncate('hello world', 2, '---')).toBe('---'); // end.length = 3. 2-3=-1. so Math.max(0,-1) = 0.
  });

  test('should handle empty end string', () => {
    expect(truncate('hello world', 5, '')).toBe('hello');
  });

  test('should handle negative length argument', () => {
    expect(truncate('hello world', -1)).toBe('');
  });
});