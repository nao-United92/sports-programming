
import { rgbToHex } from './rgb-to-hex-utils.js';

describe('rgbToHex', () => {
  test('should convert RGB values to a hexadecimal color string', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
  });

  test('should handle single-digit hexadecimal values', () => {
    expect(rgbToHex(10, 10, 10)).toBe('#0a0a0a');
  });
});
