import { rgbToHex } from './color-rgb-to-hex-utils.js';

describe('rgbToHex', () => {
  test('should convert RGB to HEX', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
  });

  test('should handle zero values', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
  });

  test('should handle various color values', () => {
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
    expect(rgbToHex(128, 128, 128)).toBe('#808080');
  });
});