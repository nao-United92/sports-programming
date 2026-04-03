const stringCaesarCipher = require('./string-caesar-cipher');

describe('stringCaesarCipher', () => {
  test('shifts abc by 3 to def', () => {
    expect(stringCaesarCipher('abc', 3)).toBe('def');
  });

  test('shifts ABC by 3 to DEF', () => {
    expect(stringCaesarCipher('ABC', 3)).toBe('DEF');
  });

  test('shifts xyz by 3 to abc (wrap around)', () => {
    expect(stringCaesarCipher('xyz', 3)).toBe('abc');
  });

  test('shifts with negative shift', () => {
    expect(stringCaesarCipher('def', -3)).toBe('abc');
  });

  test('ignores non-alphabetic characters', () => {
    expect(stringCaesarCipher('a b!', 1)).toBe('b c!');
  });
});
