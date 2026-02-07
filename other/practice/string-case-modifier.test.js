const { capitalize } = require('./string-case-modifier');

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should work with an already capitalized string', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('should work with a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle non-string inputs gracefully', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
  });

  it('should handle strings with leading/trailing spaces', () => {
    // Note: This implementation does not trim spaces.
    expect(capitalize('  leading space')).toBe('  leading space');
    expect(capitalize('trailing space  ')).toBe('Trailing space  ');
  });
});
