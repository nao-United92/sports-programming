
const unzip = (array) => {
  if (!array || !array.length) return [];
  const length = array[0].length;
  return Array.from({ length }, (_, i) => array.map((row) => row[i]));
};

module.exports = unzip;
