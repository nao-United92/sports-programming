import stringTruncate from './string-truncate';

describe('stringTruncate', () => {
  test('should truncate a string longer than maxLength and add ellipsis', () => {
    expect(stringTruncate('hello world', 7)).toBe('hell...');
  });

  test('should not truncate a string shorter than maxLength', () => {
    expect(stringTruncate('hello', 7)).toBe('hello');
  });

  test('should not truncate a string equal to maxLength', () => {
    expect(stringTruncate('hello!!', 7)).toBe('hello!!');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringTruncate('', 5)).toBe('');
  });

  test('should handle maxLength less than 3 by always truncating to 0 and adding ellipsis', () => {
    expect(stringTruncate('hello world', 0)).toBe('...');
    expect(stringTruncate('hello world', 1)).toBe('...');
    expect(stringTruncate('hello world', 2)).toBe('...');
  });

  test('should handle edge case where string length equals maxLength - 3', () => {
    expect(stringTruncate('abc', 6)).toBe('abc'); // 'abc' + '...' would be 6, but it's not truncated
  });

  test('should not truncate when string length is less than or equal to maxLength and does not need ellipsis', () => {
    expect(stringTruncate('abcd', 6)).toBe('abcd'); // 'abcd' length 4 is <= 6, no truncation needed.
  });
});