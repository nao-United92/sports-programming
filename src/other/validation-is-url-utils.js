/**
 * Checks if `string` is a valid URL.
 *
 * @param {string} string The string to check.
 * @returns {boolean} Returns `true` if `string` is a valid URL, else `false`.
 */
export const isURL = (string) => {
  if (typeof string !== 'string') {
    return false;
  }
  const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/i;
  return urlRegex.test(string);
};
