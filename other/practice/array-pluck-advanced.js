const pluckAdvanced = (array, path) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map(item => {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, item);
  });
};

module.exports = pluckAdvanced;
