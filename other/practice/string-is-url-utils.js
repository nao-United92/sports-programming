const isURL = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = isURL;