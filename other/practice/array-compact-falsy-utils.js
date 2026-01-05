const arrayCompactFalsy = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  return arr.filter(Boolean);
};

module.exports = arrayCompactFalsy;
