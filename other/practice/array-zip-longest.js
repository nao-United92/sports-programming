/**
 * Zips arrays together, filling shorter arrays with a default value.
 *
 * @param {Array} defaultValue 
 * @param {...Array[]} arrays
 * @returns {Array[]}
 */
const zipLongest = (defaultValue, ...arrays) => {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, i) =>
    arrays.map((arr) => (i < arr.length ? arr[i] : defaultValue))
  );
};

module.exports = zipLongest;
