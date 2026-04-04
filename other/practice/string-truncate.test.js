const truncate = require('./string-truncate');

describe('truncate', () => {
  test('should not truncate if string length is less than or equal to target length', () => {
    expect(truncate('Hello', 5)).toBe('Hello');
    expect(truncate('Hello', 10)).toBe('Hello');
  });

  test('should truncate string and add ellipsis', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...');
  });

  test('should support custom ending', () => {
    expect(truncate('Hello World', 8, '!!')).toBe('Hello !!');
  });

  test('should handle very short target lengths', () => {
    expect(truncate('Hello World', 3)).toBe('...');
  });
});
