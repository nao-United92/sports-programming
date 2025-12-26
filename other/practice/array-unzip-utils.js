const unzip = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arr.map(subArray => subArray.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arr.map(subArray => subArray[i]));
  }

  return result;
};

module.exports = {
  unzip
};