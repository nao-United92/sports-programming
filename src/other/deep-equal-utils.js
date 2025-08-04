export const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length != Object.keys(b).length) return false;

    if (a instanceof Map) {
      if (a.size !== b.size) return false;
      for (let i of a.entries()) {
        if (!b.has(i[0])) return false;
      }
      for (let i of a.entries()) {
        if (!deepEqual(i[1], b.get(i[0]))) return false;
      }
      return true;
    }

    if (a instanceof Set) {
      if (a.size !== b.size) return false;
      for (let i of a.entries()) {
        if (!b.has(i[0])) return false;
      }
      return true;
    }

    if (Array.isArray(a)) {
      if (length != b.length) return false;
      for (let i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (a instanceof Date) {
      if (a.getTime() != b.getTime()) return false;
    }

    if (a instanceof RegExp) {
      if (a.source != b.source || a.flags != b.flags) return false;
    }

    for (let key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
    }

    for (let key in b) {
      if (Object.prototype.hasOwnProperty.call(b, key)) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
    }

    return true;
  }

  return a !== a && b !== b; // NaN === NaN
};