const omit = (obj, keysToOmit) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const result = { ...obj };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
};

export default omit;
