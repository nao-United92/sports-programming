const unzip = require('./array-unzip');

describe('unzip', () => {
  test('regroups the elements of a zipped array', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  test('handles groups of different lengths', () => {
    const zipped = [['a', 1], ['b']];
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, undefined]]);
  });

  test('returns an empty array if input is not an array or is empty', () => {
    expect(unzip([])).toEqual([]);
    expect(unzip(null)).toEqual([]);
  });
});
