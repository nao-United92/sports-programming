const tail = require('./fundamental-array-tail');

describe('tail', () => {
  test('returns all elements except the first one', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test('returns an empty array for a single element array', () => {
    expect(tail([1])).toEqual([]);
  });

  test('returns an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });
});
