const splitAtIndex = require('./array-split-at-index');

describe('splitAtIndex', () => {
  test('splits at index', () => {
    expect(splitAtIndex([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
});
