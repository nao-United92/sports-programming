const removeFalsy = require('./array-remove-falsy-utils');

describe('removeFalsy', () => {
  test('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, undefined, NaN, 'hello'];
    expect(removeFalsy(arr)).toEqual([1, 2, 3, 'hello']);
  });

  test('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(removeFalsy(arr)).toEqual([]);
  });

  test('should return the same array if no falsy values exist', () => {
    const arr = [1, 2, 'hello', true];
    expect(removeFalsy(arr)).toEqual([1, 2, 'hello', true]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(removeFalsy([])).toEqual([]);
  });

  test('should handle arrays with only falsy values', () => {
    expect(removeFalsy([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  test('should handle arrays with mixed truthy and falsy values', () => {
    expect(removeFalsy([1, 0, 'a', '', true, false])).toEqual([1, 'a', true]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(removeFalsy(null)).toEqual([]);
    expect(removeFalsy(undefined)).toEqual([]);
    expect(removeFalsy("string")).toEqual([]);
    expect(removeFalsy(123)).toEqual([]);
    expect(removeFalsy({})).toEqual([]);
  });
});
