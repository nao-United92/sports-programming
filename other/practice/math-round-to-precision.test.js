const roundToPrecision = require('./math-round-to-precision');

describe('roundToPrecision', () => {
  test('rounds 3.14159 to 2 decimal places', () => {
    expect(roundToPrecision(3.14159, 2)).toBe(3.14);
  });

  test('rounds 3.14159 to 3 decimal places', () => {
    expect(roundToPrecision(3.14159, 3)).toBe(3.142);
  });

  test('rounds to integer by default', () => {
    expect(roundToPrecision(3.54)).toBe(4);
  });
});
