function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function throttle(func, limit) {
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
}

module.exports = {
  debounce,
  throttle,
};
