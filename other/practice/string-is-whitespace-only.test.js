import { isWhitespaceOnly } from './string-is-whitespace-only';

describe('isWhitespaceOnly', () => {
  test('should return true for whitespace strings', () => {
    expect(isWhitespaceOnly(' ')).toBe(true);
    expect(isWhitespaceOnly('  \n\t ')).toBe(true);
  });

  test('should return false for non-whitespace strings', () => {
    expect(isWhitespaceOnly(' a ')).toBe(false);
    expect(isWhitespaceOnly('')).toBe(false);
  });
});
