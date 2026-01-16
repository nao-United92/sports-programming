const arrayLast = require('./array-last-utils');

describe('arrayLast', () => {
  test('should return the last element of a non-empty array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayLast(arr)).toBe(5);
  });

  test('should return undefined for an empty array', () => {
    const arr = [];
    expect(arrayLast(arr)).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    const arr = [100];
    expect(arrayLast(arr)).toBe(100);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', null, { key: 'value' }];
    expect(arrayLast(arr)).toEqual({ key: 'value' });
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayLast(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayLast(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayLast(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayLast('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayLast(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayLast({})).toThrow('Expected an array for the first argument.');
  });
});