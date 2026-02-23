import { shuffle } from './array-shuffle';

describe('shuffle', () => {
  test('shuffles the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).toHaveLength(arr.length);
    expect(result).toEqual(expect.arrayContaining(arr));
  });

  test('returns a new array (shallow copy)', () => {
    const arr = [1, 2, 3];
    const result = shuffle(arr);
    expect(result).not.toBe(arr);
  });

  test('handles empty arrays', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('returns an empty array for non-array input', () => {
    expect(shuffle(null)).toEqual([]);
  });
});
