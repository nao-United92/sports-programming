import { levenshtein } from './string-similarity-utils.js';

describe('levenshtein', () => {
  test('should return 0 for identical strings', () => {
    expect(levenshtein('hello', 'hello')).toBe(0);
  });

  test('should return the length of the other string if one is empty', () => {
    expect(levenshtein('', 'hello')).toBe(5);
    expect(levenshtein('hello', '')).toBe(5);
  });

  test('should calculate the correct distance for simple substitutions', () => {
    expect(levenshtein('kitten', 'sitting')).toBe(3);
  });

  test('should calculate the correct distance for insertions and deletions', () => {
    expect(levenshtein('saturday', 'sunday')).toBe(3);
    expect(levenshtein('apple', 'apply')).toBe(1);
  });

  test('should be case sensitive', () => {
    expect(levenshtein('hello', 'Hello')).toBe(1);
  });
});
