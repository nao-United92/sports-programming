const {
  truncate
} = require('./string-truncate-utils');

describe('truncate', () => {
  const str = 'This is a long string';

  test('should truncate a string that is longer than the specified number', () => {
    expect(truncate(str, 10)).toBe('This is a ...');
  });

  test('should not truncate a string that is shorter than or equal to the specified number', () => {
    expect(truncate(str, 21)).toBe(str);
    expect(truncate('short', 10)).toBe('short');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate(undefined, 10)).toBe('');
  });

  test('should handle num being 0', () => {
    expect(truncate(str, 0)).toBe('...');
  });
});