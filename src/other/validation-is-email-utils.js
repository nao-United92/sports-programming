/**
 * Checks if `string` is a valid email address.
 *
 * @param {string} string The string to check.
 * @returns {boolean} Returns `true` if `string` is a valid email, else `false`.
 */
export const isEmail = (string) => {
  if (typeof string !== 'string') {
    return false;
  }
  const emailRegex = /^[^\s@]+@(?:[^\s@.]+\.)+[^\s@.]+$/;
  return emailRegex.test(string);
};
