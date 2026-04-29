import { isAlphaOnly } from './string-is-alpha-only';

describe('isAlphaOnly', () => {
  test('should return true for alpha strings', () => {
    expect(isAlphaOnly('abc')).toBe(true);
    expect(isAlphaOnly('ABC')).toBe(true);
  });

  test('should return false for non-alpha strings', () => {
    expect(isAlphaOnly('abc1')).toBe(false);
    expect(isAlphaOnly('abc ')).toBe(false);
    expect(isAlphaOnly('')).toBe(false);
  });
});
