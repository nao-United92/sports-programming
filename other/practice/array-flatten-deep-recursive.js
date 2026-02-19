
const arrayFlattenDeepRecursive = (arr) => {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(arrayFlattenDeepRecursive(val)) : acc.concat(val), 
    []
  );
};

module.exports = arrayFlattenDeepRecursive;
