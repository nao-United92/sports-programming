const moveIndex = require('./array-move-index');

describe('moveIndex', () => {
  test('moves element', () => {
    expect(moveIndex([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
  });
});
