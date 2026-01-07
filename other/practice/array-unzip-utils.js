const unzip = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const maxLength = Math.max(...array.map(subArray => 
    Array.isArray(subArray) ? subArray.length : 0
  ));

  if (maxLength === 0) {
    return [];
  }

  return Array.from({ length: maxLength }).map((_, i) =>
    array.map(subArray => (subArray && subArray[i] !== undefined ? subArray[i] : undefined))
  );
};

module.exports = { unzip };
