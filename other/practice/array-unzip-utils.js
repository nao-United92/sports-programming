export const unzip = (array) => {
  if (!array || array.length === 0) {
    return [];
  }

  // Determine the maximum length of any inner array to set up the result structure
  const maxLength = Math.max(...array.map(innerArr => (innerArr && Array.isArray(innerArr) ? innerArr.length : 0)));
  
  // Initialize result with `maxLength` number of empty arrays
  const result = Array.from({ length: maxLength }, () => []);

  for (let i = 0; i < array.length; i++) {
    const currentInnerArray = array[i];
    if (currentInnerArray && Array.isArray(currentInnerArray)) {
      for (let j = 0; j < maxLength; j++) {
        result[j].push(currentInnerArray[j]);
      }
    } else {
      // If the inner element is not an array (e.g., null, undefined),
      // push undefined for each corresponding position in the result.
      for (let j = 0; j < maxLength; j++) {
        result[j].push(undefined);
      }
    }
  }

  return result;
};