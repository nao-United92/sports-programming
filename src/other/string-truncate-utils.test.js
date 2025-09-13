import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  it('should truncate a string that is longer than the specified length', () => {
    const str = 'hi-diddly-ho there, neighborino';
    expect(truncate(str, { length: 24 })).toBe('hi-diddly-ho there,...');
  });

  it('should not truncate a string that is shorter than or equal to the specified length', () => {
    const str = 'hi-diddly-ho';
    expect(truncate(str, { length: 24 })).toBe('hi-diddly-ho');
  });

  it('should use the default length if none is specified', () => {
    const str = 'hi-diddly-ho there, neighborino';
    expect(truncate(str)).toBe('hi-diddly-ho there, neighbo...');
  });

  it('should use the default omission if none is specified', () => {
    const str = 'hi-diddly-ho there, neighborino';
    expect(truncate(str, { length: 24 })).toBe('hi-diddly-ho there,...');
  });

  it('should allow a custom omission string', () => {
    const str = 'hi-diddly-ho there, neighborino';
    expect(truncate(str, { length: 24, omission: ' [...]' })).toBe('hi-diddly-ho [...]');
  });

  it('should handle an omission string that is longer than the length', () => {
    const str = 'hi-diddly-ho';
    expect(truncate(str, { length: 5, omission: '...' })).toBe('hi...');
  });

  it('should return an empty string if the input string is null or undefined', () => {
    expect(truncate(null)).toBe('');
    expect(truncate(undefined)).toBe('');
  });

  it('should handle edge case where length is less than omission length', () => {
    const str = 'abcdefghij';
    expect(truncate(str, { length: 2, omission: '...' })).toBe('...');
  });
});
