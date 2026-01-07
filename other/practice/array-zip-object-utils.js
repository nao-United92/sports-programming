const zipObject = (keys, values) => {
  if (!Array.isArray(keys) || !Array.isArray(values)) {
    return {};
  }
  
  const result = {};
  const length = Math.min(keys.length, values.length);

  for (let i = 0; i < length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
};

module.exports = { zipObject };

