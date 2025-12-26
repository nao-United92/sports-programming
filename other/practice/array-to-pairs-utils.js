const toPairs = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return [];
  }
  return Object.entries(obj);
};

module.exports = {
  toPairs
};