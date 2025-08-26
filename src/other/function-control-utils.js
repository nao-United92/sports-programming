export const memoize = (func, resolver) => {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  };
  memoized.cache = new Map();
  return memoized;
};

export const before = (n, func) => {
  let result;
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
};

export const after = (n, func) => {
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
};
