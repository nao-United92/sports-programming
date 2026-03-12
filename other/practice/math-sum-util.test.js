const sum = require('./math-sum-util');

describe('sum', () => {
  test('sums multiple numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
  test('returns 0 for no arguments', () => {
    expect(sum()).toBe(0);
  });
});
