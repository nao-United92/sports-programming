const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);

export const deepMapValues = (obj, fn) => {
  if (Array.isArray(obj)) {
    return obj.map((val) => deepMapValues(val, fn));
  }

  if (isObject(obj)) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepMapValues(obj[key], fn);
      return acc;
    }, {});
  }

  return fn(obj);
};
