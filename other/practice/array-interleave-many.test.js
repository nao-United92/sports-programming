import { interleaveMany } from './array-interleave-many';

describe('interleaveMany', () => {
  test('should interleave multiple arrays', () => {
    expect(interleaveMany([1, 2], ['a', 'b'], [10])).toEqual([1, 'a', 10, 2, 'b']);
  });

  test('should handle arrays of different lengths', () => {
    expect(interleaveMany([1], [2, 3], [4, 5, 6])).toEqual([1, 2, 4, 3, 5, 6]);
  });

  test('should handle no arrays', () => {
    expect(interleaveMany()).toEqual([]);
  });
});
