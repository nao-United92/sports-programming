import { intersectionBy, unionBy, differenceBy } from './array-set-operations-by-utils.js';

describe('intersectionBy', () => {
  it('should return the intersection of two arrays based on iteratee', () => {
    const array1 = [{ 'x': 1 }, { 'x': 2 }];
    const array2 = [{ 'x': 2 }, { 'x': 3 }];
    const iteratee = (o) => o.x;
    expect(intersectionBy(array1, array2, iteratee)).toEqual([{ 'x': 2 }]);
  });

  it('should handle empty arrays', () => {
    expect(intersectionBy([], [{ 'x': 1 }], (o) => o.x)).toEqual([]);
    expect(intersectionBy([{ 'x': 1 }], [], (o) => o.x)).toEqual([]);
  });
});

describe('unionBy', () => {
  it('should return the union of arrays based on iteratee', () => {
    const array1 = [{ 'x': 1 }];
    const array2 = [{ 'x': 2 }, { 'x': 1 }];
    const array3 = [{ 'x': 3 }];
    const iteratee = (o) => o.x;
    expect(unionBy(array1, array2, array3, iteratee)).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }]);
  });

  it('should handle empty arrays', () => {
    expect(unionBy([], [], (o) => o.x)).toEqual([]);
  });
});

describe('differenceBy', () => {
  it('should return the difference of two arrays based on iteratee', () => {
    const array1 = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }];
    const array2 = [{ 'x': 2 }, { 'x': 4 }];
    const iteratee = (o) => o.x;
    expect(differenceBy(array1, array2, iteratee)).toEqual([{ 'x': 1 }, { 'x': 3 }]);
  });

  it('should handle empty arrays', () => {
    expect(differenceBy([], [{ 'x': 1 }], (o) => o.x)).toEqual([]);
    expect(differenceBy([{ 'x': 1 }], [], (o) => o.x)).toEqual([{ 'x': 1 }]);
  });
});
