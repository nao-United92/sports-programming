export const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (hasBeenCalled) {
      return result;
    }
    hasBeenCalled = true;
    result = fn.apply(this, args);
    return result;
  };
};
