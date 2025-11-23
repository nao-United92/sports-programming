import { compact } from './array-compact-utils';

describe('compact', () => {
  it('should remove all falsey values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN, 'a'])).toEqual([1, 2, 3, 'a']);
  });

  it('should return an empty array if all values are falsey', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  it('should return the same array if no falsey values are present', () => {
    expect(compact([1, 2, 3, 'a'])).toEqual([1, 2, 3, 'a']);
  });

  it('should handle an empty input array', () => {
    expect(compact([])).toEqual([]);
  });

  it('should handle non-array inputs gracefully', () => {
    expect(compact(null)).toEqual([]);
    expect(compact(undefined)).toEqual([]);
    expect(compact('string')).toEqual([]);
  });
});