
import { partitionByCustom } from './array-partition-by-custom-utils.js';

describe('partitionByCustom', () => {
  it('should partition an array into two groups based on a numerical predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const predicate = (item) => item % 2 === 0; // even numbers
    expect(partitionByCustom(arr, predicate)).toEqual([
      [2, 4, 6],
      [1, 3, 5],
    ]);
  });

  it('should partition an array of objects based on a property value', () => {
    const arr = [{ type: 'A', id: 1 }, { type: 'B', id: 2 }, { type: 'A', id: 3 }];
    const predicate = (item) => item.type === 'A';
    expect(partitionByCustom(arr, predicate)).toEqual([
      [{ type: 'A', id: 1 }, { type: 'A', id: 3 }],
      [{ type: 'B', id: 2 }],
    ]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const predicate = (item) => item > 0;
    expect(partitionByCustom(arr, predicate)).toEqual([[], []]);
  });

  it('should handle an array where all elements satisfy the predicate', () => {
    const arr = [2, 4, 6];
    const predicate = (item) => item % 2 === 0;
    expect(partitionByCustom(arr, predicate)).toEqual([
      [2, 4, 6],
      [],
    ]);
  });

  it('should handle an array where no elements satisfy the predicate', () => {
    const arr = [1, 3, 5];
    const predicate = (item) => item % 2 === 0;
    expect(partitionByCustom(arr, predicate)).toEqual([
      [],
      [1, 3, 5],
    ]);
  });
});
