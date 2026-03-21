const truncate = (str, length, ending = "...") => {
  if (str.length <= length) return str;
  return str.substring(0, length - ending.length) + ending;
};
module.exports = truncate;