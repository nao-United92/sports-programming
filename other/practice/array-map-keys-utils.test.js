const arrayMapKeys = require('./array-map-keys-utils');

describe('arrayMapKeys', () => {
  test('should transform keys of objects in an array', () => {
    const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
    const iteratee = (key) => key.toUpperCase();
    expect(arrayMapKeys(arr, iteratee)).toEqual([{ A: 1, B: 2 }, { C: 3, D: 4 }]);
  });

  test('should handle empty array', () => {
    const arr = [];
    const iteratee = (key) => key.toUpperCase();
    expect(arrayMapKeys(arr, iteratee)).toEqual([]);
  });

  test('should handle array with non-object elements', () => {
    const arr = [1, { a: 1 }, 'string'];
    const iteratee = (key) => key.toUpperCase();
    expect(arrayMapKeys(arr, iteratee)).toEqual([1, { A: 1 }, 'string']);
  });

  test('should handle objects with numeric keys', () => {
    const arr = [{ 1: 'value1', 2: 'value2' }];
    const iteratee = (key) => `key_${key}`;
    expect(arrayMapKeys(arr, iteratee)).toEqual([{ key_1: 'value1', key_2: 'value2' }]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayMapKeys(null, (key) => key)).toThrow('Expected an array for the first argument.');
    expect(() => arrayMapKeys(123, (key) => key)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayMapKeys([], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayMapKeys([], 'string')).toThrow('Expected a function for the second argument.');
  });
});
