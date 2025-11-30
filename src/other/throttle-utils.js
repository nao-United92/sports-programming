export function throttle(func, wait) {
  let inThrottle = false;

  return function() {
    const context = this;
    const args = arguments;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}
