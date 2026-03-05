const zip = require('./array-zip');

describe('zip', () => {
  test('zips multiple arrays together', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('handles arrays of different lengths', () => {
    expect(zip(['a', 'b'], [1])).toEqual([
      ['a', 1],
      ['b', undefined],
    ]);
  });

  test('returns an empty array if no input', () => {
    expect(zip()).toEqual([]);
  });
});
