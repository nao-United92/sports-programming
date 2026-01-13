const isEmpty = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return true;
  }
  return Object.keys(obj).length === 0;
};

module.exports = { isEmpty };
