import { hexToRgb } from './color-hex-to-rgb-utils.js';

describe('hexToRgb', () => {
  test('should convert a 6-digit hex color to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('should convert a 3-digit hex color to RGB', () => {
    expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('should handle hex colors without a leading hash', () => {
    expect(hexToRgb('00ff00')).toEqual({ r: 0, g: 255, b: 0 });
  });

  test('should be case-insensitive', () => {
    expect(hexToRgb('#Ff0000')).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('should return null for invalid hex color formats', () => {
    expect(hexToRgb('#ff00')).toBeNull();
    expect(hexToRgb('ff00')).toBeNull();
    expect(hexToRgb('#gggggg')).toBeNull();
    expect(hexToRgb(null)).toBeNull();
    expect(hexToRgb(undefined)).toBeNull();
  });
});
