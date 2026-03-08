import { countOccurrencesObject } from './array-count-occurrences-object';

describe('countOccurrencesObject', () => {
  test('should count occurrences correctly', () => {
    expect(countOccurrencesObject(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ a: 3, b: 2, c: 1 });
  });

  test('should handle numeric arrays', () => {
    expect(countOccurrencesObject([1, 2, 1])).toEqual({ '1': 2, '2': 1 });
  });

  test('should return empty object for empty array', () => {
    expect(countOccurrencesObject([])).toEqual({});
  });
});
