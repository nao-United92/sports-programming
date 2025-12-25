const once = (fn) => {
  let hasBeenCalled = false;
  let result;
  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

module.exports = { once };