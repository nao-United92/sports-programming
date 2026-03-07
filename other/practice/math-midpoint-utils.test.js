const midpoint = require('./math-midpoint-utils');

describe('midpoint', () => {
  test('calculates 2D midpoint between (0,0) and (4,4)', () => {
    expect(midpoint([0, 0], [4, 4])).toEqual([2, 2]);
  });

  test('calculates 3D midpoint between (0,0,0) and (2,4,6)', () => {
    expect(midpoint([0, 0, 0], [2, 4, 6])).toEqual([1, 2, 3]);
  });

  test('returns empty array if points have different dimensions', () => {
    expect(midpoint([0, 0], [1, 1, 1])).toEqual([]);
  });
});
