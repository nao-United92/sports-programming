import { randomHexColor, hexToRgb, rgbToHex, lighten, darken, rgbToHsl, hslToRgb, getContrastRatio, checkContrast, invertColor, rgbToCmyk } from './color-utils.js';

describe('randomHexColor', () => {
  test('should return a valid hex color code', () => {
    const color = randomHexColor();
    expect(color).toMatch(/^#[0-9a-f]{6}$/i);
  });
});

describe('hexToRgb', () => {
  test('should convert a 6-digit hex color to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should convert a 3-digit hex color to RGB', () => {
    expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#0f0')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#00f')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should return null for invalid hex codes', () => {
    expect(hexToRgb('#12345')).toBeNull();
    expect(hexToRgb('#gggggg')).toBeNull();
    expect(hexToRgb('not a color')).toBeNull();
    expect(hexToRgb(null)).toBeNull();
  });
});

describe('rgbToHex', () => {
  test('should convert RGB values to a hex color code', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
  });

  test('should handle float values by rounding', () => {
    expect(rgbToHex(255.5, 0.4, 0)).toBe('#ff0000');
  });
});

describe('lighten', () => {
  test('should lighten a color by a given percentage', () => {
    expect(lighten('#000000', 50)).toBe('#808080');
  });
});

describe('darken', () => {
  test('should darken a color by a given percentage', () => {
    expect(darken('#ffffff', 50)).toBe('#808080');
  });
});

describe('rgbToHsl', () => {
  test('should convert black to HSL', () => {
    const [h, s, l] = rgbToHsl(0, 0, 0);
    expect(h).toBe(0);
    expect(s).toBe(0);
    expect(l).toBe(0);
  });

  test('should convert white to HSL', () => {
    const [h, s, l] = rgbToHsl(255, 255, 255);
    expect(h).toBe(0);
    expect(s).toBe(0);
    expect(l).toBe(1);
  });

  test('should convert red to HSL', () => {
    const [h, s, l] = rgbToHsl(255, 0, 0);
    expect(h).toBe(0);
    expect(s).toBe(1);
    expect(l).toBe(0.5);
  });
});

describe('hslToRgb', () => {
  test('should convert HSL black to RGB', () => {
    expect(hslToRgb(0, 0, 0)).toEqual([0, 0, 0]);
  });

  test('should convert HSL white to RGB', () => {
    expect(hslToRgb(0, 0, 1)).toEqual([255, 255, 255]);
  });

  test('should convert HSL red to RGB', () => {
    expect(hslToRgb(0, 1, 0.5)).toEqual([255, 0, 0]);
  });
});

describe('getContrastRatio', () => {
  test('should calculate the contrast ratio between black and white', () => {
    const white = { r: 255, g: 255, b: 255 };
    const black = { r: 0, g: 0, b: 0 };
    expect(getContrastRatio(white, black)).toBeCloseTo(21, 1);
  });
});

describe('checkContrast', () => {
  test('should return true for colors that meet AA standard', () => {
    expect(checkContrast('#000000', '#ffffff', 'AA')).toBe(true);
    expect(checkContrast('#757575', '#ffffff', 'AA')).toBe(true);
  });

  test('should return false for colors that do not meet AA standard', () => {
    expect(checkContrast('#888888', '#ffffff', 'AA')).toBe(false);
  });

  test('should return true for colors that meet AAA standard', () => {
    expect(checkContrast('#000000', '#ffffff', 'AAA')).toBe(true);
    expect(checkContrast('#6A6A6A', '#FFFFFF', 'AAA')).toBe(true);
  });

  test('should return false for colors that do not meet AAA standard', () => {
    expect(checkContrast('#777777', '#ffffff', 'AAA')).toBe(false);
  });
});

describe('invertColor', () => {
  test('should invert a 6-digit hex color', () => {
    expect(invertColor('#000000')).toBe('#ffffff');
    expect(invertColor('#ffffff')).toBe('#000000');
    expect(invertColor('#ff0000')).toBe('#00ffff');
    expect(invertColor('#00ff00')).toBe('#ff00ff');
    expect(invertColor('#0000ff')).toBe('#ffff00');
  });

  test('should invert a 3-digit hex color', () => {
    expect(invertColor('#000')).toBe('#ffffff');
    expect(invertColor('#f00')).toBe('#ff00ff');
  });

  test('should return null for invalid hex codes', () => {
    expect(invertColor('000000')).toBeNull();
    expect(invertColor('#12345')).toBeNull();
    expect(invertColor('not a color')).toBeNull();
  });
});

describe('rgbToCmyk', () => {
  test('should convert RGB black to CMYK', () => {
    const { c, m, y, k } = rgbToCmyk(0, 0, 0);
    expect(c).toBeCloseTo(0);
    expect(m).toBeCloseTo(0);
    expect(y).toBeCloseTo(0);
    expect(k).toBeCloseTo(1);
  });

  test('should convert RGB white to CMYK', () => {
    const { c, m, y, k } = rgbToCmyk(255, 255, 255);
    expect(c).toBeCloseTo(0);
    expect(m).toBeCloseTo(0);
    expect(y).toBeCloseTo(0);
    expect(k).toBeCloseTo(0);
  });

  test('should convert RGB red to CMYK', () => {
    const { c, m, y, k } = rgbToCmyk(255, 0, 0);
    expect(c).toBeCloseTo(0);
    expect(m).toBeCloseTo(1);
    expect(y).toBeCloseTo(1);
    expect(k).toBeCloseTo(0);
  });

  test('should convert RGB green to CMYK', () => {
    const { c, m, y, k } = rgbToCmyk(0, 255, 0);
    expect(c).toBeCloseTo(1);
    expect(m).toBeCloseTo(0);
    expect(y).toBeCloseTo(1);
    expect(k).toBeCloseTo(0);
  });

  test('should convert RGB blue to CMYK', () => {
    const { c, m, y, k } = rgbToCmyk(0, 0, 255);
    expect(c).toBeCloseTo(1);
    expect(m).toBeCloseTo(1);
    expect(y).toBeCloseTo(0);
    expect(k).toBeCloseTo(0);
  });
});
