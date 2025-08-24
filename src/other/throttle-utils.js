/**
 * Creates a throttled function that only invokes `func` at most once per every `delay` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} delay The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, delay) {
  let lastCall = 0;
  let timeoutId;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = now;
        func.apply(this, args);
      }, delay);
    } else {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
