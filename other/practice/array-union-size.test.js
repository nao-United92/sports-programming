const unionSize = require('./array-union-size');

describe('unionSize', () => {
  test('calculates size of union', () => {
    expect(unionSize([1, 2], [2, 3])).toBe(3);
  });
});
