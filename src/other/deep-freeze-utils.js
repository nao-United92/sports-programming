/**
 * Deep freezes an object, making it immutable.
 *
 * @param {T} obj The object to deep freeze.
 * @returns {T} The deep frozen object.
 * @template T
 */
export const deepFreeze = (obj) => {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => deepFreeze(obj[key]));
  }
  return obj;
};
