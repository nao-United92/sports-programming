import { randomHexColor } from './color-utils.js';

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
