function pick(object, keys) {
  if (object === null || object === undefined) {
    return {};
  }
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

function omit(object, keys) {
  if (object === null || object === undefined) {
    return {};
  }
  const keySet = new Set(keys);
  return Object.keys(object).reduce((obj, key) => {
    if (!keySet.has(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

module.exports = {
  pick,
  omit,
};
