export const memoize = (func, resolver) => {
  const cache = new Map();

  const memoized = function(...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };

  memoized.cache = cache; // Expose cache for inspection/clearing if needed
  return memoized;
};