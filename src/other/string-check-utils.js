/**
 * Checks if `string` starts with the given target string.
 *
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
 */
export const startsWith = (string, target, position = 0) => {
  const str = string == null ? '' : String(string);
  const tar = String(target);
  const pos = Math.max(0, Math.min(position, str.length));
  return str.slice(pos, pos + tar.length) === tar;
};

/**
 * Checks if `string` ends with the given target string.
 *
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
 */
export const endsWith = (string, target, position) => {
  const str = string == null ? '' : String(string);
  const tar = String(target);
  const len = str.length;
  const pos = position === undefined ? len : Math.max(0, Math.min(position, len));
  return str.slice(pos - tar.length, pos) === tar;
};
