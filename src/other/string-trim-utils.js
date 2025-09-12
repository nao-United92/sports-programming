/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
export const trim = (string, chars) => {
  const str = string == null ? '' : String(string);
  if (chars === undefined) {
    return str.trim();
  }
  const pattern = new RegExp(`^[${chars}]+|[${chars}]+$`, 'g');
  return str.replace(pattern, '');
};
