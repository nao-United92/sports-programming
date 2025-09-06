/**
 * Groups elements of an array into sub-arrays based on a predicate function.
 * Elements are grouped as long as the predicate returns true for consecutive elements.
 *
 * @param {Array} array The array to group.
 * @param {Function} predicate The function invoked per iteration, receiving (currentValue, previousValue, currentIndex, array).
 * @returns {Array<Array>} Returns a new array of grouped sub-arrays.
 */
export function groupWhile(array, predicate) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const result = [];
  let currentGroup = [array[0]];

  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    const previousValue = array[i - 1];

    if (predicate(currentValue, previousValue, i, array)) {
      currentGroup.push(currentValue);
    } else {
      result.push(currentGroup);
      currentGroup = [currentValue];
    }
  }

  result.push(currentGroup); // Push the last group
  return result;
}
