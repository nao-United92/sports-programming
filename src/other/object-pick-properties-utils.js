const pick = (obj, properties) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {};
  }

  const newObj = {};
  const propsToPick = new Set(properties);

  for (const prop of propsToPick) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
};

module.exports = { pick };
