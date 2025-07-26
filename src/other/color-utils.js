
/**
 * Generates a random hexadecimal color code.
 *
 * @returns {string} A random hex color code (e.g., "#RRGGBB").
 */
export function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Converts a hex color code to an RGB object.
 * @param {string} hex The hex color code (e.g., "#RRGGBB" or "#RGB").
 * @returns {{r: number, g: number, b: number}|null} An object with r, g, b values, or null if invalid.
 */
export function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    return null;
  }

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
