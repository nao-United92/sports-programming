/**
 * Generates a UUID (Universally Unique Identifier) v4.
 * This implementation is based on RFC 4122.
 *
 * @returns {string} A new UUID string.
 */
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export default generateUUID;
