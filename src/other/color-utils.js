
/**
 * Generates a random hexadecimal color code.
 *
 * @returns {string} A random hex color code (e.g., "#RRGGBB").
 */
export function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
