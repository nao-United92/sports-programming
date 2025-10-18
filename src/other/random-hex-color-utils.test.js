
import { randomHexColor } from './random-hex-color-utils.js';

describe('randomHexColor', () => {
  test('should return a valid hexadecimal color code', () => {
    const color = randomHexColor();
    expect(color).toMatch(/^#[0-9a-f]{6}$/i);
  });

  test('should start with a #', () => {
    const color = randomHexColor();
    expect(color.startsWith('#')).toBe(true);
  });

  test('should have a length of 7', () => {
    const color = randomHexColor();
    expect(color.length).toBe(7);
  });
});
