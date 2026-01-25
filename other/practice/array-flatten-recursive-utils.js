const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
};

module.exports = { flatten };
