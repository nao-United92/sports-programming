
import { compact } from './compact-utils.js';

describe('compact', () => {
  test('should remove all falsey values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 'b'];
    const result = compact(array);
    expect(result).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('should return a new array', () => {
    const array = [1, 2, 3];
    const result = compact(array);
    expect(result).not.toBe(array);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact({})).toEqual([]);
    expect(compact("hello")).toEqual([]);
  });

  test('should not remove objects or arrays, even if empty', () => {
    const array = [[], {}, 1, 2];
    const result = compact(array);
    expect(result).toEqual([[], {}, 1, 2]);
  });
});
