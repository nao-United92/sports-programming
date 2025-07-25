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

/**
 * Checks if a value is an object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} a The first value to compare.
 * @param {*} b The second value to compare.
 * @returns {boolean} True if the values are equivalent, false otherwise.
 */
export function isDeepEqual(a, b) {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) return false;

    let length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- > 0;) {
        if (!isDeepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- > 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- > 0;) {
      const key = keys[i];
      if (!isDeepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
}

/**
 * Renames a key in an object.
 * @param {object} obj The original object.
 * @param {string} oldKey The key to rename.
 * @param {string} newKey The new name for the key.
 * @returns {object} A new object with the key renamed.
 */
export function renameKey(obj, oldKey, newKey) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (!obj.hasOwnProperty(oldKey)) {
    return { ...obj };
  }
  const newObj = { ...obj };
  newObj[newKey] = newObj[oldKey];
  delete newObj[oldKey];
  return newObj;
}

/**
 * Creates an object composed of the picked object properties.
 * @param {object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {object} Returns the new object.
 */
export function pick(object, paths) {
  return paths.reduce((obj, path) => {
    if (object && Object.prototype.hasOwnProperty.call(object, path)) {
      obj[path] = object[path];
    }
    return obj;
  }, {});
}

/**
 * The opposite of `pick`; this method creates an object composed of the own
 * and inherited enumerable property paths of `object` that are not omitted.
 * @param {object} object The source object.
 * @param {string[]} paths The property paths to omit.
 * @returns {object} Returns the new object.
 */
export function omit(object, paths) {
  const newObject = { ...object };
  paths.forEach(path => {
    delete newObject[path];
  });
  return newObject;
}

/**
 * Creates a new object with the results of calling a provided function on every property in the calling object.
 * @param {object} object The object to iterate over.
 * @param {Function} iteratee The function to call for each property.
 * @returns {object} Returns the new mapped object.
 */
export function mapObject(object, iteratee) {
  const newObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[key] = iteratee(object[key], key, object);
    }
  }
  return newObject;
}

/**
 * Iterates over properties of `object`, returning an array of all properties `predicate` returns truthy for.
 * @param {object} object The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {object} Returns the new filtered object.
 */
export function filterObject(object, predicate) {
  const newObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key], key, object)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

/**
 * Creates an object with the same values as `object` and keys generated by running each own enumerable string keyed property of `object` thru `iteratee`.
 * @param {object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {object} Returns the new mapped object.
 */
export function mapKeys(object, iteratee) {
  const newObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[iteratee(object[key], key, object)] = object[key];
    }
  }
  return newObject;
}

/**
 * Creates an object with the same keys as `object` and values generated by running each own enumerable string keyed property of `object` thru `iteratee`.
 * @param {object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {object} Returns the new mapped object.
 */
export function mapValues(object, iteratee) {
  const newObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[key] = iteratee(object[key], key, object);
    }
  }
  return newObject;
}