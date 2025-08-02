/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export function deepClone(value) {
  const memo = new WeakMap();

  function clone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (memo.has(obj)) {
      return memo.get(obj);
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }

    if (obj instanceof RegExp) {
      return new RegExp(obj.source, obj.flags);
    }

    const newObj = Array.isArray(obj) ? [] : {};
    memo.set(obj, newObj);

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = clone(obj[key]);
      }
    }

    return newObj;
  }

  return clone(value);
}