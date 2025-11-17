import { permutations, combinations } from './array-combinatorics-utils';

describe('permutations', () => {
  test('should return an array with an empty array for an empty input array', () => {
    expect(permutations([])).toEqual([[]]);
  });

  test('should return all permutations for a simple array', () => {
    const result = permutations([1, 2]);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([2, 1]);
  });

  test('should return all permutations for a larger array', () => {
    const result = permutations(['a', 'b', 'c']);
    expect(result).toHaveLength(6);
    expect(result).toContainEqual(['a', 'b', 'c']);
    expect(result).toContainEqual(['a', 'c', 'b']);
    expect(result).toContainEqual(['b', 'a', 'c']);
    expect(result).toContainEqual(['b', 'c', 'a']);
    expect(result).toContainEqual(['c', 'a', 'b']);
    expect(result).toContainEqual(['c', 'b', 'a']);
  });
});

describe('combinations', () => {
  test('should return an empty array if size is greater than array length', () => {
    expect(combinations([1, 2, 3], 4)).toEqual([]);
  });

  test('should return an array with an empty array if size is 0', () => {
    expect(combinations([1, 2, 3], 0)).toEqual([[]]);
  });

  test('should return an empty array for an empty input array if size > 0', () => {
    expect(combinations([], 1)).toEqual([]);
  });

  test('should return all combinations for a simple case', () => {
    const result = combinations([1, 2, 3], 2);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([1, 3]);
    expect(result).toContainEqual([2, 3]);
  });

  test('should return the array itself if size is equal to array length', () => {
    const result = combinations([1, 2, 3], 3);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual([1, 2, 3]);
  });

  test('should return combinations of single elements if size is 1', () => {
    const result = combinations([1, 2, 3], 1);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual([1]);
    expect(result).toContainEqual([2]);
    expect(result).toContainEqual([3]);
  });
});
