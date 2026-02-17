const arrayUnion = (...arrays) => {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('Expected all arguments to be arrays.');
  }
  const flatArray = arrays.flat();
  return [...new Set(flatArray)];
};

export default arrayUnion;