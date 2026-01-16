const arrayMaxBy = require('./array-max-by-utils');

describe('arrayMaxBy', () => {
  test('should return the object with the maximum value based on a number property', () => {
    const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }, { 'user': 'pebbles', 'age': 1 }];
    expect(arrayMaxBy(users, o => o.age)).toEqual({ 'user': 'fred', 'age': 40 });
  });

  test('should return the object with the maximum value based on a string property length', () => {
    const words = [{ 'word': 'apple' }, { 'word': 'banana' }, { 'word': 'cat' }];
    expect(arrayMaxBy(words, o => o.word.length)).toEqual({ 'word': 'banana' });
  });

  test('should handle arrays with primitive values', () => {
    const nums = [10, 5, 20, 15];
    expect(arrayMaxBy(nums, x => x)).toBe(20);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMaxBy([], x => x)).toBeUndefined();
  });

  test('should handle negative numbers', () => {
    const nums = [-10, -5, -20];
    expect(arrayMaxBy(nums, x => x)).toBe(-5);
  });

  test('should handle floating point numbers', () => {
    const nums = [1.1, 2.2, 1.5];
    expect(arrayMaxBy(nums, x => x)).toBe(2.2);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayMaxBy(null, x => x)).toThrow('Expected an array for the first argument.');
    expect(() => arrayMaxBy(123, x => x)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayMaxBy([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayMaxBy([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});