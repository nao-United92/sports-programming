import { fill, sortedIndex } from './array-fill-sorted-utils.js';

describe('fill', () => {
  it('should fill an array with a value', () => {
    const array = [1, 2, 3];
    fill(array, 'a');
    expect(array).toEqual(['a', 'a', 'a']);
  });

  it('should fill a portion of an array', () => {
    const array = [1, 2, 3, 4, 5];
    fill(array, '*', 1, 4);
    expect(array).toEqual([1, '*', '*', '*', 5]);
  });

  it('should handle negative start and end indices', () => {
    const array = [1, 2, 3, 4, 5];
    fill(array, 'x', -3, -1);
    expect(array).toEqual([1, 2, 'x', 'x', 5]);
  });
});

describe('sortedIndex', () => {
  it('should return the index at which a value should be inserted to maintain order', () => {
    expect(sortedIndex([30, 50], 40)).toBe(1);
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  it('should handle values smaller than all elements', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  it('should handle values larger than all elements', () => {
    expect(sortedIndex([10, 20, 30], 40)).toBe(3);
  });

  it('should handle values that are already in the array', () => {
    expect(sortedIndex([10, 20, 30], 20)).toBe(1);
  });
});
