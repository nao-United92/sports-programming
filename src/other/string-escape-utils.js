const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

const reEscapedHtml = /[&<>"'`]/g;
const reUnescapedHtml = /&(?:amp|lt|gt|quot|#39);/g;

export const escape = (string) => {
  return (string && reEscapedHtml.test(string)) ? string.replace(reEscapedHtml, (chr) => htmlEscapes[chr]) : string;
};

export const unescape = (string) => {
  return (string && reUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, (entity) => htmlUnescapes[entity]) : string;
};
