import { compact } from './compact-utils.js';

describe('compact', () => {
  test('should remove all falsy values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, 4];
    expect(compact(array)).toEqual([1, 2, 3, 'hello', 4]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact('string')).toEqual([]);
    expect(compact(123)).toEqual([]);
    expect(compact({})).toEqual([]);
  });

  test('should return the same array if no falsy values are present', () => {
    const array = [1, 2, 3, 'test', true];
    expect(compact(array)).toEqual([1, 2, 3, 'test', true]);
  });
});