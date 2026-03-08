/**
 * Moves an element from one index to another, returning a new array.
 * @param {any[]} arr - The input array.
 * @param {number} from - Source index.
 * @param {number} to - Destination index.
 * @returns {any[]} The new array with the element moved.
 */
export const moveElement = (arr, from, to) => {
  const result = [...arr];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
};
