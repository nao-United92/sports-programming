
export const memoizeWith = (keyGen, fn) => {
  const cache = {};

  return (...args) => {
    const key = keyGen(...args);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
