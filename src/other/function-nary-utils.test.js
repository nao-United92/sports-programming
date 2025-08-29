
import { nAry } from './function-nary-utils.js';

describe('nAry', () => {
  it('should return a function that accepts exactly n arguments', () => {
    const multiArgFn = jest.fn((a, b, c, d) => a + b + c + d);

    const nAryFn2 = nAry(2, multiArgFn);
    nAryFn2(1, 2, 3, 4); // Call with multiple arguments
    expect(multiArgFn).toHaveBeenCalledWith(1, 2); // Only the first two arguments should be passed

    const nAryFn3 = nAry(3, multiArgFn);
    nAryFn3(10, 20, 30, 40);
    expect(multiArgFn).toHaveBeenCalledWith(10, 20, 30);

    const nAryFn0 = nAry(0, multiArgFn);
    nAryFn0(1, 2, 3);
    expect(multiArgFn).toHaveBeenCalledWith(); // No arguments
  });

  it('should correctly pass the n arguments to the original function', () => {
    const addThree = (a, b, c) => a + b + c;
    const nAryAddThree = nAry(3, addThree);

    expect(nAryAddThree(1, 2, 3, 4, 5)).toBe(6); // Extra arguments ignored
    expect(nAryAddThree(1, 2, 3)).toBe(6);
  });

  it('should behave like unary when n is 1', () => {
    const addOne = (num, ...rest) => num + 1;
    const nAryAddOne = nAry(1, addOne);

    expect(nAryAddOne(5, 10, 15)).toBe(6);
  });

  it('should behave like binary when n is 2', () => {
    const addTwo = (a, b, ...rest) => a + b;
    const nAryAddTwo = nAry(2, addTwo);

    expect(nAryAddTwo(5, 10, 15)).toBe(15);
  });

  it('should maintain the context of the original function', () => {
    const obj = { value: 10, multiply: function(a, b) { return this.value * a * b; } };
    const nAryMultiply = nAry(2, obj.multiply);

    const result = nAryMultiply.call(obj, 2, 3, 4); // Call with multiple args, but only 2 and 3 should be used
    expect(result).toBe(60); // 10 (this.value) * 2 * 3
  });

  it('should be useful with array methods like map', () => {
    const parseIntWithRadix = (str, radix, ...rest) => parseInt(str, radix);
    const numbersAsStrings = ['1', '2', '3'];

    // map passes (value, index, array) to the callback
    const parsedNumbers = numbersAsStrings.map(nAry(1, parseIntWithRadix));
    expect(parsedNumbers).toEqual([1, 2, 3]);
  });
});
