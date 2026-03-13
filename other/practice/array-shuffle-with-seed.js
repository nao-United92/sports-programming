/**
 * Shuffles an array using a seed for reproducibility.
 * 
 * @param {Array} arr 
 * @param {number} seed 
 * @returns {Array}
 */
const shuffleWithSeed = (arr, seed) => {
  const result = [...arr];
  let m = result.length, t, i;
  
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
};

module.exports = shuffleWithSeed;
