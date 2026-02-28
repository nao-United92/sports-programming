
const rotateLeft = (arr, n = 1) => {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
};
module.exports = rotateLeft;
