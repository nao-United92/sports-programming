const { rgbToHex } = require('./color-rgb-to-hex-utils.js');

describe('rgbToHex', () => {
  test('should convert basic RGB values to hex', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
  });

  test('should convert mixed RGB values to hex', () => {
    expect(rgbToHex(128, 0, 128)).toBe('#800080');
    expect(rgbToHex(255, 165, 0)).toBe('#ffa500'); // Orange
    expect(rgbToHex(64, 224, 208)).toBe('#40e0d0'); // Turquoise
  });

  test('should handle values outside the 0-255 range by clamping', () => {
    expect(rgbToHex(-10, 0, 0)).toBe('#000000');
    expect(rgbToHex(256, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, -50, 0)).toBe('#000000');
    expect(rgbToHex(0, 300, 0)).toBe('#00ff00');
    expect(rgbToHex(-100, 300, -50)).toBe('#00ff00');
  });

  test('should return lowercase hex values', () => {
    expect(rgbToHex(10, 20, 30)).toBe('#0a141e');
  });
});
