/**
 * Groups an array of objects by a specific key.
 * 
 * @param {Array<Object>} arr - The array of objects to group.
 * @param {string|Function} key - The key or a function that returns the key to group by.
 * @returns {Object} An object where keys are group criteria and values are arrays of objects.
 */
export const groupByKey = (arr, key) => {
  return arr.reduce((acc, val) => {
    const group = typeof key === 'function' ? key(val) : val[key];
    (acc[group] = acc[group] || []).push(val);
    return acc;
  }, {});
};
