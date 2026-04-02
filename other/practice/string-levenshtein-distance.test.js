const levenshteinDistance = require('./string-levenshtein-distance');

describe('levenshteinDistance', () => {
  test('should return 0 for identical strings', () => {
    expect(levenshteinDistance('kitten', 'kitten')).toBe(0);
  });

  test('should return the length of the other string if one is empty', () => {
    expect(levenshteinDistance('', 'kitten')).toBe(6);
    expect(levenshteinDistance('kitten', '')).toBe(6);
  });

  test('should return the correct distance for single character differences', () => {
    expect(levenshteinDistance('kitten', 'sitten')).toBe(1);
    expect(levenshteinDistance('kitten', 'kittene')).toBe(1);
    expect(levenshteinDistance('kitten', 'kitte')).toBe(1);
  });

  test('should return the correct distance for complex differences', () => {
    expect(levenshteinDistance('kitten', 'sitting')).toBe(3);
    expect(levenshteinDistance('flaw', 'lawn')).toBe(2);
    expect(levenshteinDistance('gumbo', 'gambol')).toBe(2);
  });

  test('should handle completely different strings', () => {
    expect(levenshteinDistance('abc', 'def')).toBe(3);
  });
});
