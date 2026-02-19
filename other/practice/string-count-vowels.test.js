
const stringCountVowels = require('./string-count-vowels');

describe('stringCountVowels', () => {
  test('counts vowels in string', () => {
    expect(stringCountVowels('hello')).toBe(2);
  });

  test('counts uppercase vowels', () => {
    expect(stringCountVowels('HELLO')).toBe(2);
  });

  test('returns 0 for no vowels', () => {
    expect(stringCountVowels('rhythm')).toBe(0);
  });
});
