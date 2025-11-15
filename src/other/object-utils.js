/**
 * Creates a deep copy of an object.
 *
 * @param {any} obj The object to deep clone.
 * @returns {any} The deep cloned object.
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clone = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
};

/**
 * Gets the value at a path of an object.
 *
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve. Path can be a string like 'a.b.c' or an array like ['a', 'b', 'c'].
 * @param {any} [defaultValue] The value returned for undefined resolved values.
 * @returns {any} Returns the resolved value, else the defaultValue.
 */
export const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(key => key);
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

/**
 * Sets the value at a path of an object. If a portion of the path doesn't exist, it's created.
 *
 * @param {object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {any} value The value to set.
 * @returns {object} Returns the modified object.
 */
export const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(key => key);
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    const nextKey = pathArray[i + 1];
    const isNextKeyNumeric = /^\d+$/.test(nextKey);

    if (current[key] === undefined || typeof current[key] !== 'object') {
      current[key] = isNextKeyNumeric ? [] : {};
    }
    current = current[key];
  }
  current[pathArray[pathArray.length - 1]] = value;
  return obj;
};
