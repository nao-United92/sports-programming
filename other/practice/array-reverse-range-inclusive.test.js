const reverseRangeInclusive = require('./array-reverse-range-inclusive');

describe('reverseRangeInclusive', () => {
  test('reverses range inclusive', () => {
    // 0:1, 1:2, 2:3, 3:4, 4:5
    // reverse 1 to 3 -> 2, 3, 4 -> 4, 3, 2
    expect(reverseRangeInclusive([1, 2, 3, 4, 5], 1, 3)).toEqual([1, 4, 3, 2, 5]);
  });
});
