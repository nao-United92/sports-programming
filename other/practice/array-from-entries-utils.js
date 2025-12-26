const fromEntries = (arr) => {
  if (!Array.isArray(arr)) {
    return {};
  }
  return Object.fromEntries(arr);
};

module.exports = {
  fromEntries
};