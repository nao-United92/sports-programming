import partition from './partition-utils.js';

describe('partition', () => {
  test('should partition an array of numbers based on a predicate', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;
    const [evens, odds] = partition(numbers, isEven);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should partition an array of objects based on a property', () => {
    const users = [
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'fred',   'age': 40, 'active': true },
      { 'user': 'pebbles', 'age': 1,  'active': false }
    ];
    const [activeUsers, inactiveUsers] = partition(users, ({ active }) => active);
    expect(activeUsers).toEqual([{ 'user': 'fred', 'age': 40, 'active': true }]);
    expect(inactiveUsers).toEqual([
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': false }
    ]);
  });

  test('should return two empty arrays for an empty input array', () => {
    expect(partition([], () => true)).toEqual([[], []]);
  });

  test('should handle cases where all elements fall into one partition', () => {
    const numbers = [1, 3, 5];
    const [evens, odds] = partition(numbers, (n) => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should handle null or undefined input', () => {
    expect(partition(null, () => true)).toEqual([[], []]);
    expect(partition(undefined, () => true)).toEqual([[], []]);
  });
});
