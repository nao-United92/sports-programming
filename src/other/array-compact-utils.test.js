import { compact } from './array-compact-utils.js';

describe('compact', () => {
  it('should remove all falsy values from an array', () => {
    const arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34, null, undefined];
    const expected = [1, 2, 3, 'a', 's', 34];
    expect(compact(arr)).toEqual(expected);
  });

  it('should return an empty array if all values are falsy', () => {
    const arr = [0, false, '', null, undefined, NaN];
    expect(compact(arr)).toEqual([]);
  });

  it('should return the same array if no values are falsy', () => {
    const arr = [1, 'hello', true, {}];
    expect(compact(arr)).toEqual(arr);
  });
});
