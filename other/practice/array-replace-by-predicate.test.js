const replaceByPredicate = require('./array-replace-by-predicate');

describe('replaceByPredicate', () => {
  test('replaces by predicate', () => {
    expect(replaceByPredicate([1, 2, 3], x => x % 2 === 0, 0)).toEqual([1, 0, 3]);
  });
});
