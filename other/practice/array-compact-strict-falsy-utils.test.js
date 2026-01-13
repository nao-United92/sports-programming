
import { compactStrictFalsy } from './array-compact-strict-falsy-utils.js';

describe('compactStrictFalsy', () => {
  it('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN, 'b'];
    expect(compactStrictFalsy(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('should handle an array with only falsy values', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(compactStrictFalsy(arr)).toEqual([]);
  });

  it('should handle an array with only truthy values', () => {
    const arr = [1, 'hello', true, {}, []];
    expect(compactStrictFalsy(arr)).toEqual([1, 'hello', true, {}, []]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(compactStrictFalsy(arr)).toEqual([]);
  });

  it('should not modify the original array', () => {
    const arr = [0, 1, false];
    const originalArr = [...arr];
    compactStrictFalsy(arr);
    expect(arr).toEqual(originalArr);
  });
});
