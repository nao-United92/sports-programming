const arraySumBy = require('./array-sum-by-utils');

describe('arraySumBy', () => {
  test('should sum the values of objects based on a number property', () => {
    const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }, { 'user': 'pebbles', 'age': 1 }];
    expect(arraySumBy(users, o => o.age)).toBe(77); // 36 + 40 + 1 = 77
  });

  test('should sum the length of string properties', () => {
    const words = [{ 'word': 'apple' }, { 'word': 'banana' }, { 'word': 'cat' }];
    expect(arraySumBy(words, o => o.word.length)).toBe(5 + 6 + 3); // 14
  });

  test('should sum primitive numbers directly', () => {
    const nums = [10, 5, 20, 15];
    expect(arraySumBy(nums, x => x)).toBe(50);
  });

  test('should return 0 for an empty array', () => {
    expect(arraySumBy([], x => x)).toBe(0);
  });

  test('should handle negative numbers', () => {
    const nums = [-10, -5, 20];
    expect(arraySumBy(nums, x => x)).toBe(5); // -10 + -5 + 20 = 5
  });

  test('should handle floating point numbers', () => {
    const nums = [1.1, 2.2, 1.5];
    expect(arraySumBy(nums, x => x)).toBeCloseTo(4.8); // 1.1 + 2.2 + 1.5 = 4.8
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arraySumBy(null, x => x)).toThrow('Expected an array for the first argument.');
    expect(() => arraySumBy(123, x => x)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arraySumBy([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arraySumBy([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});
