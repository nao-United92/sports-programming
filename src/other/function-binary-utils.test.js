
import { binary } from './function-binary-utils.js';

describe('binary', () => {
  it('should return a function that accepts only two arguments', () => {
    const multiArgFn = jest.fn((a, b, c, d) => a + b + c + d);
    const binaryFn = binary(multiArgFn);

    binaryFn(1, 2, 3, 4); // Call with multiple arguments

    expect(multiArgFn).toHaveBeenCalledWith(1, 2); // Only the first two arguments should be passed
  });

  it('should correctly pass the two arguments to the original function', () => {
    const add = (a, b) => a + b;
    const binaryAdd = binary(add);

    expect(binaryAdd(5, 10)).toBe(15);
    expect(binaryAdd(1, 2, 3)).toBe(3); // Extra arguments ignored
  });

  it('should be useful with array methods like reduce', () => {
    // This function now only uses the first two arguments, acc and val
    const sumAccAndVal = (acc, val, ...rest) => acc + val;
    const numbers = [1, 2, 3];

    const summedBinary = numbers.reduce(binary(sumAccAndVal), 0);
    // Expected: 0 (initial) + 1 + 2 + 3 = 6
    expect(summedBinary).toBe(6);
  });

  it('should maintain the context of the original function', () => {
    const obj = { value: 10, multiply: function(a, b) { return this.value * a * b; } };
    const binaryMultiply = binary(obj.multiply);

    const result = binaryMultiply.call(obj, 2, 3, 4); // Call with multiple args, but only 2 and 3 should be used
    expect(result).toBe(60); // 10 (this.value) * 2 * 3
  });
});
