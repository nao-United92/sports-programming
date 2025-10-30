let idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is provided, it will be prepended to the ID.
 *
 * @param {string} [prefix] The prefix to prepend to the ID.
 * @returns {string} Returns the unique ID.
 */
function uniqueId(prefix) {
  const id = ++idCounter;
  return prefix ? `${prefix}${id}` : String(id);
}

module.exports = { uniqueId };
