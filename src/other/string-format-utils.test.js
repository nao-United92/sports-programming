import { capitalize, truncate } from './string-format-utils.js';

describe('capitalize', () => {
  it('should capitalize the first letter of a string and lowercase the rest', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('should handle an already capitalized string', () => {
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  it('should handle a fully uppercase string', () => {
    expect(capitalize('HELLO WORLD')).toBe('Hello world');
  });

  it('should return an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle non-string inputs gracefully', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});

describe('truncate', () => {
  const str = 'hi-diddly-ho there, neighborino';

  it('should truncate a string to a specified length with default omission', () => {
    expect(truncate(str, { length: 24 })).toBe('hi-diddly-ho there,...');
  });

  it('should not truncate if string is shorter than length', () => {
    expect(truncate(str, { length: 100 })).toBe(str);
  });

  it('should use a custom omission string', () => {
    expect(truncate(str, { length: 24, omission: ' [...]' })).toBe('hi-diddly-ho t [...]');
  });

  it('should use default length if not provided', () => {
    // default length is 30
    expect(truncate(str)).toBe('hi-diddly-ho there, neighbo...');
  });

  it('should handle length being smaller than omission length', () => {
    expect(truncate(str, { length: 5, omission: '--------' })).toBe('-----');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(truncate(null)).toBe('');
    expect(truncate(undefined)).toBe('');
  });
});
