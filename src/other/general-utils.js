/**
 * Generates a UUID (Universally Unique Identifier) v4.
 * @returns {string} A UUID string.
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Delays the execution of a function for a specified amount of time.
 * @param {number} ms The number of milliseconds to delay.
 * @returns {Promise<void>} A Promise that resolves after the delay.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generates a unique ID string. This is a simple implementation and not cryptographically secure.
 * @returns {string} A unique ID string.
 */
export function getUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Checks if a value is null or undefined.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is null or undefined, false otherwise.
 */
export function isNil(value) {
  return value === null || value === undefined;
}

/**
 * A no-operation function. Does nothing.
 */
export function noop() {
  // This function intentionally does nothing.
}

/**
 * Checks if a value is empty.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export function isEmpty(value) {
  if (isNil(value)) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @returns {Function} A new throttled function.
 */
export function throttle(func, wait) {
  let inThrottle, lastFn, lastTime;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          func.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} A new debounced function.
 */
export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Generates a random string of a given length.
 * @param {number} length The length of the random string to generate.
 * @returns {string} The generated random string.
 */
export function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Checks if a value is a plain object (created by Object constructor or null prototype).
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}
