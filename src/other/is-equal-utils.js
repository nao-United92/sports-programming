
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

  if (value == null || other == null || (typeof value !== 'object' && typeof other !== 'object')) {
    return value === other;
  }

  if (value.constructor !== other.constructor) {
    return false;
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

  if (value instanceof Date) {
    return value.getTime() === other.getTime();
  }

  if (value instanceof RegExp) {
    return value.toString() === other.toString();
  }

  const keys1 = Object.keys(value);
  const keys2 = Object.keys(other);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(other, key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
}
