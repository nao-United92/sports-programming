import { darken } from './color-darken-utils.js';

describe('darken', () => {
  test('should darken a light color', () => {
    expect(darken('#ffffff', 50)).toBe('#808080');
  });

  test('should not change a black color', () => {
    expect(darken('#000000', 50)).toBe('#000000');
  });

  test('should handle a 0 amount', () => {
    expect(darken('#ff0000', 0)).toBe('#ff0000');
  });

  test('should handle a 100 amount', () => {
    expect(darken('#ff0000', 100)).toBe('#000000');
  });

  test('should handle various colors and amounts', () => {
    expect(darken('#c00000', 50)).toBe('#600000');
  });

  test('should return null for invalid hex', () => {
    expect(darken('invalid', 50)).toBeNull();
  });
});
