const zipLongest = require('./array-zip-longest');

describe('zipLongest', () => {
  test('zips arrays of different lengths with default value', () => {
    expect(zipLongest('N/A', [1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'N/A'],
    ]);
  });

  test('zips same-length arrays normally', () => {
    expect(zipLongest(null, [1, 2], [3, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test('handles empty input', () => {
    expect(zipLongest(0)).toEqual([]);
  });

  test('zips three arrays', () => {
    expect(zipLongest(null, [1], [2, 3], [4])).toEqual([
      [1, 2, 4],
      [null, 3, null],
    ]);
  });
});
