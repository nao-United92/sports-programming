const { truncate } = require('./string-truncate-utils');

describe('truncate', () => {
  const str = 'hi-diddly-ho there, neighborino';

  it('should truncate a string to a default length of 30', () => {
    expect(truncate(str)).toBe('hi-diddly-ho there, neighbo...');
  });

  it('should not truncate if string is shorter than length', () => {
    expect(truncate(str, { length: str.length })).toBe(str);
  });

  it('should truncate to a specified length', () => {
    expect(truncate(str, { length: 24 })).toBe('hi-diddly-ho there, n...');
  });

  it('should use a custom omission string', () => {
    expect(truncate(str, { omission: ' [...]' })).toBe('hi-diddly-ho there, neig [...]');
  });

  it('should not truncate on a separator if it does not exist', () => {
    expect(truncate(str, { length: 20, separator: '_' })).toBe('hi-diddly-ho ther...');
  });

  it('should truncate with a separator pattern', () => {
    expect(truncate(str, { length: 24, separator: ' ' })).toBe('hi-diddly-ho there,...');
  });

  it('should truncate with a regex separator', () => {
    expect(truncate(str, { length: 24, separator: /,? +/ })).toBe('hi-diddly-ho there...');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(truncate(null)).toBe('');
    expect(truncate(undefined)).toBe('');
  });

  it('should handle omission string being longer than length', () => {
    expect(truncate(str, { length: 5, omission: '...' })).toBe('hi...');
    expect(truncate(str, { length: 3, omission: '...' })).toBe('...');
    expect(truncate(str, { length: 2, omission: '...' })).toBe('...');
  });
});