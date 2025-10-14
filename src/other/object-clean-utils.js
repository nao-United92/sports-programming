/**
 * Creates a new object with all properties that have null or undefined values removed.
 *
 * @param {object} obj The object to clean.
 * @returns {object} The new object with null and undefined values removed.
 */
const cleanObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = {
  cleanObject,
};
