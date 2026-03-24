const isSubsetOf = require('./array-is-subset-of-set');

describe('isSubsetOf', () => {
  test('checks if subset', () => {
    expect(isSubsetOf([1, 2], [1, 2, 3])).toBe(true);
    expect(isSubsetOf([1, 4], [1, 2, 3])).toBe(false);
  });
});
