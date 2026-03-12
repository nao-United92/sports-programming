const isStringEmpty = require('./string-is-empty-util');

describe('isStringEmpty', () => {
  test('returns true for empty or whitespace string', () => {
    expect(isStringEmpty('')).toBe(true);
    expect(isStringEmpty('   ')).toBe(true);
  });
  test('returns false for non-empty string', () => {
    expect(isStringEmpty('hello')).toBe(false);
  });
});
