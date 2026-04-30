const last = require('./fundamental-array-last');

describe('last', () => {
  test('returns the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('returns the only element for a single element array', () => {
    expect(last([42])).toBe(42);
  });

  test('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });
});
