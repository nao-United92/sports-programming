/**
 * Creates an object with inverted keys and values.
 * If the object has duplicate values, the subsequent values will overwrite the previous ones.
 *
 * @param {object} obj The object to invert.
 * @returns {object} The new inverted object.
 */
export const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};