const debounce = (func, wait, immediate = false) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for the first argument.');
  }
  if (typeof wait !== 'number' || wait < 0) {
    throw new TypeError('Expected a non-negative number for the second argument (wait).');
  }
  if (typeof immediate !== 'boolean') {
      throw new TypeError('Expected a boolean for the third argument (immediate).');
  }

  let timeout;
  let result;

  const debounced = function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

module.exports = { debounce };
