/**
 * Repeats the given string n times.
 *
 * @param {string} str The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function repeat(str, n = 1) {
  if (n < 0) {
    return '';
  }
  str = String(str);
  n = parseInt(n, 10);
  if (isNaN(n) || n <= 0) {
    return '';
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

module.exports = repeat;
