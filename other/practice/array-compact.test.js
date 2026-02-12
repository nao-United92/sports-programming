import { compact } from './array-compact';

describe('compact', () => {
  test('should remove falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN];
    expect(compact(arr)).toEqual([1, 2, 3, 'a']);
  });

  test('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(compact(arr)).toEqual([]);
  });

  test('should return the same array if no falsy values exist', () => {
    const arr = [1, 'hello', true, {}, []];
    expect(compact(arr)).toEqual([1, 'hello', true, {}, []]);
  });

  test('should return an empty array if given an empty array', () => {
    const arr = [];
    expect(compact(arr)).toEqual([]);
  });

  test('should handle arrays with only truthy values', () => {
    const arr = [1, 'a', true];
    expect(compact(arr)).toEqual([1, 'a', true]);
  });

  test('should handle non-array input by returning an empty array', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact(0)).toEqual([]);
    expect(compact('string')).toEqual([]);
  });
});
