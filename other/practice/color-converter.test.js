const { rgbToHex, hexToRgb } = require('./color-converter');

describe('Color Converter', () => {
  describe('rgbToHex', () => {
    test('should convert RGB to Hex correctly', () => {
      expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
      expect(rgbToHex(255, 0, 0)).toBe('#FF0000');
      expect(rgbToHex(0, 128, 0)).toBe('#008000');
      expect(rgbToHex(60, 179, 113)).toBe('#3CB371');
    });

    test('should handle single digit values correctly', () => {
      expect(rgbToHex(1, 2, 3)).toBe('#010203');
    });
  });

  describe('hexToRgb', () => {
    test('should convert Hex to RGB correctly', () => {
      expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 }); // Without hash
      expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#008000')).toEqual({ r: 0, g: 128, b: 0 });
      expect(hexToRgb('#3CB371')).toEqual({ r: 60, g: 179, b: 113 });
    });

    test('should handle shorthand hex values', () => {
      expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('F00')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('should return null for invalid hex values', () => {
      expect(hexToRgb('#GGGGGG')).toBeNull();
      expect(hexToRgb('12345')).toBeNull();
      expect(hexToRgb('invalid')).toBeNull();
    });
  });
});
