const { repeat } = require('./string-repeat-utils');

describe('repeat', () => {
  test('should repeat a string the specified number of times', () => {
    expect(repeat('*', 3)).toBe('***');
  });

  test('should return an empty string if n is 0', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  test('should default to repeating once', () => {
    expect(repeat('abc')).toBe('abc');
  });

  test('should handle non-string inputs by converting them', () => {
    // This is a quirky behavior of the implementation, but we test it.
    expect(repeat(null, 2)).toBe('nullnull');
  });

  test('should return an empty string if str is empty', () => {
    expect(repeat('', 5)).toBe('');
  });
});
