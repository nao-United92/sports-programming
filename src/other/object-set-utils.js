/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties.
 *
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 */
const set = (object, path, value) => {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);

  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    const isLast = i === pathArray.length - 1;

    if (isLast) {
      current[key] = value;
    } else {
      if (current[key] === undefined || current[key] === null) {
        const nextKey = pathArray[i + 1];
        const isNextKeyIndex = /^\d+$/.test(nextKey);
        current[key] = isNextKeyIndex ? [] : {};
      }
      current = current[key];
    }
  }

  return object;
};

export { set };
