import intersectionBy from './array-intersection-by-utils';

describe('intersectionBy', () => {
  it('should find common elements by a given iteratee function', () => {
    const array1 = [{ id: 1 }, { id: 2 }];
    const array2 = [{ id: 2 }, { id: 3 }];
    const iteratee = (o) => o.id;
    expect(intersectionBy(array1, array2, iteratee)).toEqual([{ id: 2 }]);
  });

  it('should handle more than two arrays', () => {
    const array1 = [{ id: 1 }, { id: 2 }, { id: 4 }];
    const array2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
    const array3 = [{ id: 4 }, { id: 5 }, { id: 2 }];
    const iteratee = (o) => o.id;
    expect(intersectionBy(array1, array2, array3, iteratee)).toEqual([{ id: 2 }, { id: 4 }]);
  });

  it('should return an empty array if no common elements', () => {
    const array1 = [{ id: 1 }];
    const array2 = [{ id: 2 }];
    const iteratee = (o) => o.id;
    expect(intersectionBy(array1, array2, iteratee)).toEqual([]);
  });

  it('should return an empty array if any input array is empty', () => {
    const array1 = [{ id: 1 }];
    const array2 = [];
    const iteratee = (o) => o.id;
    expect(intersectionBy(array1, array2, iteratee)).toEqual([]);
  });

  it('should work with primitive values if no iteratee is provided', () => {
    expect(intersectionBy([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should handle different data types if iteratee is used correctly', () => {
    const array1 = [{ value: 1 }, { value: '2' }];
    const array2 = [{ value: '2' }, { value: 3 }];
    const iteratee = (o) => String(o.value); // Convert to string for comparison
    expect(intersectionBy(array1, array2, iteratee)).toEqual([{ value: '2' }]);
  });

  it('should handle empty iteratee (implicitly use identity)', () => {
    expect(intersectionBy([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(intersectionBy()).toEqual([]);
  });

  it('should handle one array (returns the array itself)', () => {
    expect(intersectionBy([1, 2, 3])).toEqual([1, 2, 3]);
    expect(intersectionBy([{id:1}], (o) => o.id)).toEqual([{id:1}]);
  });
});
