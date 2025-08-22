export const once = (fn) => {
  let done = false;
  let result;
  return (...args) => {
    if (!done) {
      done = true;
      result = fn(...args);
    }
    return result;
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const before = (n, fn) => {
  let result;
  return (...args) => {
    if (--n > 0) {
      result = fn(...args);
    }
    if (n <= 1) {
      fn = null;
    }
    return result;
  };
};

export const after = (n, fn) => {
  return (...args) => {
    if (--n < 1) {
      return fn(...args);
    }
  };
};

export const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

export const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return Array.isArray(res) ? fn(...res) : fn(res);
    }, args);
  };
};