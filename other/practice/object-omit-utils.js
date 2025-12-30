const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object' || !Array.isArray(keys)) {
    return {};
  }

  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};

export default omit;