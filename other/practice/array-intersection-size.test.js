const intersectionSize = require('./array-intersection-size');

describe('intersectionSize', () => {
  test('calculates size of intersection', () => {
    expect(intersectionSize([1, 2, 3], [2, 3, 4])).toBe(2);
    expect(intersectionSize([1, 2, 2], [2, 2, 3])).toBe(1); // unique intersection: {2}
  });
});
