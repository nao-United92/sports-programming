const flattenOnce = require('./array-flatten-once-utils');

describe('flattenOnce', () => {
  test('should flatten an array of arrays by one level', () => {
    const arr = [1, [2, 3], 4, [5, [6, 7]]];
    expect(flattenOnce(arr)).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(flattenOnce([])).toEqual([]);
  });

  test('should return the same array if no nested arrays', () => {
    const arr = [1, 2, 3, 4];
    expect(flattenOnce(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, [true, 'hello'], null, [undefined]];
    expect(flattenOnce(arr)).toEqual([1, true, 'hello', null, undefined]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => flattenOnce(null)).toThrow('Expected an array');
    expect(() => flattenOnce(123)).toThrow('Expected an array');
    expect(() => flattenOnce('string')).toThrow('Expected an array');
    expect(() => flattenOnce({})).toThrow('Expected an array');
  });
});