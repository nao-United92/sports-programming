const capitalize = (str) => {
  if (str === null || str === undefined || str === '') {
    return '';
  }
  const s = String(str);
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

module.exports = { capitalize };
