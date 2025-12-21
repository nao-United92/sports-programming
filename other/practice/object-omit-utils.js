const omit = (obj, keys) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  const result = { ...obj };
  const keysToRemove = Array.isArray(keys) ? keys : [keys];

  for (const key of keysToRemove) {
    delete result[key];
  }

  return result;
};

module.exports = omit;
