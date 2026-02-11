const unzip = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const maxLength = Math.max(...array.map(arr => arr.length));
  if (maxLength === 0) {
    return []; // Handle case where input is [[], [], []]
  }

  return Array.from({ length: maxLength }, (_, i) =>
    Array.from({ length: array.length }, (_, j) => array[j][i])
  );
};

export { unzip };
