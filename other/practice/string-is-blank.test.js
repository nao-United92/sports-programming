import stringIsBlank from './string-is-blank';

describe('stringIsBlank', () => {
  test('should return true for an empty string', () => {
    expect(stringIsBlank('')).toBe(true);
  });

  test('should return true for a string with only spaces', () => {
    expect(stringIsBlank('   ')).toBe(true);
  });

    test('should return true for a string with tabs and newlines', () => {
      expect(stringIsBlank('\t\n')).toBe(true);
    });
  test('should return false for a non-empty string', () => {
    expect(stringIsBlank('hello')).toBe(false);
  });

  test('should return false for a string with leading/trailing spaces but content', () => {
    expect(stringIsBlank('  hello  ')).toBe(false);
  });

  test('should return false for a non-string input (e.g., null, undefined, number)', () => {
    expect(stringIsBlank(null)).toBe(false);
    expect(stringIsBlank(undefined)).toBe(false);
    expect(stringIsBlank(123)).toBe(false);
    expect(stringIsBlank({})).toBe(false);
    expect(stringIsBlank([])).toBe(false);
  });
});
