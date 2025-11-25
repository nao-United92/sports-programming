const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
};

module.exports = { omit };
