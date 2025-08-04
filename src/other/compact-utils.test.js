import { compact } from './compact-utils.js';

describe('compact', () => {
  test('should remove all falsy values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, 'a', undefined, NaN])).toEqual([1, 2, 3, 'a']);
  });

  test('should return an empty array if all values are falsy', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  test('should return the same array if no falsy values are present', () => {
    expect(compact([1, 2, 3, 'a'])).toEqual([1, 2, 3, 'a']);
  });

  test('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('should return an empty array for non-array input', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact('string')).toEqual([]);
    expect(compact(123)).toEqual([]);
    expect(compact({})).toEqual([]);
  });
});
