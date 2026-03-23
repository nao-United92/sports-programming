import { unique } from './array-unique.js';

describe('unique', () => {
  test('should remove duplicates from array', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle strings', () => {
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });

  test('should handle empty array', () => {
    expect(unique([])).toEqual([]);
  });
  
  test('should handle non-array input', () => {
      expect(unique(null)).toEqual([]);
  });
});
