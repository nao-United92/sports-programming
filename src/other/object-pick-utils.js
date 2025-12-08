const pick = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const result = {};
  const props = Array.isArray(keys) ? keys : [keys];
  
  for (const key of props) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  
  return result;
};

module.exports = pick;
