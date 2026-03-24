const partitionIndices = require('./array-partition-indices');

describe('partitionIndices', () => {
  test('partitions indices correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    const [evens, odds] = partitionIndices(arr, n => n % 2 === 0);
    expect(evens).toEqual([1, 3]); // indices of 2 and 4
    expect(odds).toEqual([0, 2, 4]); // indices of 1, 3, 5
  });

  test('handles empty array', () => {
    expect(partitionIndices([], x => x)).toEqual([[], []]);
  });
});
