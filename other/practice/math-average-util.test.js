const average = require('./math-average-util');

describe('average', () => {
  test('calculates average of numbers', () => {
    expect(average(1, 2, 3)).toBe(2);
  });
  test('returns 0 for no arguments', () => {
    expect(average()).toBe(0);
  });
});
