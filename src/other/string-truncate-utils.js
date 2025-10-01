/**
 * Truncates a string at a specified length, optionally respecting word boundaries
 * and adding a custom suffix.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the output string.
 * @param {Object} [options] Optional settings.
 * @param {string} [options.suffix='...'] The suffix to append if the string is truncated.
 * @param {boolean} [options.respectWordBoundaries=true] If true, avoids cutting words in the middle.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, { suffix = '...', respectWordBoundaries = true } = {}) => {
  if (str == null || str.length <= length) {
    return str;
  }

  if (respectWordBoundaries) {
    // Truncate the string to the desired length, minus the suffix length, to find the last space.
    const truncated = str.slice(0, length - suffix.length);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      return str.slice(0, lastSpace) + suffix;
    }
  }

  // Fallback for no spaces found or if word boundaries are ignored.
  return str.slice(0, length - suffix.length) + suffix;
};