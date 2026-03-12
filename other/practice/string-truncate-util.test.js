const truncate = require('./string-truncate-util');

describe('truncate', () => {
  test('truncates string to given length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });
  test('does not truncate if string is shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });
});
