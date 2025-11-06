/**
 * Darkens a HEX color by a given amount.
 *
 * @param {string} hex The HEX color string.
 * @param {number} amount The amount to darken by (0-100).
 * @returns {string|null} The darkened HEX color string, or null if the format is invalid.
 */
export const darken = (hex, amount) => {
  const hexToRgb = (h) => {
    if (!h || typeof h !== 'string') {
      return null;
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = h.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  };

  const rgbToHex = (r, g, b) => {
    const toHex = (c) => {
      const h = c.toString(16);
      return h.length === 1 ? '0' + h : h;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const rgb = hexToRgb(hex);
  if (!rgb) {
    return null;
  }

  const newR = Math.round(Math.max(0, rgb.r * (1 - amount / 100)));
  const newG = Math.round(Math.max(0, rgb.g * (1 - amount / 100)));
  const newB = Math.round(Math.max(0, rgb.b * (1 - amount / 100)));

  return rgbToHex(newR, newG, newB);
};
