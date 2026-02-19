
const mathClampNumber = require('./math-clamp-number');

describe('mathClampNumber', () => {
  test('clamps value within range', () => {
    expect(mathClampNumber(5, 0, 10)).toBe(5);
  });

  test('clamps value to min if below', () => {
    expect(mathClampNumber(-5, 0, 10)).toBe(0);
  });

  test('clamps value to max if above', () => {
    expect(mathClampNumber(15, 0, 10)).toBe(10);
  });
});
