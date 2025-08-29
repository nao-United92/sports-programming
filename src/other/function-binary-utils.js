
export const binary = (fn) => {
  return function(arg1, arg2) {
    return fn.call(this, arg1, arg2);
  };
};
