import { chunk } from './chunk-utils';

describe('chunk', () => {
  test('should split an array into chunks of specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(chunk(arr, 3)).toEqual([]);
  });

  test('should handle a size larger than the array length', () => {
    const arr = [1, 2, 3];
    expect(chunk(arr, 5)).toEqual([[1, 2, 3]]);
  });

  test('should handle a size that perfectly divides the array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => chunk(null, 2)).toThrow('Expected an array for the first argument.');
    expect(() => chunk(undefined, 2)).toThrow('Expected an array for the first argument.');
    expect(() => chunk('string', 2)).toThrow('Expected an array for the first argument.');
    expect(() => chunk(123, 2)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument (size) is not a positive number', () => {
    const arr = [1, 2, 3];
    expect(() => chunk(arr, 0)).toThrow('Expected a positive number for the second argument (size).');
    expect(() => chunk(arr, -1)).toThrow('Expected a positive number for the second argument (size).');
    expect(() => chunk(arr, null)).toThrow('Expected a positive number for the second argument (size).');
    expect(() => chunk(arr, undefined)).toThrow('Expected a positive number for the second argument (size).');
    expect(() => chunk(arr, 'string')).toThrow('Expected a positive number for the second argument (size).');
  });
});