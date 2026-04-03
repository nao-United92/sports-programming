const stringToMorseCode = require('./string-to-morse-code');

describe('stringToMorseCode', () => {
  test('converts SOS to Morse code', () => {
    expect(stringToMorseCode('SOS')).toBe('... --- ...');
  });

  test('converts Hello World to Morse code', () => {
    expect(stringToMorseCode('Hello World')).toBe('.... . .-.. .-.. ---   .-- --- .-. .-.. -..');
  });

  test('converts numbers to Morse code', () => {
    expect(stringToMorseCode('123')).toBe('.---- ..--- ...--');
  });

  test('ignores unknown characters', () => {
    expect(stringToMorseCode('A!B')).toBe('.-  -...');
  });
});
