const arrayInitial = require('./array-initial-utils');

describe('arrayInitial', () => {
  test('should return all but the last element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayInitial(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if the input array has one element', () => {
    const arr = [1];
    expect(arrayInitial(arr)).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    const arr = [];
    expect(arrayInitial(arr)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayInitial(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', null, { key: 'value' }, undefined];
    expect(arrayInitial(arr)).toEqual([1, 'a', null, { key: 'value' }]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayInitial(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayInitial(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayInitial('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayInitial(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayInitial({})).toThrow('Expected an array for the first argument.');
  });
});
