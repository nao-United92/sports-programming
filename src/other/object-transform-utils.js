/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {object} obj The source object.
 * @param {Array<string>} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
const pick = (obj, keys) => {
  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

/**
 * The opposite of `pick`; this method creates an object composed of the
 * `object` properties not in the given `keys`.
 *
 * @param {object} obj The source object.
 * @param {Array<string>} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
const omit = (obj, keys) => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};

module.exports = { pick, omit };
