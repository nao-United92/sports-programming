export const debounce = (func, wait) => {
  let timeout;
  let result;

  return function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      result = func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    return result;
  };
};
