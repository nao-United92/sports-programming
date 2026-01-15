import { partition } from './array-partition-utils.js';

describe('partition', () => {
  test('should partition an array based on a function', () => {
    const arr = [1, 2, 3, 4];
    const isEven = n => n % 2 === 0;
    expect(partition(arr, isEven)).toEqual([[2, 4], [1, 3]]);
  });

  test('should work with objects', () => {
    const users = [
      { user: 'barney', age: 36, active: false },
      { user: 'fred', age: 40, active: true },
      { user: 'pebbles', age: 1, active: false }
    ];
    const result = partition(users, o => o.active);
    expect(result[0]).toEqual([{ user: 'fred', age: 40, active: true }]);
    expect(result[1]).toEqual([
      { user: 'barney', age: 36, active: false },
      { user: 'pebbles', age: 1, active: false }
    ]);
  });

  test('should return two empty arrays for an empty array', () => {
    expect(partition([], () => true)).toEqual([[], []]);
  });
});
