const arrayFilterMap = require('./array-filter-map-utils');

describe('arrayFilterMap', () => {
  test('should filter and map elements in a single pass', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (num) => num % 2 === 0 ? num * 2 : null; // Filter odds, double evens
    expect(arrayFilterMap(arr, callback)).toEqual([4, 8]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const callback = (num) => num * 2;
    expect(arrayFilterMap(arr, callback)).toEqual([]);
  });

  test('should return all mapped values if nothing is filtered out', () => {
    const arr = [1, 2, 3];
    const callback = (num) => num * 10;
    expect(arrayFilterMap(arr, callback)).toEqual([10, 20, 30]);
  });

  test('should filter out all elements if callback always returns null/undefined', () => {
    const arr = [1, 2, 3];
    const callback = (num) => null;
    expect(arrayFilterMap(arr, callback)).toEqual([]);
  });

  test('should pass index and array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    const callback = (char, index) => index % 2 === 0 ? char.toUpperCase() : undefined;
    expect(arrayFilterMap(arr, callback)).toEqual(['A', 'C']);
  });

  test('should handle mixed types in the array', () => {
    const arr = [1, 'two', null, 4, true, undefined];
    const callback = (item) => typeof item === 'number' ? item * 10 : null;
    expect(arrayFilterMap(arr, callback)).toEqual([10, 40]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    const callback = (num) => num * 2;
    expect(() => arrayFilterMap(null, callback)).toThrow(TypeError);
    expect(() => arrayFilterMap(123, callback)).toThrow(TypeError);
    expect(() => arrayFilterMap('string', callback)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayFilterMap(arr, null)).toThrow(TypeError);
    expect(() => arrayFilterMap(arr, 'string')).toThrow(TypeError);
    expect(() => arrayFilterMap(arr, 123)).toThrow(TypeError);
  });
});
