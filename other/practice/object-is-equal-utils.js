function isEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
    return a === b;
  }

  if (a === null || a === undefined || b === null || b === undefined) {
    return a === b;
  }

  if (a.prototype !== b.prototype) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  keysA.sort();
  keysB.sort();

  for (let i = 0; i < keysA.length; i++) {
    if (keysA[i] !== keysB[i]) return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!isEqual(a[key], b[key])) return false;
  }

  return true;
}

module.exports = { isEqual };
