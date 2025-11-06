/**
 * Converts RGB color values to a HEX color string.
 *
 * @param {number} r The red color value.
 * @param {number} g The green color value.
 * @param {number} b The blue color value.
 * @returns {string} The HEX color string.
 */
export const rgbToHex = (r, g, b) => {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};