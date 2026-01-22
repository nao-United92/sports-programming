export const getRandomElement = (arr) => {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};