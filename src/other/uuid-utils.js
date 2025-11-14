/**
 * Generates a UUID (Universally Unique Identifier) version 4.
 *
 * A UUID is a 128-bit number used to uniquely identify information in computer systems.
 * UUID v4 is generated using random numbers.
 *
 * @returns {string} A randomly generated UUID v4 string.
 */
export const uuid = () => {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // Use crypto API for better randomness if available
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  } else {
    // Fallback to Math.random for environments without crypto
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
};
