const arraySafeFirst = require('./array-safe-first-util');

describe('arraySafeFirst', () => {
  test('returns first element of non-empty array', () => {
    expect(arraySafeFirst([1, 2, 3])).toBe(1);
  });

  test('returns undefined for empty array', () => {
    expect(arraySafeFirst([])).toBeUndefined();
  });

  test('throws error for non-array input', () => {
    expect(() => arraySafeFirst('invalid')).toThrow('Input must be an array');
  });
});
