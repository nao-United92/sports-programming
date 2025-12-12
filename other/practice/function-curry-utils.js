const curry = (fn) => {
  const arity = fn.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }

    return curried.bind(null, ...args);
  };
};

module.exports = curry;
