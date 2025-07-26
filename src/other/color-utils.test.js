import { randomHexColor } from './color-utils.js';

describe('randomHexColor', () => {
  test('should return a valid hex color code', () => {
    const color = randomHexColor();
    expect(color).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
