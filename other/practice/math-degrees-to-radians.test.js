const degreesToRadians = require('./math-degrees-to-radians');

describe('degreesToRadians', () => {
  test('converts 180 degrees to PI radians', () => {
    expect(degreesToRadians(180)).toBe(Math.PI);
  });

  test('converts 90 degrees to PI/2 radians', () => {
    expect(degreesToRadians(90)).toBe(Math.PI / 2);
  });

  test('converts 0 degrees to 0 radians', () => {
    expect(degreesToRadians(0)).toBe(0);
  });
});
