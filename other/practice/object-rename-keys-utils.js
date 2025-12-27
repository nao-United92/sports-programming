const renameKeys = (obj, keyMap) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  if (typeof keyMap !== 'object' || keyMap === null) {
    return { ...obj };
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = keyMap[key] || key;
    acc[newKey] = obj[key];
    return acc;
  }, {});
};

export default renameKeys;