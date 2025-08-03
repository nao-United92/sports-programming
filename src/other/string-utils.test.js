const { truncate } = require('./string-utils');

describe('truncate', () => {
  test('should truncate a string that is longer than the max length', () => {
    expect(truncate('hello world', 5)).toBe('he...');
  });

  test('should not truncate a string that is shorter than the max length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should use a custom suffix', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello --');
  });
});