/**
 * Calculates the luminance of a HEX color.
 *
 * @param {string} hex The HEX color string.
 * @returns {number|null} The luminance value (0-1), or null if the format is invalid.
 */
export const getLuminance = (hex) => {
  const hexToRgb = (h) => {
    if (!h || typeof h !== 'string') {
      return null;
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = h.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  };

  const rgb = hexToRgb(hex);
  if (!rgb) {
    return null;
  }

  // Formula from https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure
  const { r, g, b } = rgb;
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
