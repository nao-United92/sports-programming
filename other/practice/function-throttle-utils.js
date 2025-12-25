const throttle = (fn, ms = 0) => {
  let inThrottle = false;
  let lastArgs = null;
  let timeoutId;

  const run = () => {
    if (lastArgs) {
      fn.apply(this, lastArgs);
      lastArgs = null;
      timeoutId = setTimeout(run, ms);
    } else {
      timeoutId = null;
      inThrottle = false;
    }
  };

  return function(...args) {
    lastArgs = args;
    if (!inThrottle) {
      inThrottle = true;
      run();
    }
  };
};

module.exports = { throttle };