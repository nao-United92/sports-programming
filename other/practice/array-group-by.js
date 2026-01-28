/**
 * Groups the elements of an array of objects based on a given key.
 *
 * @param {Array<object>} array The array to group.
 * @param {string} key The key to group by.
 * @returns {object} An object with keys representing the groups and values as arrays of objects.
 */
function groupBy(array, key) {
  if (!Array.isArray(array)) {
    return {};
  }
  return array.reduce((result, currentValue) => {
    // Get the value of the key for the current object
    const groupKey = currentValue[key];
    
    // If the group key doesn't exist in the result, create it
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    
    // Push the current object to the group
    result[groupKey].push(currentValue);
    
    return result;
  }, {});
}

module.exports = {
  groupBy,
};