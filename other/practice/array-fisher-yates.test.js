import { shuffle } from './array-fisher-yates.js';

describe('shuffle', () => {
  test('should shuffle an array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
    expect(shuffled).toEqual(expect.arrayContaining(array));
    // Note: There's a tiny probability it returns the same order, but for a unit test usually we accept this or mock random.
    // We won't mock random here to keep it simple, just checking integrity.
  });

  test('should return a new array instance', () => {
    const array = [1, 2, 3];
    const shuffled = shuffle(array);
    expect(shuffled).not.toBe(array);
  });

  test('should handle empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should handle non-array input', () => {
      expect(shuffle(null)).toEqual([]);
      expect(shuffle(123)).toEqual([]);
  });
});
