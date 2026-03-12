const flatten = require('./array-flatten-util');

describe('flatten', () => {
  test('flattens nested arrays', () => {
    expect(flatten([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
