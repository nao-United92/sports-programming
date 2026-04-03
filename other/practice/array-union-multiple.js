/**
 * Returns an array of unique elements present in all input arrays.
 * 
 * @param {...Array} arrays - The arrays to union.
 * @returns {Array} - An array of unique elements.
 */
function arrayUnionMultiple(...arrays) {
  return [...new Set(arrays.flat())];
}

module.exports = arrayUnionMultiple;
