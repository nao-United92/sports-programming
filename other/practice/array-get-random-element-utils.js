const getRandomElement = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // Or null, or throw an error, depending on desired behavior
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

module.exports = getRandomElement;
