import truncateWithEllipsis from './string-truncate-with-ellipsis-utils';

describe('truncateWithEllipsis', () => {
  test('should truncate a string and add ellipsis', () => {
    expect(truncateWithEllipsis('hello world', 5)).toBe('hello...');
  });

  test('should not truncate if string is already short enough', () => {
    expect(truncateWithEllipsis('hello', 5)).toBe('hello');
  });

  test('should handle empty string', () => {
    expect(truncateWithEllipsis('', 5)).toBe('');
  });

  test('should handle zero length', () => {
    expect(truncateWithEllipsis('hello world', 0)).toBe('...');
  });
});
