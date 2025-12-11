const capitalize = require('./string-capitalize-utils');

describe('capitalize', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
    expect(capitalize('fooBar')).toBe('Foobar');
    expect(capitalize('jAvaScRipt')).toBe('Javascript');
  });

  test('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle null or undefined input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

  test('should handle single character string', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('B')).toBe('B');
  });

  test('should handle strings with leading/trailing spaces (but not trim them)', () => {
    expect(capitalize('  hello')).toBe('  hello'); // Current implementation doesn't trim
    expect(capitalize('world  ')).toBe('World  '); // Current implementation doesn't trim
  });
});
