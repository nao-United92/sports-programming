const pick = (obj, keys) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

export default pick;
