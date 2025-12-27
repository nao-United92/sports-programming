const format = (str, ...args) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.replace(/\{(\d+)\}/g, (match, index) => {
    const argIndex = parseInt(index, 10);
    // Return the argument if it exists, otherwise return the original placeholder
    return typeof args[argIndex] !== 'undefined' ? args[argIndex] : match;
  });
};

export default format;