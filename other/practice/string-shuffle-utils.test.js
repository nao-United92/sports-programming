import { shuffleString } from './string-shuffle-utils';

describe('shuffleString', () => {
  test('should return a string of the same length', () => {
    const input = 'hello';
    const result = shuffleString(input);
    expect(result.length).toBe(input.length);
  });

  test('should contain all original characters', () => {
    const input = 'abcde';
    const result = shuffleString(input);
    expect(result.split('').sort().join('')).toBe(input.split('').sort().join(''));
  });

  test('should return an empty string for non-string input', () => {
    expect(shuffleString(null)).toBe('');
    expect(shuffleString(123)).toBe('');
  });

  test('should handle empty string', () => {
    expect(shuffleString('')).toBe('');
  });
});
