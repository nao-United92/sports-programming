/**
 * Converts a HEX color string to an RGB object.
 *
 * @param {string} hex The HEX color string.
 * @returns {Object|null} An object with r, g, b properties, or null if the format is invalid.
 */
export const hexToRgb = (hex) => {
  if (!hex || typeof hex !== 'string') {
    return null;
  }

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
