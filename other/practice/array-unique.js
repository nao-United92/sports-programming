const arrayUnique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return [...new Set(arr)];
};

export default arrayUnique;
