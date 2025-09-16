function debounce(func, wait, options = {}) {
  let timerId;
  let lastArgs;
  let lastThis;
  let lastCallTime;
  let lastInvokeTime = 0;
  let result;

  const maxWait = options.maxWait || 0;

  function invokeFunc(time) {
    result = func.apply(lastThis, lastArgs);
    lastInvokeTime = time;
  }

  function leadingEdge() {
    lastInvokeTime = Date.now();
    timerId = setTimeout(timerExpired, wait);
    if (options.leading) {
      invokeFunc(lastInvokeTime);
    }
  }

  function timerExpired() {
    const time = Date.now();
    if (time - lastCallTime >= wait || (maxWait && time - lastInvokeTime >= maxWait)) {
      if (options.trailing !== false) { // Default to true
        invokeFunc(lastCallTime);
      }
      clearTimeout(timerId);
      timerId = null;
    } else {
      timerId = setTimeout(timerExpired, wait - (time - lastCallTime));
    }
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    lastCallTime = Date.now();

    if (!timerId) {
      leadingEdge();
    } else if (maxWait && (lastCallTime - lastInvokeTime >= maxWait)) {
      clearTimeout(timerId);
      timerId = null;
      invokeFunc(lastCallTime);
    }
    return result;
  }

  debounced.cancel = () => {
    clearTimeout(timerId);
    timerId = null;
    lastInvokeTime = 0;
  };

  debounced.flush = () => {
    if (timerId) {
      invokeFunc(lastCallTime);
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}

export { debounce };
