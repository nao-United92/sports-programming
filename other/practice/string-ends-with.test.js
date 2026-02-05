const { endsWith } = require('./string-ends-with');

describe('endsWith', () => {
  it('should return true if the string ends with the suffix', () => {
    expect(endsWith('hello world', 'world')).toBe(true);
  });

  it('should return false if the string does not end with the suffix', () => {
    expect(endsWith('hello world', 'hello')).toBe(false);
  });

  it('should return true if the suffix is an empty string', () => {
    expect(endsWith('hello world', '')).toBe(true);
  });

  it('should return true for an exact match', () => {
    expect(endsWith('world', 'world')).toBe(true);
  });

  it('should return false if the string is shorter than the suffix', () => {
    expect(endsWith('hi', 'world')).toBe(false);
  });

  it('should handle case sensitivity', () => {
    expect(endsWith('Hello World', 'world')).toBe(false);
    expect(endsWith('Hello World', 'World')).toBe(true);
    expect(endsWith('Hello World', 'world!')).toBe(false);
  });

  it('should throw an error if arguments are not strings', () => {
    expect(() => endsWith(123, '1')).toThrow(TypeError);
    expect(() => endsWith('abc', null)).toThrow(TypeError);
  });
});
