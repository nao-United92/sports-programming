import { unique } from './array-unique';

describe('unique', () => {
  test('removes duplicate numbers', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('removes duplicate strings', () => {
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('handles empty arrays', () => {
    expect(unique([])).toEqual([]);
  });

  test('returns an empty array for non-array input', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(123)).toEqual([]);
  });
});
