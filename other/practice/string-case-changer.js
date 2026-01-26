const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
};


module.exports = { capitalize, camelCase };
