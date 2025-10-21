const { truncateString } = require('./string-truncate-utils.js');

describe('truncateString', () => {
  test('should return the original string if it is shorter than or equal to the max length', () => {
    expect(truncateString('short string', 20)).toBe('short string');
    expect(truncateString('exact length', 12)).toBe('exact length');
  });

  test('should truncate the string and add a default suffix', () => {
    expect(truncateString('this is a long string', 10)).toBe('this is...');
  });

  test('should use a custom suffix', () => {
    expect(truncateString('this is a long string', 12, '... read more')).toBe('... read mo');
  });

  test('should handle maxLength smaller than or equal to suffix length', () => {
    expect(truncateString('any string', 2, '...')).toBe('..');
    expect(truncateString('any string', 3, '...')).toBe('...');
  });

  test('should handle empty string', () => {
    expect(truncateString('', 10)).toBe('');
  });

  test('should handle zero maxLength', () => {
    expect(truncateString('any string', 0)).toBe('');
  });
});