import { unique } from './array-unique';

describe('unique', () => {
  test('removes duplicate elements from an array', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles an array with all same elements', () => {
    expect(unique([1, 1, 1])).toEqual([1]);
  });

  test('works with strings', () => {
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
