const memoize = (fn, resolver) => {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (!memoized.cache.has(key)) {
      memoized.cache.set(key, fn.apply(this, args));
    }
    return memoized.cache.get(key);
  };
  memoized.cache = new Map();
  return memoized;
};

module.exports = memoize;
