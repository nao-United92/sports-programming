let idCounter = 0;

/**
 * Generates a unique ID. If a prefix is given, the ID is appended to it.
 * The uniqueness is guaranteed only for the current session.
 *
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 */
export const uniqueId = (prefix = '') => {
  idCounter += 1;
  return `${prefix}${idCounter}`;
};
