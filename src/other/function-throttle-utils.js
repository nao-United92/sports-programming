const throttle = (func, limit) => {
  let inThrottle;
  let lastResult;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func.apply(context, args);
    }
    return lastResult;
  };
};

module.exports = { throttle };