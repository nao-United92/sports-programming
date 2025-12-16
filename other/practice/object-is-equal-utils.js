const isEqual = (value, other) => {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object') {
    return value !== value && other !== other; // Handle NaN
  }

  const keysA = Object.keys(value);
  const keysB = Object.keys(other);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
};

module.exports = isEqual;
