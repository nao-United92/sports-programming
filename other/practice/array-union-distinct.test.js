
const arrayUnionDistinct = require('./array-union-distinct');

describe('arrayUnionDistinct', () => {
  test('unions two arrays without duplicates', () => {
    expect(arrayUnionDistinct([1, 2], [2, 3])).toEqual([1, 2, 3]);
  });

  test('handles empty arrays', () => {
    expect(arrayUnionDistinct([], [1, 2])).toEqual([1, 2]);
  });
});
