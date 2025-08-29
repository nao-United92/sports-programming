/**
 * Deep freezes an object.
 *
 * @param {Object} object The object to deep freeze.
 * @returns {Object} The deep frozen object.
 */
export const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
};