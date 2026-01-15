import { pluck } from './array-pluck-utils.js';

describe('pluck', () => {
  test('should return an array of property values', () => {
    const arr = [{ a: 1 }, { a: 2 }];
    expect(pluck(arr, 'a')).toEqual([1, 2]);
  });

  test('should return undefined for missing properties', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    expect(pluck(arr, 'a')).toEqual([1, undefined]);
  });

  test('should return an empty array for an empty array', () => {
    expect(pluck([], 'a')).toEqual([]);
  });
});