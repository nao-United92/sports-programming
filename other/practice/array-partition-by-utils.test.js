import { partitionBy } from './array-partition-by-utils';

describe('partitionBy', () => {
  it('should partition an array into two based on a predicate', () => {
    const numbers = [1, 2, 3, 4, 5];
    const [even, odd] = partitionBy(numbers, n => n % 2 === 0);
    expect(even).toEqual([2, 4]);
    expect(odd).toEqual([1, 3, 5]);
  });

  it('should handle an empty array', () => {
    const [truthy, falsy] = partitionBy([], n => n > 0);
    expect(truthy).toEqual([]);
    expect(falsy).toEqual([]);
  });

  it('should put all elements in the first array if predicate is always true', () => {
    const numbers = [1, 2, 3];
    const [truthy, falsy] = partitionBy(numbers, () => true);
    expect(truthy).toEqual([1, 2, 3]);
    expect(falsy).toEqual([]);
  });

  it('should handle non-array input', () => {
    expect(partitionBy(null, () => true)).toEqual([[], []]);
    expect(partitionBy(undefined, () => true)).toEqual([[], []]);
  });
});
