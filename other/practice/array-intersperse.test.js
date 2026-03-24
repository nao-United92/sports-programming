const intersperse = require('./array-intersperse');

describe('intersperse', () => {
  test('intersperses separator', () => {
    expect(intersperse([1, 2, 3], 0)).toEqual([1, 0, 2, 0, 3]);
  });
});
