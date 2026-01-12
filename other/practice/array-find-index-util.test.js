import { findIndex } from './array-find-index-util';

describe('findIndex', () => {
  it('should return the index of the first element that satisfies the predicate', () => {
    const arr = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(arr, (o) => o.active)).toBe(2);
  });

  it('should return -1 if no element satisfies the predicate', () => {
    const arr = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
    ];
    expect(findIndex(arr, (o) => o.active)).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(findIndex([], (o) => o.active)).toBe(-1);
  });

  it('should return -1 for non-array values', () => {
    expect(findIndex(null, (o) => o.active)).toBe(-1);
    expect(findIndex(undefined, (o) => o.active)).toBe(-1);
  });
});
