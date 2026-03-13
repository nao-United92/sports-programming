const convertBase = require('./math-base-converter');

describe('convertBase', () => {
  test('converts decimal to binary', () => {
    expect(convertBase(10, 10, 2)).toBe('1010');
  });

  test('converts hex to decimal', () => {
    expect(convertBase('ff', 16, 10)).toBe('255');
  });

  test('converts binary to hex', () => {
    expect(convertBase('101010', 2, 16)).toBe('2a');
  });

  test('handles large bases', () => {
    expect(convertBase('z', 36, 10)).toBe('35');
  });
});
