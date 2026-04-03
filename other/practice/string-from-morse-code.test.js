const stringFromMorseCode = require('./string-from-morse-code');

describe('stringFromMorseCode', () => {
  test('converts SOS from Morse code', () => {
    expect(stringFromMorseCode('... --- ...')).toBe('SOS');
  });

  test('converts Hello World from Morse code', () => {
    expect(stringFromMorseCode('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
  });

  test('converts numbers from Morse code', () => {
    expect(stringFromMorseCode('.---- ..--- ...--')).toBe('123');
  });
});
