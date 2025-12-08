function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return false;
  }

  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);

  if (isArrayA !== isArrayB) return false;

  if (isArrayA) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    // Also check for own property to be safe, though Object.keys does this.
    if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
