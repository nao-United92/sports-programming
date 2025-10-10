const { isHexColor } = require('./color-is-hex-utils.js');

describe('isHexColor', () => {
  test('should return true for valid 3-digit hex colors', () => {
    expect(isHexColor('#FFF')).toBe(true);
    expect(isHexColor('#000')).toBe(true);
    expect(isHexColor('#abc')).toBe(true);
    expect(isHexColor('#ABC')).toBe(true);
  });

  test('should return true for valid 4-digit hex colors (with alpha)', () => {
    expect(isHexColor('#FFFF')).toBe(true);
    expect(isHexColor('#0000')).toBe(true);
    expect(isHexColor('#abcd')).toBe(true);
    expect(isHexColor('#ABCD')).toBe(true);
  });

  test('should return true for valid 6-digit hex colors', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
    expect(isHexColor('#000000')).toBe(true);
    expect(isHexColor('#abcdef')).toBe(true);
    expect(isHexColor('#ABCDEF')).toBe(true);
  });

  test('should return true for valid 8-digit hex colors (with alpha)', () => {
    expect(isHexColor('#FFFFFFFF')).toBe(true);
    expect(isHexColor('#00000000')).toBe(true);
    expect(isHexColor('#abcdef01')).toBe(true);
    expect(isHexColor('#ABCDEF99')).toBe(true);
  });

  test('should return false for invalid hex colors', () => {
    expect(isHexColor('#FF')).toBe(false);
    expect(isHexColor('#FGHIJK')).toBe(false);
    expect(isHexColor('#12345')).toBe(false);
    expect(isHexColor('#1234567')).toBe(false);
    expect(isHexColor('FF0000')).toBe(false); // Missing hash
    expect(isHexColor('red')).toBe(false);
    expect(isHexColor('')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isHexColor(null)).toBe(false);
    expect(isHexColor(undefined)).toBe(false);
    expect(isHexColor(123456)).toBe(false);
    expect(isHexColor({})).toBe(false);
  });
});
