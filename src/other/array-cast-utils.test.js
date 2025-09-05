import { castArray } from './array-cast-utils.js';

describe('castArray', () => {
  it('should return the array if the value is already an array', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).toBe(arr);
  });

  it('should wrap a non-array value in an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray('hello')).toEqual(['hello']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  it('should handle empty array', () => {
    expect(castArray([])).toEqual([]);
  });
});
