import { compose, pipe, curry, applyTransforms } from './function-utils.js';

describe('function-utils', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;

  it('should compose functions', () => {
    const addAndSquare = compose(square, add);
    expect(addAndSquare(2, 3)).toBe(25);
  });

  it('should pipe functions', () => {
    const addThenSquare = pipe(add, square);
    expect(addThenSquare(2, 3)).toBe(25);
  });

  it('should curry a function', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(2)(3)).toBe(5);
  });

  it('should apply transforms to arguments', () => {
    const transform = (a, b) => a + b;
    const transformed = applyTransforms(transform, [square, square]);
    expect(transformed(2, 3)).toBe(13);
  });
});
