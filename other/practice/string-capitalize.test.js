const { capitalize } = require('./string-capitalize');

describe('capitalize', () => {
  it('should capitalize the first letter of a string and lowercase the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
    expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
  });

  it('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle a single-character string', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });
  
  it('should work correctly with leading spaces (though typical use case expects trimmed string)', () => {
    expect(capitalize('  hello')).toBe('  hello'); // Note: Does not trim. User should handle trimming if desired.
  });

  it('should throw an error if not given a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => capitalize(undefined)).toThrow(TypeError);
    expect(() => capitalize({})).toThrow(TypeError);
  });
});
