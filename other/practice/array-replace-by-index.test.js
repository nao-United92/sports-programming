const replaceByIndex = require('./array-replace-by-index');

describe('replaceByIndex', () => {
  test('replaces element', () => {
    expect(replaceByIndex([1, 2, 3], 1, 4)).toEqual([1, 4, 3]);
  });
});
