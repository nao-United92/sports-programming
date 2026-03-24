const countConsecutiveDuplicates = require('./array-count-consecutive-duplicates');

describe('countConsecutiveDuplicates', () => {
  test('counts consecutive duplicates', () => {
    expect(countConsecutiveDuplicates(['a', 'a', 'b', 'c', 'c', 'c'])).toEqual([['a', 2], ['b', 1], ['c', 3]]);
  });
});
