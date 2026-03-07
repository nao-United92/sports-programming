const distance = require('./math-distance-utils');

describe('distance', () => {
  test('calculates 2D distance between (0,0) and (3,4)', () => {
    expect(distance([0, 0], [3, 4])).toBe(5);
  });

  test('calculates 3D distance between (0,0,0) and (1,1,1)', () => {
    expect(distance([0, 0, 0], [1, 1, 1])).toBeCloseTo(Math.sqrt(3), 5);
  });

  test('returns 0 if points have different dimensions', () => {
    expect(distance([0, 0], [1, 1, 1])).toBe(0);
  });
});
