const omitBy = (obj, predicate) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }

  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!predicate(obj[key], key)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

module.exports = omitBy;
