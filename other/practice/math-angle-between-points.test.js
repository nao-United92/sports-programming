const mathAngleBetweenPoints = require('./math-angle-between-points');

describe('mathAngleBetweenPoints', () => {
  test('angle for (1,0), (0,0), (0,1) should be 90 degrees', () => {
    expect(mathAngleBetweenPoints({x: 1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1})).toBeCloseTo(90);
  });

  test('angle for (1,0), (0,0), (1,0) should be 0 degrees', () => {
    expect(mathAngleBetweenPoints({x: 1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0})).toBeCloseTo(0);
  });

  test('angle for (1,0), (0,0), (-1,0) should be 180 degrees', () => {
    expect(mathAngleBetweenPoints({x: 1, y: 0}, {x: 0, y: 0}, {x: -1, y: 0})).toBeCloseTo(180);
  });

  test('angle for (1,1), (0,0), (1,0) should be 45 degrees', () => {
    expect(mathAngleBetweenPoints({x: 1, y: 1}, {x: 0, y: 0}, {x: 1, y: 0})).toBeCloseTo(45);
  });
});
