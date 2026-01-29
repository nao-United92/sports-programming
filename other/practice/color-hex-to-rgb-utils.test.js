import hexToRgb from './color-hex-to-rgb-utils';

describe('hexToRgb', () => {
  it('should convert a full hex color to RGB object', () => {
    expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#0000FF')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('#C0FFEE')).toEqual({ r: 192, g: 255, b: 238 });
  });

  it('should convert a shorthand hex color to RGB object', () => {
    expect(hexToRgb('#F00')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#0F0')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#00F')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#ABC')).toEqual({ r: 170, g: 187, b: 204 });
  });

  it('should handle hex codes without leading hash', () => {
    expect(hexToRgb('FF0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('F00')).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('should return null for invalid hex codes', () => {
    expect(hexToRgb('#GGG')).toBeNull();
    expect(hexToRgb('G00000')).toBeNull();
    expect(hexToRgb('#12345')).toBeNull(); // too short
    expect(hexToRgb('#1234567')).toBeNull(); // too long
    expect(hexToRgb('invalid')).toBeNull();
  });

  it('should return null for non-string inputs', () => {
    expect(hexToRgb(null)).toBeNull();
    expect(hexToRgb(undefined)).toBeNull();
    expect(hexToRgb(123)).toBeNull();
    expect(hexToRgb({})).toBeNull();
  });

  it('should handle empty string input', () => {
    expect(hexToRgb('')).toBeNull();
  });
});
