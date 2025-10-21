const debounce = (func, wait, immediate = false) => {
  let timeout;
  let result;

  return function(...args) {
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
};

module.exports = { debounce };
