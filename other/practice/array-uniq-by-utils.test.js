import uniqBy from './array-uniq-by-utils';

describe('uniqBy', () => {
  test('should create a duplicate-free version of an array based on an iteratee', () => {
    const arr = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 1, name: 'c' },
    ];
    expect(uniqBy(arr, (item) => item.id)).toEqual([
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
    ]);
  });

  test('should work with a simple array and Math.floor', () => {
    expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
  });

  test('should return an empty array for non-array inputs', () => {
    expect(uniqBy(null, (x) => x)).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(uniqBy([], (x) => x)).toEqual([]);
  });
});