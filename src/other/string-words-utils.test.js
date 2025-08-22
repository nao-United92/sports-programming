import { words } from './string-words-utils';

describe('words', () => {
  it('should split a string into an array of words', () => {
    const str = 'fred, barney, & pebbles';
    expect(words(str)).toEqual(['fred', 'barney', 'pebbles']);
  });

  it('should work with a custom pattern', () => {
    const str = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    expect(words(str, pattern)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  it('should return an empty array for an empty string', () => {
    expect(words('')).toEqual([]);
  });

  it('should handle strings with no words', () => {
    expect(words(',,&')).toEqual([]);
  });
});
