export const getRandomElement = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
