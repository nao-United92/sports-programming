/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist, it's created.
 * Arrays are created for missing index properties while objects are created for all other missing properties.
 *
 * @param {Object} obj The object to modify.
 * @param {string|Array<string|number>} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the new object with the set value.
 */
export const deepSet = (obj, path, value) => {
  const newObj = JSON.parse(JSON.stringify(obj)); // Simple deep clone

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\\[(\\]/g, '.').replace(/\\[|\\]/g, '.').split('.').filter(Boolean);

  let current = newObj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] !== 'object') {
        const nextKey = pathArray[i + 1];
        current[key] = String(Number(nextKey)) === nextKey ? [] : {};
      }
      current = current[key];
    }
  }

  return newObj;
};

