export const curry = (func) => {
  const arity = func.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return func.apply(this, args);
    }

    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
};

export const partial = (func, ...boundArgs) => {
  return function(...remainingArgs) {
    return func.apply(this, boundArgs.concat(remainingArgs));
  };
};
