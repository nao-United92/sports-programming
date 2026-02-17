const arrayFlattenDeep = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return arr.flat(Infinity);
};

export default arrayFlattenDeep;