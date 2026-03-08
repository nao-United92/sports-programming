import { frequencySort } from './array-frequency-sort';

describe('frequencySort', () => {
  test('should sort by frequency', () => {
    expect(frequencySort([4, 6, 2, 6, 4, 4, 6, 6])).toEqual([6, 6, 6, 6, 4, 4, 4, 2]);
  });

  test('should handle strings', () => {
    expect(frequencySort(['apple', 'banana', 'apple'])).toEqual(['apple', 'apple', 'banana']);
  });

  test('should handle empty array', () => {
    expect(frequencySort([])).toEqual([]);
  });
});
