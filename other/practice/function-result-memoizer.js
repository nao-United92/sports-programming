export const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
};
