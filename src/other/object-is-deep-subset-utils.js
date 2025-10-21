const { isEqual } = require('./object-is-equal-utils');

/**
 * Checks if `subset` is a deep subset of `superset`.
 * This means all properties and values in `subset` must be present and deeply equal in `superset` (or be a subset of superset's corresponding value).
 *
 * @param {*} superset The object to check against.
 * @param {*} subset The object to check if it's a subset.
 * @param {Array<Array<any>>} [stack] Internal parameter to track circular references.
 * @returns {boolean} Returns `true` if `subset` is a deep subset of `superset`, else `false`.
 */
function isDeepSubset(superset, subset, stack = []) {
  if (superset === subset) {
    return true;
  }

  if (typeof superset !== 'object' || superset === null || typeof subset !== 'object' || subset === null) {
    return false;
  }

  // Handle circular references
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === superset && stack[i][1] === subset) {
      return true;
    }
  }
  stack.push([superset, subset]);

  let result = true;

  // If subset is an array, superset must also be an array and contain all elements of subset
  if (Array.isArray(subset)) {
    if (!Array.isArray(superset) || superset.length < subset.length) {
      result = false;
    } else {
      // Check if all elements of subset are present in superset (as subsets)
      for (const subElem of subset) {
        let found = false;
        for (const superElem of superset) {
          if (isDeepSubset(superElem, subElem, stack)) { // Recursive call for deep subset
            found = true;
            break;
          }
        }
        if (!found) {
          result = false;
          break;
        }
      }
    }
  }
  // If subset is a plain object, superset must also be a plain object
  else if (subset.constructor === Object) {
    if (superset.constructor !== Object) {
      result = false;
    } else {
      for (const key in subset) {
        if (!Object.prototype.hasOwnProperty.call(superset, key) || !isDeepSubset(superset[key], subset[key], stack)) {
          result = false;
          break;
        }
      }
    }
  }
  // For other types (Date, RegExp, Map, Set), they must be deeply equal
  else {
    result = isEqual(superset, subset, stack); // Use isEqual for exact match of other types
  }

  stack.pop(); // Remove from stack before returning
  return result;
}

module.exports = { isDeepSubset };
