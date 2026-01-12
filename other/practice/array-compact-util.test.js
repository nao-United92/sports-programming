import { compact } from './array-compact-util';

describe('compact', () => {
  it('should remove falsy values from an array', () => {
    const originalArray = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 'b'];
    const compactedArray = compact(originalArray);
    expect(compactedArray).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('should return an empty array if all values are falsy', () => {
    const originalArray = [0, false, '', null, undefined, NaN];
    const compactedArray = compact(originalArray);
    expect(compactedArray).toEqual([]);
  });

  it('should return the same array if no values are falsy', () => {
    const originalArray = [1, 2, 3, 'a', 'b'];
    const compactedArray = compact(originalArray);
    expect(compactedArray).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('should return an empty array for an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact({})).toEqual([]);
    expect(compact('')).toEqual([]);
    expect(compact(123)).toEqual([]);
  });
});
