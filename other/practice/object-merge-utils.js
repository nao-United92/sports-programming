const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const merge = (target, source) => {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  const output = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = merge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }

  return output;
};

module.exports = merge;
