
import { unary } from './function-unary-utils.js';

describe('unary', () => {
  it('should return a function that accepts only one argument', () => {
    const multiArgFn = jest.fn((a, b, c) => a + b + c);
    const unaryFn = unary(multiArgFn);

    unaryFn(1, 2, 3); // Call with multiple arguments

    expect(multiArgFn).toHaveBeenCalledWith(1); // Only the first argument should be passed
  });

  it('should correctly pass the single argument to the original function', () => {
    const addOne = (num) => num + 1;
    const unaryAddOne = unary(addOne);

    expect(unaryAddOne(5)).toBe(6);
    expect(unaryAddOne(10)).toBe(11);
  });

  it('should be useful with array methods like map', () => {
    const parseIntWithRadix = (str, radix) => parseInt(str, radix);
    const numbersAsStrings = ['1', '2', '3'];

    // Without unary, map passes index and array, which can break parseInt
    // const parsedNumbers = numbersAsStrings.map(parseIntWithRadix); // This would result in [1, NaN, NaN]

    const parsedNumbersUnary = numbersAsStrings.map(unary(parseIntWithRadix));
    expect(parsedNumbersUnary).toEqual([1, 2, 3]);
  });

  it('should maintain the context of the original function', () => {
    const obj = { value: 10, add: function(num) { return this.value + num; } };
    const unaryAdd = unary(obj.add);

    const result = unaryAdd.call(obj, 5, 10); // Call with multiple args, but only 5 should be used
    expect(result).toBe(15); // 10 (this.value) + 5 (num)
  });
});
