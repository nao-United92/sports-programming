import { getContrastRatio } from './color-get-contrast-ratio-utils.js';

describe('getContrastRatio', () => {
  test('should return 1 for identical colors', () => {
    expect(getContrastRatio('#ffffff', '#ffffff')).toBe(1);
  });

  test('should return 21 for black and white', () => {
    expect(getContrastRatio('#000000', '#ffffff')).toBe(21);
  });

  test('should calculate the contrast ratio correctly', () => {
    // A red (#ff0000) and white has a contrast of 3.998
    expect(getContrastRatio('#ff0000', '#ffffff')).toBeCloseTo(3.998);
  });

  test('should be commutative', () => {
    expect(getContrastRatio('#ff0000', '#ffffff')).toBe(getContrastRatio('#ffffff', '#ff0000'));
  });

  test('should return null for invalid hex', () => {
    expect(getContrastRatio('invalid', '#ffffff')).toBeNull();
    expect(getContrastRatio('#000000', 'invalid')).toBeNull();
  });
});
