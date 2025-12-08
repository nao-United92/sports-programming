const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  
  const result = { ...obj };
  const props = Array.isArray(keys) ? keys : [keys];
  
  for (const key of props) {
    delete result[key];
  }
  
  return result;
};

module.exports = omit;