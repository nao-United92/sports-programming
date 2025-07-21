/**
 * Checks if an array is empty.
 *
 * @param arr The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export function isEmptyArray(arr) {
    return arr.length === 0;
}

/**
 * Returns the last element of an array.
 *
 * @param arr The array to get the last element from.
 * @returns The last element of the array, or undefined if the array is empty.
 */
export function lastElement(arr) {
    return arr[arr.length - 1];
}

/**
 * Removes a specific element from an array.
 *
 * @param arr The array to modify. This function returns a new array and does not modify the original.
 * @param element The element to remove.
 * @returns A new array with the element removed.
 */
export function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
}

/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) shuffle algorithm.
 *
 * @param arr The array to shuffle.
 * @returns The shuffled array (modified in place).
 */
export function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
        ];
    }
    return arr;
}

/**
 * Returns a new array with duplicate values removed.
 *
 * @param arr The array to remove duplicates from.
 * @returns A new array with unique values.
 */
export function uniqueArray(arr) {
    return [...new Set(arr)];
}

/**
 * Shuffles an array.
 *
 * @param array The array to shuffle.
 * @returns The shuffled array.
 */
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Flattens a nested array.
 * @param {Array} arr The array to flatten.
 * @returns {Array} The flattened array.
 */
export function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.flat(Infinity);
}

/**
 * Calculates the sum of numbers in an array.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export function sumArray(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    return 0;
  }
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {Array} arr The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array>} An array of chunked arrays.
 */
export function chunkArray(arr, size) {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Removes falsy values (false, null, 0, "", undefined, NaN) from an array.
 * @param {Array} arr The array to clean.
 * @returns {Array} A new array with falsy values removed.
 */
export function removeFalsy(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
}

/**
 * Checks if an array contains a specific element.
 * @param {Array} arr The array to check.
 * @param {*} element The element to search for.
 * @returns {boolean} True if the element is found, false otherwise.
 */
export function contains(arr, element) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.includes(element);
}

/**
 * Returns a new array with elements that are present in both arrays.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} A new array containing common elements.
 */
export function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

/**
 * Returns a new array with elements that are present in the first array but not in the second.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} A new array containing the difference.
 */
export function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

/**
 * Removes duplicate values from an array.
 * @param {Array} arr The array to remove duplicates from.
 * @returns {Array} A new array with unique values.
 */
export function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

/**
 * Groups the elements of an array based on a given key.
 * @param {Array<Object>} arr The array of objects to group.
 * @param {string} key The key to group by.
 * @returns {Object} An object with the grouped elements.
 */
export function groupBy(arr, key) {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
}

/**
 * Removes all occurrences of a specified element from an array.
 * @param {Array} arr The array to modify. This function returns a new array and does not modify the original.
 * @param {*} element The element to remove.
 * @returns {Array} A new array with all occurrences of the element removed.
 */
export function removeAllOccurrences(arr, element) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(item => item !== element);
}
