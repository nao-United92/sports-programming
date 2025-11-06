import { getLuminance } from './color-get-luminance-utils.js';

/**
 * Calculates the contrast ratio between two HEX colors.
 *
 * @param {string} hex1 The first HEX color string.
 * @param {string} hex2 The second HEX color string.
 * @returns {number|null} The contrast ratio, or null if either color format is invalid.
 */
export const getContrastRatio = (hex1, hex2) => {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);

  if (lum1 === null || lum2 === null) {
    return null;
  }

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
};
