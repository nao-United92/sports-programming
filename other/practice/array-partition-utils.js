/**
 * Creates an array of elements split into two groups, one for which `predicate` returns truthy,
 * and one for which `predicate` returns falsy.
 *
 * @param {Array<T>} array The array to inspect.
 * @param {function(T, number, Array<T>): boolean} predicate The function invoked per iteration.
 * @returns {Array<Array<T>>} Returns the array of grouped elements.
 * @template T
 */
function partition(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the predicate argument.');
  }

  const truthy = [];
  const falsy = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element, i, array)) {
      truthy.push(element);
    } else {
      falsy.push(element);
    }
  }

  return [truthy, falsy];
}

export default partition;