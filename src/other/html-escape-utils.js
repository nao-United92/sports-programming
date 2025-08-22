const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const unescapeHtml = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

export const escapeHTML = (str) => str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);

export const unescapeHTML = (str) => str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => unescapeHtml[match]);