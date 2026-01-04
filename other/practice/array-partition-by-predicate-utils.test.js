const { partitionByPredicate } = require('./array-partition-by-predicate-utils');

describe('partitionByPredicate', () => {
  test('should partition numbers into even and odd', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [even, odd] = partitionByPredicate(numbers, num => num % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });

  test('should partition users into adults and minors', () => {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 17 },
      { name: 'Charlie', age: 30 },
      { name: 'David', age: 16 },
    ];
    const [adults, minors] = partitionByPredicate(users, user => user.age >= 18);
    expect(adults).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 30 },
    ]);
    expect(minors).toEqual([
      { name: 'Bob', age: 17 },
      { name: 'David', age: 16 },
    ]);
  });

  test('should handle an empty array', () => {
    const [truthy, falsy] = partitionByPredicate([], item => item > 0);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);
  });

  test('should handle all elements matching the predicate', () => {
    const numbers = [2, 4, 6];
    const [even, odd] = partitionByPredicate(numbers, num => num % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([]);
  });

  test('should handle no elements matching the predicate', () => {
    const numbers = [1, 3, 5];
    const [even, odd] = partitionByPredicate(numbers, num => num % 2 === 0);
    expect(even).toEqual([]);
    expect(odd).toEqual([1, 3, 5]);
  });

  test('should handle mixed types in array with appropriate predicate', () => {
    const mixed = [1, 'hello', 3, true, null, 6];
    const [numbers, others] = partitionByPredicate(mixed, item => typeof item === 'number');
    expect(numbers).toEqual([1, 3, 6]);
    expect(others).toEqual(['hello', true, null]);
  });
});
