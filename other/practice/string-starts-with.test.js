const { startsWith } = require('./string-starts-with');

describe('startsWith', () => {
  it('should return true if the string starts with the prefix', () => {
    expect(startsWith('hello world', 'hello')).toBe(true);
  });

  it('should return false if the string does not start with the prefix', () => {
    expect(startsWith('hello world', 'world')).toBe(false);
  });

  it('should return true if the prefix is an empty string', () => {
    expect(startsWith('hello world', '')).toBe(true);
  });

  it('should return true for an exact match', () => {
    expect(startsWith('hello', 'hello')).toBe(true);
  });

  it('should return false if the string is shorter than the prefix', () => {
    expect(startsWith('hi', 'hello')).toBe(false);
  });

  it('should handle case sensitivity', () => {
    expect(startsWith('Hello World', 'hello')).toBe(false);
    expect(startsWith('Hello World', 'Hello')).toBe(true);
  });

  it('should throw an error if arguments are not strings', () => {
    expect(() => startsWith(123, '1')).toThrow(TypeError);
    expect(() => startsWith('abc', null)).toThrow(TypeError);
  });
});
