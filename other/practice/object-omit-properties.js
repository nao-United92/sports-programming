
const objectOmitProperties = (obj, keys) => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
};

module.exports = objectOmitProperties;
