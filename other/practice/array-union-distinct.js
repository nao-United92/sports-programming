
const arrayUnionDistinct = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

module.exports = arrayUnionDistinct;
