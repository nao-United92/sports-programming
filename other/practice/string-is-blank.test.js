import { isBlank } from './string-is-blank';

describe('isBlank', () => {
  test('returns true for empty string', () => {
    expect(isBlank('')).toBe(true);
  });

  test('returns true for whitespace string', () => {
    expect(isBlank('   ')).toBe(true);
  });

  test('returns false for non-blank string', () => {
    expect(isBlank('a')).toBe(false);
  });
});
