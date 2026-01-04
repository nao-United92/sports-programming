export const omitProperty = (obj, keysToOmit) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return non-objects as is
  }
  if (!Array.isArray(keysToOmit) && typeof keysToOmit !== 'string') {
    throw new TypeError('Expected keysToOmit to be a string or an array of strings');
  }

  const keys = Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit];
  const newObj = { ...obj
  }; // Create a shallow copy

  for (const key of keys) {
    delete newObj[key];
  }

  return newObj;
};
