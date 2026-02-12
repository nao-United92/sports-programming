import { partition } from './array-partition';

describe('partition', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
  ];

  test('should partition an array based on a predicate', () => {
    const [actives, inactives] = partition(users, (user) => user.active);
    expect(actives).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'pebbles', age: 1, active: true },
    ]);
    expect(inactives).toEqual([{ user: 'fred', age: 40, active: false }]);
  });

  test('should return two empty arrays for an empty input array', () => {
    expect(partition([], (val) => val > 0)).toEqual([[], []]);
  });

  test('should return two empty arrays if input is not an array', () => {
    expect(partition(null, (val) => val > 0)).toEqual([[], []]);
    expect(partition(undefined, (val) => val > 0)).toEqual([[], []]);
  });

  test('should place all elements in the first array if predicate is always true', () => {
    const arr = [1, 2, 3];
    expect(partition(arr, () => true)).toEqual([[1, 2, 3], []]);
  });

  test('should place all elements in the second array if predicate is always false', () => {
    const arr = [1, 2, 3];
    expect(partition(arr, () => false)).toEqual([[], [1, 2, 3]]);
  });

  test('should handle predicate using index and array arguments', () => {
    const arr = [10, 20, 30];
    const [firstHalf, secondHalf] = partition(arr, (val, idx, collection) => idx < collection.length / 2);
    expect(firstHalf).toEqual([10]);
    expect(secondHalf).toEqual([20, 30]);
  });

  test('should handle non-function predicate gracefully', () => {
    const arr = [1, 2, 3];
    expect(partition(arr, null)).toEqual([[], []]);
    expect(partition(arr, 'active')).toEqual([[], []]);
  });
});
