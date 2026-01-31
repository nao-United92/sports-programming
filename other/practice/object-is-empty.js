const objectIsEmpty = (obj) => {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

module.exports = objectIsEmpty;