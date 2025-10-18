
/**
 * Converts an RGB color value to a hexadecimal color string.
 *
 * @param {number} r The red color value (0-255).
 * @param {number} g The green color value (0-255).
 * @param {number} b The blue color value (0-255).
 * @returns {string} The hexadecimal color string.
 */
export const rgbToHex = (r, g, b) => {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
