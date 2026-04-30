const initial = require('./fundamental-array-initial');

describe('initial', () => {
  test('returns all elements except the last one', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  test('returns an empty array for a single element array', () => {
    expect(initial([1])).toEqual([]);
  });

  test('returns an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });
});
