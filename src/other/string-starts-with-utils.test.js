import { startsWith } from './string-starts-with-utils.js';

describe('startsWith', () => {
  it('should return true if string starts with a single prefix (case-sensitive)', () => {
    expect(startsWith('hello world', 'hello')).toBe(true);
    expect(startsWith('Hello World', 'Hello')).toBe(true);
  });

  it('should return false if string does not start with a single prefix (case-sensitive)', () => {
    expect(startsWith('hello world', 'world')).toBe(false);
    expect(startsWith('Hello World', 'hello')).toBe(false);
  });

  it('should return true if string starts with any of the provided prefixes (case-sensitive)', () => {
    expect(startsWith('apple pie', ['banana', 'apple'])).toBe(true);
    expect(startsWith('orange juice', ['apple', 'orange'])).toBe(true);
  });

  it('should return false if string does not start with any of the provided prefixes (case-sensitive)', () => {
    expect(startsWith('grape soda', ['apple', 'banana'])).toBe(false);
  });

  it('should return true if string starts with a single prefix (case-insensitive)', () => {
    expect(startsWith('Hello World', 'hello', 0, false)).toBe(true);
    expect(startsWith('apple pie', 'APPLE', 0, false)).toBe(true);
  });

  it('should return true if string starts with any of the provided prefixes (case-insensitive)', () => {
    expect(startsWith('Apple Pie', ['banana', 'apple'], 0, false)).toBe(true);
    expect(startsWith('Orange Juice', ['apple', 'orange'], 0, false)).toBe(true);
  });

  it('should handle position argument', () => {
    expect(startsWith('hello world', 'world', 6)).toBe(true);
    expect(startsWith('hello world', 'world', 0)).toBe(false);
    expect(startsWith('hello world', 'World', 6, false)).toBe(true);
  });

  it('should return false for non-string inputs for str', () => {
    expect(startsWith(null, 'hello')).toBe(false);
    expect(startsWith(undefined, 'hello')).toBe(false);
    expect(startsWith(123, '1')).toBe(false);
    expect(startsWith({}, 'o')).toBe(false);
  });

  it('should return false for non-string prefixes in search array', () => {
    expect(startsWith('hello', ['he', 123])).toBe(true); // 'he' matches
    expect(startsWith('123', [123])).toBe(false); // 123 is not a string
    expect(startsWith('hello', [null, 'he'])).toBe(true);
  });

  it('should return false if search is an empty array', () => {
    expect(startsWith('hello', [])).toBe(false);
  });

  it('should return false if search is an empty string', () => {
    expect(startsWith('hello', '')).toBe(true); // An empty string is considered a prefix at any position
    expect(startsWith('', '')).toBe(true);
  });
});
