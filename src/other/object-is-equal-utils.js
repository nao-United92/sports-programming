/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Array<Array<any>>} [stack] Internal parameter to track circular references.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function isEqual(value, other, stack = []) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object') {
    return value !== value && other !== other; // Handle NaN
  }

  // Check if they are of the same constructor (e.g., both Array, both Object, both Map)
  if (value.constructor !== other.constructor) {
    return false;
  }

  // Handle circular references
  // If we've already seen this pair in the current comparison stack,
  // it means we're in a circular reference. We assume equality for this branch
  // to avoid infinite recursion. The overall equality will be determined by
  // whether the initial objects are equal.
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === value && stack[i][1] === other) {
      return true;
    }
  }

  // Add current comparison to the stack
  stack.push([value, other]);

  let result = true; // Assume equal until proven otherwise

  if (Array.isArray(value)) {
    if (value.length !== other.length) {
      result = false;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (!isEqual(value[i], other[i], stack)) {
          result = false;
          break;
        }
      }
    }
  } else if (value instanceof Date) {
    result = value.getTime() === other.getTime();
  } else if (value instanceof RegExp) {
    result = value.source === other.source && value.flags === other.flags;
  } else if (value instanceof Map) {
    if (value.size !== other.size) {
      result = false;
    }
    else {
      for (const [key, val] of value) {
        if (!other.has(key) || !isEqual(val, other.get(key), stack)) {
          result = false;
          break;
        }
      }
    }
  } else if (value instanceof Set) {
    if (value.size !== other.size) {
      result = false;
    }
    else {
      // Convert sets to arrays for comparison, ensuring order doesn't matter
      // Note: Sorting complex objects in a Set might not work as expected
      // A more robust Set comparison would iterate and check for existence
      const otherArr = Array.from(other);
      for (const val of value) {
        let found = false;
        for (let i = 0; i < otherArr.length; i++) {
          if (isEqual(val, otherArr[i], stack)) {
            found = true;
            otherArr.splice(i, 1); // Remove found item to handle duplicates
            break;
          }
        }
        if (!found) {
          result = false;
          break;
        }
      }
    }
  } else { // Handle plain objects
    const keysValue = Object.keys(value);
    const keysOther = Object.keys(other);

    if (keysValue.length !== keysOther.length) {
      result = false;
    }
    else {
      for (const key of keysValue) {
        if (!Object.prototype.hasOwnProperty.call(other, key) || !isEqual(value[key], other[key], stack)) {
          result = false;
          break;
        }
      }
    }
  }

  // Remove current comparison from the stack before returning
  stack.pop();
  return result;
}

module.exports = { isEqual };
