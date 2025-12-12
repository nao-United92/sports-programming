const omit = (obj, properties) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const newObj = { ...obj
  };
  const propsToRemove = new Set(properties);

  for (const prop of propsToRemove) {
    delete newObj[prop];
  }

  return newObj;
};

module.exports = { omit };
