export function memoizeWith(resolver, fn) {
  const cache = new Map();
  return function(...args) {
    const key = resolver.apply(this, args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
