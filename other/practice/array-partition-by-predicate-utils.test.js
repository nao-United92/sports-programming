import { partitionByPredicate } from './array-partition-by-predicate-utils.js';

describe('partitionByPredicate', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false }
  ];

  it('should partition an array based on a predicate function', () => {
    const [activeUsers, inactiveUsers] = partitionByPredicate(users, ({ active }) => active);
    expect(activeUsers).toEqual([{ 'user': 'fred', 'age': 40, 'active': true }]);
    expect(inactiveUsers).toEqual([
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': false }
    ]);
  });

  it('should handle an empty array', () => {
    const [passed, failed] = partitionByPredicate([], (n) => n > 0);
    expect(passed).toEqual([]);
    expect(failed).toEqual([]);
  });

  it('should put all elements in "passed" if predicate is always true', () => {
    const [passed, failed] = partitionByPredicate([1, 2, 3], (n) => true);
    expect(passed).toEqual([1, 2, 3]);
    expect(failed).toEqual([]);
  });

  it('should put all elements in "failed" if predicate is always false', () => {
    const [passed, failed] = partitionByPredicate([1, 2, 3], (n) => false);
    expect(passed).toEqual([]);
    expect(failed).toEqual([1, 2, 3]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    partitionByPredicate(arr, (n) => n % 2 === 0);
    expect(arr).toEqual(originalArr);
  });
});