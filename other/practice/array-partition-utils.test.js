import partition from './array-partition-utils';

describe('partition', () => {
  // Test case 1: Basic partitioning of numbers
  test('should partition an array of numbers into even and odd', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = partition(numbers, n => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  // Test case 2: Partitioning objects by a property
  test('should partition an array of objects based on a boolean property', () => {
    const users = [
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true },
    ];
    const [activeUsers, inactiveUsers] = partition(users, user => user.active);
    expect(activeUsers).toEqual([{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]);
    expect(inactiveUsers).toEqual([{ name: 'Bob', active: false }]);
  });

  // Test case 3: Empty array
  test('should return two empty arrays for an empty input array', () => {
    const [truthy, falsy] = partition([], n => n > 0);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);
  });

  // Test case 4: All elements satisfy the predicate
  test('should put all elements in the truthy array if all satisfy the predicate', () => {
    const numbers = [2, 4, 6];
    const [evens, odds] = partition(numbers, n => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([]);
  });

  // Test case 5: No elements satisfy the predicate
  test('should put all elements in the falsy array if none satisfy the predicate', () => {
    const numbers = [1, 3, 5];
    const [evens, odds] = partition(numbers, n => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([1, 3, 5]);
  });

  // Test case 6: Predicate using index
  test('should partition based on element index', () => {
    const data = ['a', 'b', 'c', 'd', 'e'];
    const [evenIndex, oddIndex] = partition(data, (item, index) => index % 2 === 0);
    expect(evenIndex).toEqual(['a', 'c', 'e']);
    expect(oddIndex).toEqual(['b', 'd']);
  });

  // Test case 7: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => partition(null, n => true)).toThrow(TypeError);
    expect(() => partition(undefined, n => true)).toThrow(TypeError);
    expect(() => partition(123, n => true)).toThrow(TypeError);
    expect(() => partition('string', n => true)).toThrow(TypeError);
    expect(() => partition({}, n => true)).toThrow(TypeError);
  });

  // Test case 8: Invalid input - non-function predicate
  test('should throw TypeError if the predicate argument is not a function', () => {
    const arr = [1, 2];
    expect(() => partition(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => partition(arr, null)).toThrow(TypeError);
    expect(() => partition(arr, undefined)).toThrow(TypeError);
  });
});