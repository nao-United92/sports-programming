/**
 * Multiplies two 2D matrices.
 * 
 * @param {number[][]} a - The first matrix.
 * @param {number[][]} b - The second matrix.
 * @returns {number[][]} The product of the two matrices.
 * @throws {Error} If the matrices cannot be multiplied.
 */
function matrixMultiply(a, b) {
  if (a[0].length !== b.length) {
    throw new Error('Incompatible matrix dimensions');
  }

  const result = Array.from({ length: a.length }, () =>
    new Array(b[0].length).fill(0)
  );

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      for (let k = 0; k < b.length; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}

module.exports = matrixMultiply;
