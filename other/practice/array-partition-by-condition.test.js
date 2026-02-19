
const arrayPartitionByCondition = require('./array-partition-by-condition');

describe('arrayPartitionByCondition', () => {
  test('partitions numbers into even and odd', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;
    const [evens, odds] = arrayPartitionByCondition(nums, isEven);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('partitions strings by length', () => {
    const words = ['a', 'bb', 'ccc', 'dd'];
    const isShort = (s) => s.length < 2;
    const [short, long] = arrayPartitionByCondition(words, isShort);
    expect(short).toEqual(['a']);
    expect(long).toEqual(['bb', 'ccc', 'dd']);
  });

  test('throws error for non-array input', () => {
    expect(() => arrayPartitionByCondition('not array', () => true)).toThrow();
  });
});
