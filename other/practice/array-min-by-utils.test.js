const arrayMinBy = require('./array-min-by-utils');

describe('arrayMinBy', () => {
  test('should return the object with the minimum value based on a number property', () => {
    const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }, { 'user': 'pebbles', 'age': 1 }];
    expect(arrayMinBy(users, o => o.age)).toEqual({ 'user': 'pebbles', 'age': 1 });
  });

  test('should return the object with the minimum value based on a string property length', () => {
    const words = [{ 'word': 'apple' }, { 'word': 'banana' }, { 'word': 'cat' }];
    expect(arrayMinBy(words, o => o.word.length)).toEqual({ 'word': 'cat' });
  });

  test('should handle arrays with primitive values', () => {
    const nums = [10, 5, 20, 15];
    expect(arrayMinBy(nums, x => x)).toBe(5);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMinBy([], x => x)).toBeUndefined();
  });

  test('should handle negative numbers', () => {
    const nums = [-10, -5, -20];
    expect(arrayMinBy(nums, x => x)).toBe(-20);
  });

  test('should handle floating point numbers', () => {
    const nums = [1.1, 2.2, 1.5];
    expect(arrayMinBy(nums, x => x)).toBe(1.1);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayMinBy(null, x => x)).toThrow('Expected an array for the first argument.');
    expect(() => arrayMinBy(123, x => x)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayMinBy([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayMinBy([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});