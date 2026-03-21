const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function(...args) {
    const context = this, now = Date.now();
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = now;
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (now - lastTime), 0));
    }
  };
};
module.exports = throttle;