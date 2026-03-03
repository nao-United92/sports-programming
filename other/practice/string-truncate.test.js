const truncate = require('./string-truncate');

describe('string-truncate', () => {
  test('truncates long strings', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('does not truncate short strings', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('handles maximum length equal to string length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('handles empty strings', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('handles non-string inputs', () => {
    expect(truncate(null, 5)).toBe(null);
  });
});
