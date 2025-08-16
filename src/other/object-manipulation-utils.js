
/**
 * Deeply merges two or more objects.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge from.
 * @returns {object} The merged object.
 */
export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

/**
 * Deeply clones an object.
 *
 * @param {object} obj The object to clone.
 * @returns {object} The cloned object.
 */
export const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = cloneDeep(item);
      return arr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = cloneDeep(obj[key]);
      return newObj;
    }, {});
  }

  return obj;
};

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};
