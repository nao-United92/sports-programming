
import { differenceByPredicate } from './array-difference-by-predicate-utils.js';

describe('differenceByPredicate', () => {
  it('should return the difference of two arrays based on a predicate function for primitive types', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7];
    const predicate = (a, b) => a === b;
    expect(differenceByPredicate(arr1, arr2, predicate)).toEqual([1, 2, 3]);
  });

  it('should return the difference of two arrays based on a predicate function for objects', () => {
    const arr1 = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'c' }];
    const arr2 = [{ id: 3, value: 'x' }, { id: 4, value: 'd' }];
    const predicate = (a, b) => a.id === b.id;
    expect(differenceByPredicate(arr1, arr2, predicate)).toEqual([{ id: 1, value: 'a' }, { id: 2, value: 'b' }]);
  });

  it('should return the first array if the second array is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const predicate = (a, b) => a === b;
    expect(differenceByPredicate(arr1, arr2, predicate)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the first array is empty', () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    const predicate = (a, b) => a === b;
    expect(differenceByPredicate(arr1, arr2, predicate)).toEqual([]);
  });

  it('should handle no common elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const predicate = (a, b) => a === b;
    expect(differenceByPredicate(arr1, arr2, predicate)).toEqual([1, 2]);
  });
});
