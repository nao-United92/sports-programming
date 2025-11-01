const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

const unescapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => htmlUnescapes[match]);
};

export { unescapeHTML };
