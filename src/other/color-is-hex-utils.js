/**
 * Checks if a string is a valid hexadecimal color code.
 *
 * @param {string} color The string to check.
 * @returns {boolean} Returns `true` if the string is a valid hex color, else `false`.
 */
function isHexColor(color) {
  if (typeof color !== 'string') {
    return false;
  }
  // Regex to match #RGB, #RGBA, #RRGGBB, #RRGGBBAA
  return /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(color);
}

module.exports = { isHexColor };
