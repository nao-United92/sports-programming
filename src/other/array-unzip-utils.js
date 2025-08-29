
export const unzip = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const filteredArrays = array.filter(Array.isArray);

  if (filteredArrays.length === 0) {
    return [];
  }

  const maxLen = Math.max(...filteredArrays.map(arr => arr.length));
  const finalResult = Array.from({ length: maxLen }, () => []);

  for (let i = 0; i < filteredArrays.length; i++) {
    const currentArr = filteredArrays[i];
    for (let j = 0; j < maxLen; j++) {
      finalResult[j].push(currentArr[j]);
    }
  }

  return finalResult;
};
