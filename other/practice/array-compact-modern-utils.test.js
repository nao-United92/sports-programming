import { compact } from './array-compact-modern-utils.js';

describe('compact', () => {
  it('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 'b'];
    expect(compact(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(compact(arr)).toEqual([]);
  });

  it('should return the same array if no values are falsy', () => {
    const arr = [1, 2, 3, 'a', 'b'];
    expect(compact(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
