const capitalize = require('./string-capitalize');

describe('string-capitalize', () => {
  test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('handles already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('handles single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles non-string inputs', () => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(123)).toBe(123);
  });
});
