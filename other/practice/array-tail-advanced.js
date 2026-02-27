const tailAdvanced = (array) => {
  if (!Array.isArray(array)) return [];
  const [, ...rest] = array;
  return rest;
};

module.exports = tailAdvanced;
