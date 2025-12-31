import { compactStrict } from './array-compact-strict-utils.js';

describe('compactStrict', () => {
  it('should remove all falsey values from an array', () => {
    expect(compactStrict([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });

  it('should return the same array if no falsey values exist', () => {
    expect(compactStrict([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(compactStrict([])).toEqual([]);
  });

  it('should handle an array with only falsey values', () => {
    expect(compactStrict([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [0, 1, false];
    const originalArr = [...arr];
    compactStrict(arr);
    expect(arr).toEqual(originalArr);
  });
});