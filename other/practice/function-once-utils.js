const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
    }
    return result;
  };
};

module.exports = { once };
