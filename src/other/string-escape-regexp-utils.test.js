import { escapeRegExp } from './string-escape-regexp-utils.js';

describe('escapeRegExp', () => {
  it('should return an empty string for an empty input', () => {
    expect(escapeRegExp('')).toBe('');
  });

  it('should return the same string if no special regex characters are present', () => {
    expect(escapeRegExp('hello')).toBe('hello');
    expect(escapeRegExp('123abc')).toBe('123abc');
    expect(escapeRegExp('foo\-bar_baz')).toBe('foo\\-bar_baz');
  });

  it('should escape all special regex characters', () => {
    const specialChars = '.*+?^${}()|[]\\';
    const expected = '\\.\\*\\+\\?\\^\\$\\{\\\}\\(\\)\\\|\\[\\]\\\\';
    expect(escapeRegExp(specialChars)).toBe(expected);
  });

  it('should escape a string with mixed special and normal characters', () => {
    const input = 'foo.bar?baz*';
    const expected = 'foo\\.bar\\?baz\\*';
    expect(escapeRegExp(input)).toBe(expected);
  });

  it('should allow the escaped string to be used in a RegExp to match literally', () => {
    const searchString = 'foo.bar?baz*';
    const escapedSearchString = escapeRegExp(searchString);
    const regex = new RegExp(escapedSearchString);

    expect('This is foo.bar?baz* in a sentence.').toMatch(regex);
    expect('This is not a match.').not.toMatch(regex);
    expect(searchString).toMatch(regex);
  });

  it('should handle a string that is already partially escaped', () => {
    const input = 'foo\\.bar\\?baz\\*';
    const expected = 'foo\\\\\\.bar\\\\\\?baz\\\\\\*'; // Each \\ needs to be escaped again
    expect(escapeRegExp(input)).toBe(expected);
  });
});
