const arrayHead = require('./array-head-utils');

describe('arrayHead', () => {
  test('should return the first element of a non-empty array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayHead(arr)).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    const arr = [];
    expect(arrayHead(arr)).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    const arr = [100];
    expect(arrayHead(arr)).toBe(100);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [{ key: 'value' }, 1, 'a', null];
    expect(arrayHead(arr)).toEqual({ key: 'value' });
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    arrayHead(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayHead(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayHead(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayHead('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayHead(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayHead({})).toThrow('Expected an array for the first argument.');
  });
});