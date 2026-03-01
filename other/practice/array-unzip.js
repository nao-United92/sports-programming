const arrayUnzip = (arr) => {
  if (!arr.length) return [];
  const length = arr[0].length;
  return Array.from({ length }, (_, i) => arr.map(a => a[i]));
};

module.exports = arrayUnzip;
