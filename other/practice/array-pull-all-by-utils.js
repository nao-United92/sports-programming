const pullAllBy = (arr, values, iteratee) => {
  const mappedValues = values.map(iteratee);
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (mappedValues.includes(iteratee(arr[i]))) {
      arr.splice(i, 1);
    }
  }
  
  return arr;
};

module.exports = pullAllBy;
