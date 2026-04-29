import { isDigitOnly } from './string-is-digit-only';

describe('isDigitOnly', () => {
  test('should return true for digit strings', () => {
    expect(isDigitOnly('123')).toBe(true);
    expect(isDigitOnly('0')).toBe(true);
  });

  test('should return false for non-digit strings', () => {
    expect(isDigitOnly('123a')).toBe(false);
    expect(isDigitOnly('123 ')).toBe(false);
    expect(isDigitOnly('')).toBe(false);
  });
});
