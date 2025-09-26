const { truncate } = require('./string-truncate-utils.js');

describe('truncate', () => {
  test('should truncate a string to the specified length', () => {
    expect(truncate('hello world', { length: 7 })).toBe('hell...');
  });

  test('should use default length and omission', () => {
    expect(truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBe('Lorem ipsum dolor sit a...');
  });

  test('should not truncate if string is shorter than length', () => {
    expect(truncate('hello', { length: 10 })).toBe('hello');
  });

  test('should handle custom omission', () => {
    expect(truncate('hello world', { length: 8, omission: '--' })).toBe('hello--');
  });

  test('should handle empty string', () => {
    expect(truncate('', { length: 5 })).toBe('');
  });

  test('should handle non-string input', () => {
    expect(truncate(null, { length: 5 })).toBe(null);
    expect(truncate(undefined, { length: 5 })).toBe(undefined);
    expect(truncate(12345, { length: 3 })).toBe(12345);
  });
});
