import { getLuminance } from './color-get-luminance-utils.js';

/**
 * Checks if a color is light.
 *
 * @param {string} hex The HEX color string.
 * @param {number} [threshold=0.5] The luminance threshold to determine if a color is light.
 * @returns {boolean|null} True if the color is light, false if dark, or null if the format is invalid.
 */
export const isLight = (hex, threshold = 0.5) => {
  const luminance = getLuminance(hex);
  if (luminance === null) {
    return null;
  }
  return luminance > threshold;
};

/**
 * Checks if a color is dark.
 *
 * @param {string} hex The HEX color string.
 * @param {number} [threshold=0.5] The luminance threshold to determine if a color is dark.
 * @returns {boolean|null} True if the color is dark, false if light, or null if the format is invalid.
 */
export const isDark = (hex, threshold = 0.5) => {
  const luminance = getLuminance(hex);
  if (luminance === null) {
    return null;
  }
  return luminance <= threshold;
};
