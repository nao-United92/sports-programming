
/**
 * Generates a random hexadecimal color code.
 *
 * @returns {string} A random hex color code (e.g., "#RRGGBB").
 */
export function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Converts a hex color code to an RGB object.
 * @param {string} hex The hex color code (e.g., "#RRGGBB" or "#RGB").
 * @returns {{r: number, g: number, b: number}|null} An object with r, g, b values, or null if invalid.
 */
export function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    return null;
  }

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Converts RGB color values to a hexadecimal color code.
 * @param {number} r The red component (0-255).
 * @param {number} g The green component (0-255).
 * @param {number} b The blue component (0-255).
 * @returns {string} The hexadecimal color code (e.g., "#RRGGBB").
 */
export function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Lightens a hex color by a given percentage.
 * @param {string} hex The hex color code.
 * @param {number} percent The percentage to lighten (0-100).
 * @returns {string} The lightened hex color code.
 */
export function lighten(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const amount = Math.round(2.55 * percent);
  const newR = Math.min(255, r + amount);
  const newG = Math.min(255, g + amount);
  const newB = Math.min(255, b + amount);
  return rgbToHex(newR, newG, newB);
}

/**
 * Darkens a hex color by a given percentage.
 * @param {string} hex The hex color code.
 * @param {number} percent The percentage to darken (0-100).
 * @returns {string} The darkened hex color code.
 */
export function darken(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const amount = Math.round(2.55 * percent);
  const newR = Math.max(0, r - amount);
  const newG = Math.max(0, g - amount);
  const newB = Math.max(0, b - amount);
  return rgbToHex(newR, newG, newB);
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @returns {Array}           The HSL representation
 */
export function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @returns {Array}           The RGB representation
 */
export function hslToRgb(h, s, l) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Helper to calculate luminance
const getLuminance = (r, g, b) => {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/**
 * Calculates the contrast ratio between two RGB colors.
 * @param {{r: number, g: number, b: number}} rgb1 The first RGB color.
 * @param {{r: number, g: number, b: number}} rgb2 The second RGB color.
 * @returns {number} The contrast ratio.
 */
export function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Checks if two colors meet the WCAG contrast ratio requirements.
 * @param {string|{r: number, g: number, b: number}} color1 The first color (HEX or RGB object).
 * @param {string|{r: number, g: number, b: number}} color2 The second color (HEX or RGB object).
 * @param {'AA'|'AAA'} level The WCAG level to check against ('AA' or 'AAA').
 * @returns {boolean} True if the contrast ratio meets the requirement, false otherwise.
 */
export function checkContrast(color1, color2, level = 'AA') {
  const rgb1 = typeof color1 === 'string' ? hexToRgb(color1) : color1;
  const rgb2 = typeof color2 === 'string' ? hexToRgb(color2) : color2;

  if (!rgb1 || !rgb2) return false;

  const ratio = getContrastRatio(rgb1, rgb2);
  const requiredRatio = level === 'AAA' ? 7 : 4.5;

  return ratio >= requiredRatio;
}

/**
 * Inverts a hexadecimal color.
 * @param {string} hex The hex color code (e.g., "#RRGGBB").
 * @returns {string} The inverted hex color code.
 */
export function invertColor(hex) {
  if (typeof hex !== 'string' || !hex.startsWith('#')) {
    return null; // Or throw an error, or return original
  }
  let color = hex;
  if (color.length === 4) { // Handle shorthand hex
    color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
  }
  const rgb = hexToRgb(color);
  if (!rgb) {
    return null;
  }
  const invertedR = (255 - rgb.r).toString(16).padStart(2, '0');
  const invertedG = (255 - rgb.g).toString(16).padStart(2, '0');
  const invertedB = (255 - rgb.b).toString(16).padStart(2, '0');
  return `#${invertedR}${invertedG}${invertedB}`;
}

/**
 * Converts an RGB color to CMYK.
 * @param {number} r The red component (0-255).
 * @param {number} g The green component (0-255).
 * @param {number} b The blue component (0-255).
 * @returns {{c: number, m: number, y: number, k: number}} An object with c, m, y, k values (0-1).
 */
export function rgbToCmyk(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const k = 1 - Math.max(r, g, b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;

  return { c, m, y, k };
}
