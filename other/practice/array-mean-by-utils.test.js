const arrayMeanBy = require('./array-mean-by-utils');

describe('arrayMeanBy', () => {
  test('should calculate the mean of ages from an array of objects', () => {
    const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }, { 'user': 'pebbles', 'age': 1 }];
    expect(arrayMeanBy(users, o => o.age)).toBeCloseTo((36 + 40 + 1) / 3); // 77 / 3 = 25.666...
  });

  test('should calculate the mean of string lengths from an array of objects', () => {
    const words = [{ 'word': 'apple' }, { 'word': 'banana' }, { 'word': 'cat' }];
    expect(arrayMeanBy(words, o => o.word.length)).toBeCloseTo((5 + 6 + 3) / 3); // 14 / 3 = 4.666...
  });

  test('should calculate the mean of primitive numbers directly', () => {
    const nums = [10, 5, 20, 15];
    expect(arrayMeanBy(nums, x => x)).toBeCloseTo((10 + 5 + 20 + 15) / 4); // 50 / 4 = 12.5
  });

  test('should return NaN for an empty array', () => {
    expect(arrayMeanBy([], x => x)).toBeNaN();
  });

  test('should handle negative numbers', () => {
    const nums = [-10, -5, 20];
    expect(arrayMeanBy(nums, x => x)).toBeCloseTo((-10 - 5 + 20) / 3); // 5 / 3 = 1.666...
  });

  test('should handle floating point numbers', () => {
    const nums = [1.1, 2.2, 1.5];
    expect(arrayMeanBy(nums, x => x)).toBeCloseTo((1.1 + 2.2 + 1.5) / 3); // 4.8 / 3 = 1.6
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayMeanBy(null, x => x)).toThrow('Expected an array for the first argument.');
    expect(() => arrayMeanBy(123, x => x)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayMeanBy([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayMeanBy([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});
