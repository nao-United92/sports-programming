const titleCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

module.exports = { titleCase };
