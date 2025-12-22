import { differenceWith } from './array-difference-with-utils';

describe('differenceWith', () => {
  it('should return the difference of two arrays with a comparator', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const result = differenceWith(objects, [{ 'x': 1, 'y': 2 }], (a, b) => a.x === b.x && a.y === b.y);
    expect(result).toEqual([{ 'x': 2, 'y': 1 }]);
  });

  it('should handle empty arrays', () => {
    expect(differenceWith([], [], (a, b) => a === b)).toEqual([]);
  });

  it('should return the first array if the second is empty', () => {
    const objects = [{ x: 1 }, { x: 2 }];
    expect(differenceWith(objects, [], (a, b) => a.x === b.x)).toEqual(objects);
  });

  it('should work with different data types', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1.1, 2.2, 3.3];
    const result = differenceWith(arr1, arr2, (a, b) => Math.round(a) === Math.round(b));
    expect(result).toEqual([]);
  });
});
