/**
 * Pads string on the left and right sides if it's shorter than length.
 * Padding characters are truncated if they can't be evenly divided by length.
 *
 * @param {string} str The string to pad.
 * @param {number} length The padding length.
 * @param {string} [char=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 */
function pad(str, length, char = ' ') {
  str = String(str);
  length = parseInt(length, 10);
  if (isNaN(length) || length <= str.length) {
    return str;
  }

  const padLength = length - str.length;
  const mid = Math.floor(padLength / 2);
  const leftPadLength = mid;
  const rightPadLength = padLength - mid;

  const leftPad = char.repeat(Math.ceil(leftPadLength / char.length)).slice(0, leftPadLength);
  const rightPad = char.repeat(Math.ceil(rightPadLength / char.length)).slice(0, rightPadLength);

  return leftPad + str + rightPad;
}

module.exports = pad;
