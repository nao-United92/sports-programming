let idCounter = 0;

export const uniqueId = (prefix = '') => {
  idCounter++;
  return `${prefix}${idCounter}`;
};

/**
 * Generates a UUID (Universally Unique Identifier) version 4.
 * @returns {string} A UUID v4 string.
 */
export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};