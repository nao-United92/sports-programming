const replaceByObject = require('./array-replace-by-object');

describe('replaceByObject', () => {
  test('replaces by object', () => {
    expect(replaceByObject([1, 2, 3], { 1: 10, 2: 20 })).toEqual([10, 20, 3]);
  });
});
