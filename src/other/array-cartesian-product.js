/**
 * Computes the cartesian product of two arrays.
 *
 * @param {Array<T>} a The first array.
 * @param {Array<U>} b The second array.
 * @returns {Array<[T, U]>} The cartesian product.
 * @template T, U
 */
export const cartesianProduct = (a, b) =>
  a.reduce((p, x) => [...p, ...b.map(y => [x, y])], []);
