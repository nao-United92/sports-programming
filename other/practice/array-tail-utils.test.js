const arrayTail = require('./array-tail-utils');

describe('arrayTail', () => {
  test('should return all but the first element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayTail(arr)).toEqual([2, 3, 4, 5]);
  });

  test('should return an empty array if the input array has one element', () => {
    const arr = [1];
    expect(arrayTail(arr)).toEqual([]);
  });

  test('should return an empty array if the input array is empty', () => {
    const arr = [];
    expect(arrayTail(arr)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayTail(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [undefined, 1, 'a', null, { key: 'value' }];
    expect(arrayTail(arr)).toEqual([1, 'a', null, { key: 'value' }]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayTail(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayTail(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayTail('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayTail(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayTail({})).toThrow('Expected an array for the first argument.');
  });
});
