const { deepClone } = require('./object-deep-clone-utils');

const isObject = (value) => value !== null && typeof value === 'object';

const stringToPath = (string) => {
  return string.replace(/\[(\d+)\]/g, '.$1').split('.');
}

/**
 * Removes the property at `path` of `object`.
 * This function returns a new object and does not mutate the original.
 *
 * @param {object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {object} Returns the new object with the property removed.
 */
const unset = (object, path) => {
  if (object == null) {
    return {};
  }

  const pathArray = Array.isArray(path) ? path : stringToPath(path);
  if (pathArray.length === 0) {
    return deepClone(object);
  }

  const newObject = deepClone(object);
  let current = newObject;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    if (!isObject(current)) {
      return newObject; // Path does not exist, return cloned original
    }

    if (i === pathArray.length - 1) {
      // Last key in path, delete the property
      if (Array.isArray(current) && /^\d+$/.test(key)) {
        current.splice(parseInt(key, 10), 1);
      } else {
        delete current[key];
      }
    } else {
      // Not the last key, move deeper
      current = current[key];
    }
  }

  return newObject;
};

module.exports = { unset };
