
export const unary = (fn) => {
  return function(arg) {
    return fn.call(this, arg);
  };
};
