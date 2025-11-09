let idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 */
const uniqueId = (prefix = '') => {
  idCounter++;
  return `${prefix}${idCounter}`;
};

module.exports = { uniqueId, _test_resetIdCounter: () => { idCounter = 0; } };