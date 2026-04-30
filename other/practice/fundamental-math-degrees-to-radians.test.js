const degreesToRadians = require('./fundamental-math-degrees-to-radians');

describe('degreesToRadians', () => {
  test('converts 180 degrees to PI radians', () => {
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
  });

  test('converts 90 degrees to PI/2 radians', () => {
    expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
  });

  test('converts 0 degrees to 0 radians', () => {
    expect(degreesToRadians(0)).toBe(0);
  });
});
