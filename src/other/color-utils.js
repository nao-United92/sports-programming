/**
 * Converts a HEX color code to an RGB color object.
 *
 * @param {string} hex The HEX color code (e.g., "#RRGGBB" or "#RGB").
 * @returns {{r: number, g: number, b: number}|null} An object with r, g, b values, or null if the hex is invalid.
 */
export const hexToRgb = (hex) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return null;
  }

  let hexValue = hex.substring(1);

  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map(char => char + char).join('');
  }

  const bigint = parseInt(hexValue, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
};
