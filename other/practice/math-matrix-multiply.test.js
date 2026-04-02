const matrixMultiply = require('./math-matrix-multiply');

describe('matrixMultiply', () => {
  test('should multiply 2x2 matrices correctly', () => {
    const a = [
      [1, 2],
      [3, 4]
    ];
    const b = [
      [5, 6],
      [7, 8]
    ];
    const expected = [
      [19, 22],
      [43, 50]
    ];
    expect(matrixMultiply(a, b)).toEqual(expected);
  });

  test('should multiply matrices with different dimensions correctly', () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const b = [
      [7, 8],
      [9, 10],
      [11, 12]
    ];
    const expected = [
      [58, 64],
      [139, 154]
    ];
    expect(matrixMultiply(a, b)).toEqual(expected);
  });

  test('should throw error for incompatible dimensions', () => {
    const a = [[1, 2]];
    const b = [[1]];
    expect(() => matrixMultiply(a, b)).toThrow('Incompatible matrix dimensions');
  });

  test('should handle identity matrix correctly', () => {
    const a = [
      [1, 2],
      [3, 4]
    ];
    const identity = [
      [1, 0],
      [0, 1]
    ];
    expect(matrixMultiply(a, identity)).toEqual(a);
  });
});
