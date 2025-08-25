const idCounters = {};

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 * @param {string} [prefix='id_'] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 */
export const uniqueId = (prefix = 'id_') => {
  if (!idCounters[prefix]) {
    idCounters[prefix] = 0;
  }

  const id = ++idCounters[prefix];
  return `${prefix}${id}`;
};

/**
 * Resets the internal counter for a given prefix. For testing purposes only.
 * @param {string} [prefix='id_'] The prefix to reset.
 */
export const _resetUniqueIdCounter = (prefix = 'id_') => {
  idCounters[prefix] = 0;
};
