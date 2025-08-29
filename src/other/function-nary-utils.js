
export const nAry = (n, fn) => {
  return function(...args) {
    return fn.apply(this, args.slice(0, n));
  };
};
