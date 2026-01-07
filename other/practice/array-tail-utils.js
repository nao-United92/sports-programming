// Returns all but the first element of an array.
const tail = (array) => {
  if (!Array.isArray(array) || array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = { tail };