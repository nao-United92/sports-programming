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
 * Removes duplicate values from an array.
 * @param {Array} arr The array to remove duplicates from.
 * @returns {Array} A new array with unique values.
 */
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Shuffles an array randomly using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

/**
 * Calculates the average of numbers in an array.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number} The average of the numbers. Returns NaN if the array is empty or contains non-numeric values.
 */
export function getAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(val => typeof val !== 'number' || isNaN(val))) {
    return NaN;
  }
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

/**
 * Divides an array into smaller chunks of a specified size.
 * @param {Array} array The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array>} An array of chunks.
 */
export function chunkArray(array, size) {
  if (!Array.isArray(array) || size <= 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from `start` up to, but not including, `end`.
 * If `end` is not specified, `start` is set to `0` and `end` is set to `start`.
 * If `step` is not specified, it defaults to `1`.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array<number>} Returns the new array of numbers.
 */
export function range(start, end, step = 1) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Creates an array with all falsey values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of compacted values.
 */
export function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter(Boolean);
}

/**
 * Gets a random element from `array`.
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
export function sample(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

/**
 * Extracts a list of property values from an array of objects.
 * @param {Array<Object>} array The array of objects.
 * @param {string} key The property key to extract.
 * @returns {Array} Returns the new array of property values.
 */
export function pluck(array, key) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map(item => item && item[key]);
}

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * @param {...Array} arrays The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 */
export function zip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  const minLength = Math.min(...arrays.map(arr => arr.length));
  const result = [];
  for (let i = 0; i < minLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  return result;
}

/**
 * Creates a duplicate-free array, using a provided function to determine uniqueness.
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The function invoked per iteration to compute the criterion by which to group.
 * @returns {Array} Returns the new duplicate free array.
 */
export function uniqueBy(array, iteratee) {
  if (!Array.isArray(array)) {
    return [];
  }
  const seen = new Set();
  return array.filter(item => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/**
 * Partitions an array into two arrays based on a predicate function.
 * @param {Array} array The array to partition.
 * @param {Function} predicate The function invoked per iteration to determine into which array an element goes.
 * @returns {Array<Array>} A two-element array. The first element is an array of elements for which `predicate` returned truthy, and the second is an array of elements for which `predicate` returned falsy.
 */
export function partition(array, predicate) {
  const truthy = [];
  const falsy = [];
  if (!Array.isArray(array)) {
    return [truthy, falsy];
  }
  array.forEach(item => {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });
  return [truthy, falsy];
}

/**
 * Recursively flattens an array up to the specified depth.
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} The new flattened array.
 */
export function flattenDeep(arr, depth = 1) {
  if (!Array.isArray(arr) || depth < 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(flattenDeep(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * Creates an array of unique values, in order, from all given arrays. 
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of unique combined values.
 */
export function union(...arrays) {
  const combined = [].concat(...arrays.filter(Array.isArray));
  return [...new Set(combined)];
}

/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The average of the numbers, or 0 if the array is empty.
 */
export function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

export const uniqueArray = removeDuplicates;

export function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.flat(Infinity);
}

export function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, val) => (typeof val === 'number' && !isNaN(val) ? acc + val : acc), 0);
}

export const removeFalsy = compact;

export function contains(arr, element) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.includes(element);
}

export function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set1 = new Set(arr1);
  return arr2.filter(element => set1.has(element));
}

export function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set2 = new Set(arr2);
  return arr1.filter(element => !set2.has(element));
}

export function filterBy(arr, predicate) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(predicate);
}

export function sortBy(arr, key, order = 'asc') {
  if (!Array.isArray(arr)) {
    return [];
  }
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (valA < valB) {
      return order === 'asc' ? -1 : 1;
    }
    if (valA > valB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
  return sortedArr;
}