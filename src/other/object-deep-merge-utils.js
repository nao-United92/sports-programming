const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const deepMerge = (target, ...sources) => {
  if (!target || typeof target !== 'object') {
    return target;
  }

  const output = { ...target
  };

  sources.forEach(source => {
    if (isObject(source)) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (isObject(source[key]) && isObject(output[key])) {
            output[key] = deepMerge(output[key], source[key]);
          } else if (Array.isArray(source[key]) && Array.isArray(output[key])) {
            output[key] = [...output[key], ...source[key]];
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  });

  return output;
};

module.exports = { deepMerge };
