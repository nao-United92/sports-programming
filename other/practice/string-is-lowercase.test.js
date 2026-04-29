import { isLowercase } from './string-is-lowercase';

describe('isLowercase', () => {
  test('should return true for lowercase strings', () => {
    expect(isLowercase('abc')).toBe(true);
    expect(isLowercase('123')).toBe(true);
    expect(isLowercase('hello world')).toBe(true);
  });

  test('should return false for strings with uppercase', () => {
    expect(isLowercase('Abc')).toBe(false);
    expect(isLowercase('ABC')).toBe(false);
  });
});
