const capitalize = (str, lowerRest = false) => {
  if (!str) return "";
  const rest = lowerRest ? str.slice(1).toLowerCase() : str.slice(1);
  return str.charAt(0).toUpperCase() + rest;
};
module.exports = capitalize;