const repeat = (str, n = 1) => {
  return new Array(n + 1).join(str);
};

module.exports = { repeat };
