/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
export function isEqual(value, other) {
  if (value === other) {
    return true;
  }

  if (value === null || typeof value !== 'object' || other === null || typeof other !== 'object') {
    return value !== value && other !== other; // Handle NaN
  }

  if (value.constructor !== other.constructor) {
    return false;
  }

  if (value instanceof Date) {
    return value.getTime() === other.getTime();
  }

  if (value instanceof RegExp) {
    return value.toString() === other.toString();
  }

  if (Array.isArray(value)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  if (value instanceof Map) {
    if (value.size !== other.size) {
      return false;
    }
    for (const [key, val] of value) {
      if (!other.has(key) || !isEqual(val, other.get(key))) {
        return false;
      }
    }
    return true;
  }

  if (value instanceof Set) {
    if (value.size !== other.size) {
      return false;
    }
    for (const v1 of value) {
      let found = false;
      for (const v2 of other) {
        if (isEqual(v1, v2)) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }

  const keys = Object.keys(value);
  if (keys.length !== Object.keys(other).length) {
    return false;
  }

  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(other, key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
}
