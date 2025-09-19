/**
 * Creates an object with keys and values swapped.
 * For each key-value pair, the new object will have a property where the key is the original value and the value is the original key.
 * If multiple keys have the same value, the last key will overwrite the previous ones.
 *
 * @param {object} object The source object.
 * @returns {object} Returns the new inverted object.
 */
const invert = (object) => {
  const result = {};
  if (object == null) {
    return result;
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[object[key]] = key;
    }
  }
  return result;
};

export { invert };
