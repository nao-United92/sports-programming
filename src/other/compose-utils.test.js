import { compose, pipe } from './compose-utils';

describe('compose', () => {
  test('should compose two functions', () => {
    const addOne = (x) => x + 1;
    const multiplyTwo = (x) => x * 2;
    const addOneThenMultiplyTwo = compose(multiplyTwo, addOne);

    expect(addOneThenMultiplyTwo(5)).toBe(12); // (5 + 1) * 2 = 12
  });

  test('should compose multiple functions', () => {
    const addOne = (x) => x + 1;
    const multiplyTwo = (x) => x * 2;
    const subtractThree = (x) => x - 3;
    const composedFunc = compose(subtractThree, multiplyTwo, addOne);

    expect(composedFunc(5)).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  test('should handle no functions', () => {
    const composedFunc = compose();
    expect(composedFunc(5)).toBe(5);
    expect(composedFunc(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test('should handle one function', () => {
    const addOne = (x) => x + 1;
    const composedFunc = compose(addOne);
    expect(composedFunc(5)).toBe(6);
  });

  test('should pass multiple arguments to the rightmost function', () => {
    const sum = (a, b) => a + b;
    const multiplyTwo = (x) => x * 2;
    const composedFunc = compose(multiplyTwo, sum);

    expect(composedFunc(2, 3)).toBe(10); // (2 + 3) * 2 = 10
  });
});

describe('pipe', () => {
  test('should pipe two functions', () => {
    const addOne = (x) => x + 1;
    const multiplyTwo = (x) => x * 2;
    const addOneThenMultiplyTwo = pipe(addOne, multiplyTwo);

    expect(addOneThenMultiplyTwo(5)).toBe(12); // (5 + 1) * 2 = 12
  });

  test('should pipe multiple functions', () => {
    const addOne = (x) => x + 1;
    const multiplyTwo = (x) => x * 2;
    const subtractThree = (x) => x - 3;
    const pipedFunc = pipe(addOne, multiplyTwo, subtractThree);

    expect(pipedFunc(5)).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  test('should handle no functions', () => {
    const pipedFunc = pipe();
    expect(pipedFunc(5)).toBe(5);
    expect(pipedFunc(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test('should handle one function', () => {
    const addOne = (x) => x + 1;
    const pipedFunc = pipe(addOne);
    expect(pipedFunc(5)).toBe(6);
  });

  test('should pass multiple arguments to the leftmost function', () => {
    const sum = (a, b) => a + b;
    const multiplyTwo = (x) => x * 2;
    const pipedFunc = pipe(sum, multiplyTwo);

    expect(pipedFunc(2, 3)).toBe(10); // (2 + 3) * 2 = 10
  });
});