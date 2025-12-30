import truncate from './string-truncate-utils';

describe('truncate', () => {
  test('should truncate a string that is too long', () => {
    expect(truncate('hi-diddly-ho there, neighborino', 24)).toBe('hi-diddly-ho there,...');
  });

  test('should not truncate a string that is short enough', () => {
    expect(truncate('short', 10)).toBe('short');
  });

  test('should use a custom omission string', () => {
    expect(truncate('hello world', 10, '...')).toBe('hello w...');
  });

  test('should handle edge cases where length is less than omission length', () => {
    expect(truncate('test', 2, '...')).toBe('..');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(truncate(null, 10)).toBe('');
  });
});