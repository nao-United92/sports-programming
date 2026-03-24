const replaceByMap = require('./array-replace-by-map');

describe('replaceByMap', () => {
  test('replaces by map', () => {
    const map = new Map([[1, 10], [2, 20]]);
    expect(replaceByMap([1, 2, 3], map)).toEqual([10, 20, 3]);
  });
});
