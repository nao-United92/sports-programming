import { isConsonant } from './string-is-consonant';

describe('isConsonant', () => {
  test('should return true for consonants', () => {
    expect(isConsonant('b')).toBe(true);
    expect(isConsonant('Z')).toBe(true);
    expect(isConsonant('f')).toBe(true);
  });

  test('should return false for non-consonants', () => {
    expect(isConsonant('a')).toBe(false);
    expect(isConsonant('E')).toBe(false);
    expect(isConsonant('1')).toBe(false);
    expect(isConsonant(' ')).toBe(false);
    expect(isConsonant('sh')).toBe(false);
  });
});
