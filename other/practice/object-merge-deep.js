const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const mergeDeep = (target, ...sources) => {
  if (!isObject(target)) {
    throw new TypeError('Target must be an object');
  }

  const output = { ...target };

  sources.forEach(source => {
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!(key in output)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = mergeDeep(output[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      }
    }
  });

  return output;
};

module.exports = { mergeDeep };
