export const memoizeWith = (func, resolver = (...args) => JSON.stringify(args)) => {
  const cache = new Map();

  return function(...args) {
    const key = resolver.apply(this, args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
};
