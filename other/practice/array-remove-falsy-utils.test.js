const {
  removeFalsy
} = require('./array-remove-falsy-utils');

describe('removeFalsy', () => {
  test('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, 'a', null, 'b', undefined, 'c', NaN];
    const result = [1, 2, 3, 'a', 'b', 'c'];
    expect(removeFalsy(arr)).toEqual(result);
  });

  test('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(removeFalsy(arr)).toEqual([]);
  });

  test('should return the same array if no values are falsy', () => {
    const arr = [1, 2, 3, 'a', 'b', 'c'];
    expect(removeFalsy(arr)).toEqual(arr);
  });

  test('should handle an empty array', () => {
    expect(removeFalsy([])).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(removeFalsy(null)).toEqual([]);
    expect(removeFalsy(undefined)).toEqual([]);
  });
});