const partitionMultiple = require('./array-partition-multiple');

describe('partitionMultiple', () => {
  test('partitions array into multiple groups', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const isEven = (x) => x % 2 === 0;
    const isMultipleOfThree = (x) => x % 3 === 0;
    
    // First predicate matches 2, 4, 6, 8, 10
    // Second predicate matches 3, 9 (6 is already taken)
    // Remainder: 1, 5, 7
    const result = partitionMultiple(arr, isEven, isMultipleOfThree);
    expect(result).toEqual([
      [2, 4, 6, 8, 10],
      [3, 9],
      [1, 5, 7],
    ]);
  });

  test('handles no matches', () => {
    expect(partitionMultiple([1, 2], (x) => x > 10)).toEqual([[], [1, 2]]);
  });

  test('handles empty array', () => {
    expect(partitionMultiple([], (x) => true)).toEqual([[], []]);
  });
});
