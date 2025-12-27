const unzip = (arr) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arr.map(subArray => (Array.isArray(subArray) ? subArray.length : 0)));

  if (maxLength === 0) {
    return [];
  }

  const result = Array.from({ length: maxLength }, () => []);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < maxLength; j++) {
      if (Array.isArray(arr[i])) {
        result[j][i] = arr[i][j];
      }
    }
  }

  return result;
};

module.exports = { unzip };
