import { lighten } from './color-lighten-utils.js';

describe('lighten', () => {
  test('should lighten a dark color', () => {
    expect(lighten('#000000', 50)).toBe('#808080');
  });

  test('should not change a white color', () => {
    expect(lighten('#ffffff', 50)).toBe('#ffffff');
  });

  test('should handle a 0 amount', () => {
    expect(lighten('#ff0000', 0)).toBe('#ff0000');
  });

  test('should handle a 100 amount', () => {
    expect(lighten('#ff0000', 100)).toBe('#ffffff');
  });

  test('should handle various colors and amounts', () => {
    expect(lighten('#800000', 50)).toBe('#c00000');
  });

  test('should return null for invalid hex', () => {
    expect(lighten('invalid', 50)).toBeNull();
  });
});
