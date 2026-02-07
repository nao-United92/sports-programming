const throttle = (func, limit) => {
  let inThrottle;
  let lastResult;

  return function executedFunction(...args) {
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func(...args);
    }
    return lastResult;
  };
};

module.exports = { throttle };
