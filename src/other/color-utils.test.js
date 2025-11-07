import { hexToRgb } from './color-utils.js';

describe('hexToRgb', () => {
  it('should convert a 6-digit hex color to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  it('should convert a 3-digit hex color to RGB', () => {
    expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#0f0')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#00f')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  it('should be case-insensitive', () => {
    expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#fF00aA')).toEqual({ r: 255, g: 0, b: 170 });
  });

  it('should return null for invalid hex codes', () => {
    expect(hexToRgb('ff0000')).toBeNull(); // Missing #
    expect(hexToRgb('#ff00')).toBeNull(); // Invalid length
    expect(hexToRgb('#ff000g')).toBeNull(); // Invalid character
    expect(hexToRgb(null)).toBeNull();
    expect(hexToRgb(undefined)).toBeNull();
  });
});
