import { get } from './object-get-utils.js';

/**
 * Creates an array of values corresponding to paths of object.
 *
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the new array of picked values.
 */
export function at(object, ...paths) {
  return paths.flat().map(path => get(object, path));
}
