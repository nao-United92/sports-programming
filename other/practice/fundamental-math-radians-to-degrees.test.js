const radiansToDegrees = require('./fundamental-math-radians-to-degrees');

describe('radiansToDegrees', () => {
  test('converts PI radians to 180 degrees', () => {
    expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
  });

  test('converts PI/2 radians to 90 degrees', () => {
    expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
  });

  test('converts 0 radians to 0 degrees', () => {
    expect(radiansToDegrees(0)).toBe(0);
  });
});
