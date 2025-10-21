const isObject = (value) => value !== null && typeof value === 'object';

// This is a simplified version. A robust implementation would handle brackets and quotes.
const stringToPath = (string) => {
  return string.replace(/\[(\d+)\]/g, '.$1').split('.');
}

const { deepClone } = require('./object-deep-clone-utils');

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist, it's created.
 * Arrays are created for missing index properties while objects are created for all other missing properties.
 * This function returns a new object and does not mutate the original.
 *
 * @param {object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the new object with the updated value.
 */
const set = (object, path, value) => {
  const pathArray = Array.isArray(path) ? path : stringToPath(path);
  const newObject = deepClone(object || {});

  let current = newObject;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    const nextKey = pathArray[i + 1];
    const isNextKeyIndex = /^\d+$/.test(nextKey);

    if (!isObject(current[key])) {
      current[key] = isNextKeyIndex ? [] : {};
    }
    current = current[key];
  }

  current[pathArray[pathArray.length - 1]] = value;
  return newObject;
};

module.exports = { set };