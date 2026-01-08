import partition from './array-partition-utils';

describe('partition', () => {
  test('should partition an array into two groups based on a predicate', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const isEven = (num) => num % 2 === 0;
    const [evens, odds] = partition(numbers, isEven);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should handle an empty array', () => {
    const [pass, fail] = partition([], (item) => item > 0);
    expect(pass).toEqual([]);
    expect(fail).toEqual([]);
  });

  test('should handle all elements satisfying the predicate', () => {
    const numbers = [1, 2, 3];
    const isPositive = (num) => num > 0;
    const [positives, nonPositives] = partition(numbers, isPositive);
    expect(positives).toEqual([1, 2, 3]);
    expect(nonPositives).toEqual([]);
  });

  test('should handle no elements satisfying the predicate', () => {
    const numbers = [-1, -2, -3];
    const isPositive = (num) => num > 0;
    const [positives, nonPositives] = partition(numbers, isPositive);
    expect(positives).toEqual([]);
    expect(nonPositives).toEqual([-1, -2, -3]);
  });

  test('should work with objects and complex predicates', () => {
    const users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ];
    const isAdult = (user) => user.age >= 30;
    const [adults, nonAdults] = partition(users, isAdult);
    expect(adults).toEqual([
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 35 },
    ]);
    expect(nonAdults).toEqual([
      { name: 'Bob', age: 25 },
    ]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => partition(null, () => true)).toThrow(TypeError);
    expect(() => partition(undefined, () => true)).toThrow(TypeError);
    expect(() => partition({}, () => true)).toThrow(TypeError);
  });

  test('should throw TypeError if predicate is not a function', () => {
    expect(() => partition([], null)).toThrow(TypeError);
    expect(() => partition([], undefined)).toThrow(TypeError);
    expect(() => partition([], 'not a function')).toThrow(TypeError);
  });
});