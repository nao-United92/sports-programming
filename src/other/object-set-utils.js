/**
 * Sets the value at a path of an object. If a portion of the path doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. This function returns a new
 * object and does not mutate the original.
 *
 * @param {object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the new object.
 */
const set = (obj, path, value) => {
  if (Object(obj) !== obj) return obj; // Return non-objects as-is

  // Use a deep copy to ensure immutability.
  // JSON.parse(JSON.stringify(...)) is a simple way but has limitations (e.g., with Dates, Functions, undefined).
  // For this utility's scope, it's an acceptable trade-off.
  const newObj = JSON.parse(JSON.stringify(obj));

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);

  pathArray.reduce((acc, key, index) => {
    const isLast = index === pathArray.length - 1;
    if (isLast) {
      acc[key] = value;
      return null; // End reduction
    }

    // If the key doesn't exist or is not an object, create it.
    if (acc[key] === undefined || typeof acc[key] !== 'object' || acc[key] === null) {
      const nextKey = pathArray[index + 1];
      // Create an array if the next key is a number, otherwise create an object.
      acc[key] = /^\d+$/.test(nextKey) ? [] : {};
    }

    return acc[key];
  }, newObj);

  return newObj;
};

module.exports = { set };