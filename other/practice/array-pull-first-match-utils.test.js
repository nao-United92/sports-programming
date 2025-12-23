const pullFirstMatch = require('./array-pull-first-match-utils');

describe('pullFirstMatch', () => {
  test('should remove the first occurrence of a number', () => {
    const arr = [1, 2, 3, 2, 4];
    expect(pullFirstMatch(arr, 2)).toEqual([1, 3, 2, 4]);
  });

  test('should remove the first occurrence of a string', () => {
    const arr = ['a', 'b', 'c', 'b', 'd'];
    expect(pullFirstMatch(arr, 'b')).toEqual(['a', 'c', 'b', 'd']);
  });

  test('should return a shallow copy if value is not found', () => {
    const arr = [1, 2, 3];
    expect(pullFirstMatch(arr, 4)).toEqual([1, 2, 3]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(pullFirstMatch([], 1)).toEqual([]);
  });

  test('should handle arrays with a single element', () => {
    expect(pullFirstMatch([1], 1)).toEqual([]);
    expect(pullFirstMatch([1], 2)).toEqual([1]);
  });

  test('should not mutate the original array', () => {
    const arr = [1, 2, 3, 2];
    pullFirstMatch(arr, 2);
    expect(arr).toEqual([1, 2, 3, 2]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(pullFirstMatch(null, 1)).toEqual([]);
    expect(pullFirstMatch(undefined, 1)).toEqual([]);
    expect(pullFirstMatch("string", 's')).toEqual([]);
    expect(pullFirstMatch(123, 1)).toEqual([]);
    expect(pullFirstMatch({}, 1)).toEqual([]);
  });

  test('should handle objects (by reference)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      b: 2
    };
    const arr = [obj1, obj2, obj1];
    expect(pullFirstMatch(arr, obj1)).toEqual([obj2, obj1]);
    expect(pullFirstMatch(arr, {
      a: 1
    })).toEqual([obj1, obj2, obj1]); // Different reference
  });
});
