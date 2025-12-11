const isEqual = (value, other, visited = new WeakMap()) => {
  // 1. Handle primitive types and direct equality
  if (value === other) {
    return true;
  }

  // 2. Handle null/undefined, and non-object types
  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object') {
    return value !== value && other !== other; // Special case for NaN
  }

  // Handle circular references
  if (visited.has(value) && visited.get(value) === other) {
    return true; // Already processed this pair, they are equal
  }
  visited.set(value, other); // Mark this pair as visited

  // 3. Handle specific object types
  const classOfValue = Object.prototype.toString.call(value);
  const classOfOther = Object.prototype.toString.call(other);

  if (classOfValue !== classOfOther) {
    return false;
  }

  switch (classOfValue) {
    case '[object RegExp]':
      return value.source === other.source && value.flags === other.flags;
    case '[object Date]':
      return +value === +other; // Compare dates by timestamp
    case '[object Arguments]':
    case '[object Array]':
      if (value.length !== other.length) {
        return false;
      }
      for (let i = 0; i < value.length; i++) {
        if (!isEqual(value[i], other[i], visited)) { // Pass visited map
          return false;
        }
      }
      return true;
    case '[object Object]':
      const keysValue = Object.keys(value);
      const keysOther = Object.keys(other);

      if (keysValue.length !== keysOther.length) {
        return false;
      }

      for (let i = 0; i < keysValue.length; i++) {
        const key = keysValue[i];
        if (!Object.prototype.hasOwnProperty.call(other, key) || !isEqual(value[key], other[key], visited)) { // Pass visited map
          return false;
        }
      }
      return true;
    default:
      return false;
  }
};

module.exports = isEqual;
