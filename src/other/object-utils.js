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

/**
 * Checks if an object is empty (has no enumerable own properties).
 *
 * @param {object} obj The object to check.
 * @returns {boolean} Returns `true` if the object is empty, `false` otherwise.
 */
export const isEmptyObject = (obj) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return false; // Arrays are not considered empty objects by this definition
  }
  return Object.keys(obj).length === 0;
};

/**
 * Deeply merges two or more objects.
 * Properties in later objects overwrite properties in earlier objects.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge.
 * @returns {object} The merged object.
 */
export const deepMerge = (target, ...sources) => {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  for (const source of sources) {
    if (source === null || typeof source !== 'object') {
      continue;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (Object.prototype.hasOwnProperty.call(target, key) && typeof target[key] === 'object' && target[key] !== null && typeof source[key] === 'object' && source[key] !== null) {
          if (Array.isArray(target[key]) && Array.isArray(source[key])) {
            target[key] = [...target[key], ...source[key]];
          } else if (Array.isArray(target[key]) || Array.isArray(source[key])) {
            // If one is an array and the other is an object, overwrite
            target[key] = source[key];
          } else {
            target[key] = deepMerge(target[key], source[key]);
          }
        } else {
          target[key] = source[key];
        }
      }
    }
  }
  return target;
};
