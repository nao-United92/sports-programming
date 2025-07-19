/**
 * Performs a deep clone of an object or array.
 * @param {object|Array} obj The object or array to clone.
 * @returns {object|Array} A deep clone of the input.
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

/**
 * Checks if an object is empty (has no enumerable own properties).
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Safely gets a nested property from an object using a dot-separated path.
 * @param {object} obj The object to query.
 * @param {string} path The dot-separated path to the property (e.g., 'user.address.street').
 * @param {*} [defaultValue] The default value to return if the property is not found.
 * @returns {*} The value of the nested property, or defaultValue if not found.
 */
export function getNestedProperty(obj, path, defaultValue = undefined) {
  if (path === '') {
    return obj;
  }
  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, part)) {
      return defaultValue;
    }
    current = current[part];
  }
  return current;
}

/**
 * Recursively converts object keys to camelCase.
 * @param {object} obj The object to convert.
 * @returns {object} A new object with camelCase keys.
 */
export function toCamelCaseKeys(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCaseKeys(v));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
    acc[camelKey] = toCamelCaseKeys(obj[key]);
    return acc;
  }, {});
}

/**
 * Safely sets a nested property on an object using a dot-separated path.
 * If intermediate objects do not exist, they will be created.
 * @param {object} obj The object to modify.
 * @param {string} path The dot-separated path to the property (e.g., 'user.address.street').
 * @param {*} value The value to set.
 * @returns {object} The modified object.
 */
export function setNestedProperty(obj, path, value) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = value;
    } else {
      if (typeof current[part] !== 'object' || current[part] === null) {
        current[part] = {};
      }
      current = current[part];
    }
  }
  return obj;
}

/**
 * Returns a new object with specified properties omitted.
 * @param {object} obj The original object.
 * @param {string[]} keys An array of keys to omit.
 * @returns {object} A new object without the omitted keys.
 */
export function omit(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}

/**
 * Returns a new object with only the specified properties.
 * @param {object} obj The original object.
 * @param {string[]} keys An array of keys to pick.
 * @returns {object} A new object with only the picked keys.
 */
export function pick(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/**
 * Deeply merges two or more objects.
 * @param {object} target The target object to merge into.
 * @param {object[]} sources The source objects to merge from.
 * @returns {object} The deeply merged object.
 */
export function mergeDeep(target, ...sources) {
  if (typeof target !== 'object' || target === null) {
    target = {};
  }

  for (const source of sources) {
    if (typeof source !== 'object' || source === null) {
      continue;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
          target[key] = mergeDeep(target[key] || {}, source[key]);
        } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
          target[key] = [...target[key], ...source[key]];
        } else {
          target[key] = source[key];
        }
      }
    }
  }
  return target;
}

/**
 * Inverts the keys and values of an object.
 * @param {object} obj The object to invert.
 * @returns {object} A new object with inverted keys and values.
 */
export function invertObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
}

/**
 * Checks if two objects have the same properties and values (shallow comparison).
 * @param {object} obj1 The first object.
 * @param {object} obj2 The second object.
 * @returns {boolean} True if the objects are shallowly equal, false otherwise.
 */
export function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!Object.prototype.hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
