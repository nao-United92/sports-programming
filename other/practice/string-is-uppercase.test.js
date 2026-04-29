import { isUppercase } from './string-is-uppercase';

describe('isUppercase', () => {
  test('should return true for uppercase strings', () => {
    expect(isUppercase('ABC')).toBe(true);
    expect(isUppercase('123')).toBe(true);
    expect(isUppercase('HELLO WORLD')).toBe(true);
  });

  test('should return false for strings with lowercase', () => {
    expect(isUppercase('Abc')).toBe(false);
    expect(isUppercase('abc')).toBe(false);
  });
});
