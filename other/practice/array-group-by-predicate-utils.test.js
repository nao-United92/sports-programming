const { groupByPredicate } = require('./array-group-by-predicate-utils');

describe('groupByPredicate', () => {
  test('should group numbers by parity (even/odd)', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = groupByPredicate(numbers, (num) => (num % 2 === 0 ? 'even' : 'odd'));
    expect(result).toEqual({
      odd: [1, 3, 5],
      even: [2, 4, 6],
    });
  });

  test('should group users by age category', () => {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 28 },
      { name: 'David', age: 35 },
    ];
    const result = groupByPredicate(users, (user) => (user.age < 30 ? 'young' : 'old'));
    expect(result).toEqual({
      young: [
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 28 },
      ],
      old: [
        { name: 'Bob', age: 30 },
        { name: 'David', age: 35 },
      ],
    });
  });

  test('should handle an empty array', () => {
    const arr = [];
    const result = groupByPredicate(arr, (item) => item.category);
    expect(result).toEqual({});
  });

  test('should handle all elements grouping into the same category', () => {
    const arr = [1, 2, 3];
    const result = groupByPredicate(arr, () => 'all');
    expect(result).toEqual({
      all: [1, 2, 3],
    });
  });

  test('should group by string length', () => {
    const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
    const result = groupByPredicate(words, (word) => word.length);
    expect(result).toEqual({
      5: ['apple'],
      6: ['banana'],
      3: ['cat', 'dog'],
      8: ['elephant'],
    });
  });
});
