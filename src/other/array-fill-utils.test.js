import { fill } from './array-fill-utils';

describe('fill', () => {
  it('should fill an array with a value', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).toEqual(['a', 'a', 'a']);
  });

  it('should fill an array with a value from a start position', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a', 1)).toEqual([1, 'a', 'a']);
  });

  it('should fill an array with a value from a start to an end position', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a', 1, 2)).toEqual([1, 'a', 3]);
  });

  it('should handle negative start and end positions', () => {
    const array = [1, 2, 3, 4, 5];
    expect(fill(array, '*', -3, -1)).toEqual([1, 2, '*', '*', 5]);
  });

  it('should handle start and end positions out of bounds', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a', 5, 10)).toEqual([1, 2, 3]);
    expect(fill(array, 'a', -5, -1)).toEqual(['a', 'a', 3]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(fill(null, 'a')).toEqual([]);
    expect(fill(undefined, 'a')).toEqual([]);
    expect(fill('string', 'a')).toEqual([]);
  });

  it('should return the array reference', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).toBe(array);
  });
});
