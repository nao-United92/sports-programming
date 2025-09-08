const hexToRgb = hex => {
  const extendHex = shortHex =>
    '#' +
    shortHex
      .slice(shortHex.startsWith('#') ? 1 : 0)
      .split('')
      .map(x => x + x)
      .join('');
  const fullHex = hex.length === 4 || (hex.length === 5 && hex.startsWith('#')) ? extendHex(hex) : hex;
  const [r, g, b] = (fullHex.startsWith('#') ? fullHex.slice(1) : fullHex).match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgb(${r}, ${g}, ${b})`;
};

const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();

const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  } else {
    h = s = 0; // achromatic
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

const hexToHsl = (hex) => {
    const rgbString = hexToRgb(hex);
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);
    return rgbToHsl(r, g, b);
};

module.exports = { hexToRgb, rgbToHex, rgbToHsl, hexToHsl };