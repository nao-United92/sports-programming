const words = require('./fundamental-string-words');

describe('words', () => {
  test('should split string into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('should use a custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('should return empty array for empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('should handle strings with no matches', () => {
    expect(words('!!!', /[a-z]+/g)).toEqual([]);
  });
});
