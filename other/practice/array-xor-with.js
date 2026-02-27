const xorWith = (comparator, ...arrays) => {
  const result = [];
  const allElements = arrays.flat();
  
  for (const item of allElements) {
    let occurrenceCount = 0;
    for (const array of arrays) {
      if (array.some(arrItem => comparator(item, arrItem))) {
        occurrenceCount++;
      }
    }
    
    if (occurrenceCount === 1) {
      if (!result.some(resItem => comparator(item, resItem))) {
        result.push(item);
      }
    }
  }
  
  return result;
};

module.exports = xorWith;
