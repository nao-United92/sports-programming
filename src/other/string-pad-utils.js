/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 */
function pad(string, length, chars = ' ') {
  string = String(string);
  length = length == null ? 0 : +length;
  if (length <= string.length) {
    return string;
  }
  const padLength = length - string.length;
  const left = Math.floor(padLength / 2);
  const right = padLength - left;
  return chars.repeat(left) + string + chars.repeat(right);
}

module.exports = { pad };
