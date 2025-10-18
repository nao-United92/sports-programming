
/**
 * Generates a random hexadecimal color code.
 *
 * @returns {string} A random hexadecimal color code (e.g., '#ff0000').
 */
export const randomHexColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
};
