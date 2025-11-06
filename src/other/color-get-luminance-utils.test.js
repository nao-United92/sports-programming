import { getLuminance } from './color-get-luminance-utils.js';

describe('getLuminance', () => {
  test('should return 0 for black', () => {
    expect(getLuminance('#000000')).toBe(0);
  });

  test('should return 1 for white', () => {
    expect(getLuminance('#ffffff')).toBe(1);
  });

  test('should calculate luminance for a color', () => {
    expect(getLuminance('#ff0000')).toBeCloseTo(0.2126);
  });

  test('should handle 3-digit hex', () => {
    expect(getLuminance('#f00')).toBeCloseTo(0.2126);
  });

  test('should return null for invalid hex', () => {
    expect(getLuminance('invalid')).toBeNull();
  });
});
