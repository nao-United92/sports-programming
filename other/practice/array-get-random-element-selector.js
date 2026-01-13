const getRandomElement = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

module.exports = { getRandomElement };
