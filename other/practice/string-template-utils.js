const template = (str, data) => {
  if (typeof str !== 'string') {
    return '';
  }
  if (typeof data !== 'object' || data === null) {
    return str;
  }

  return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data.hasOwnProperty(key) ? data[key] : match;
  });
};

export default template;