export const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args); // Simple key generation for demonstration
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
};
