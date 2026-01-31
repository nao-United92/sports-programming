const arrayUnique = require('./array-unique');

describe('arrayUnique', () => {
  test('should remove duplicate numbers', () => {
    expect(arrayUnique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should remove duplicate strings', () => {
    expect(arrayUnique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('should handle an empty array', () => {
    expect(arrayUnique([])).toEqual([]);
  });

  test('should handle an array with no duplicates', () => {
    expect(arrayUnique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle mixed types', () => {
    expect(arrayUnique([1, 'a', 1, 'b', 'a'])).toEqual([1, 'a', 'b']);
  });
});
