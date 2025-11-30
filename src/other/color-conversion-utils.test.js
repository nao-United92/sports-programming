import { rgbToHex, hexToRgb, rgbToHsl, hslToRgb } from './color-conversion-utils.js';

describe('Color Conversion Utilities', () => {
  describe('rgbToHex', () => {
    it('should convert RGB to hex', () => {
      expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
      expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
      expect(rgbToHex(60, 179, 113)).toBe('#3cb371');
    });

    it('should clamp values to 0-255 range', () => {
      expect(rgbToHex(-10, 300, 128)).toBe('#00ff80');
    });
  });

  describe('hexToRgb', () => {
    it('should convert hex to RGB', () => {
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#3cb371')).toEqual({ r: 60, g: 179, b: 113 });
    });

    it('should convert shorthand hex to RGB', () => {
      expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
      expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should return null for invalid hex codes', () => {
      expect(hexToRgb('#invalid')).toBeNull();
      expect(hexToRgb('#1234')).toBeNull();
      expect(hexToRgb('red')).toBeNull();
    });
  });

  describe('rgbToHsl', () => {
    it('should convert RGB to HSL', () => {
      let [h, s, l] = rgbToHsl(255, 255, 255);
      expect(h).toBeCloseTo(0);
      expect(s).toBeCloseTo(0);
      expect(l).toBeCloseTo(1);

      [h, s, l] = rgbToHsl(0, 0, 0);
      expect(h).toBeCloseTo(0);
      expect(s).toBeCloseTo(0);
      expect(l).toBeCloseTo(0);

      [h, s, l] = rgbToHsl(255, 0, 0);
      expect(h).toBeCloseTo(0);
      expect(s).toBeCloseTo(1);
      expect(l).toBeCloseTo(0.5);

      [h, s, l] = rgbToHsl(60, 179, 113);
      expect(h).toBeCloseTo(0.41, 2);
      expect(s).toBeCloseTo(0.49, 2);
      expect(l).toBeCloseTo(0.47, 2);
    });
  });

  describe('hslToRgb', () => {
    it('should convert HSL to RGB', () => {
      let [r, g, b] = hslToRgb(0, 0, 1);
      expect(r).toBe(255);
      expect(g).toBe(255);
      expect(b).toBe(255);

      [r, g, b] = hslToRgb(0, 0, 0);
      expect(r).toBe(0);
      expect(g).toBe(0);
      expect(b).toBe(0);

      [r, g, b] = hslToRgb(0, 1, 0.5);
      expect(r).toBe(255);
      expect(g).toBe(0);
      expect(b).toBe(0);

      [r, g, b] = hslToRgb(0.41, 0.49, 0.47);
      expect(r).toBe(60);
      expect(g).toBe(179);
      expect(b).toBe(113);
    });
  });
});
