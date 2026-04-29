import { isHexColor } from './string-is-hex-color';

describe('isHexColor', () => {
  test('should return true for valid hex colors', () => {
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('#FFFFFF')).toBe(true);
    expect(isHexColor('#123456')).toBe(true);
    expect(isHexColor('#abc')).toBe(true);
  });

  test('should return false for invalid hex colors', () => {
    expect(isHexColor('fff')).toBe(false);
    expect(isHexColor('#ffff')).toBe(false);
    expect(isHexColor('#12345g')).toBe(false);
    expect(isHexColor('#1234567')).toBe(false);
  });
});
