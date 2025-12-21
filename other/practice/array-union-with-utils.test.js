import unionWith from './array-union-with-utils';

describe('unionWith', () => {
  it('should return the union of two arrays based on a comparator', () => {
    const arr1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const arr2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
    const comp = (a, b) => Math.abs(a.x - b.x) < 0.1 && Math.abs(a.y - b.y) < 0.1;
    expect(unionWith(arr1, arr2, comp)).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }]);
  });
});
