import { unspread } from './function-unspread-utils.js';

describe('unspread', () => {
  it('should group all arguments into a single array and pass to the original function', () => {
    const sumArray = jest.fn((arr) => arr.reduce((acc, val) => acc + val, 0));
    const unspreadSum = unspread(sumArray);

    expect(unspreadSum(1, 2, 3)).toBe(6);
    expect(sumArray).toHaveBeenCalledWith([1, 2, 3]);
  });

  it('should preserve `this` context', () => {
    const obj = {
      prefix: 'Sum:',
      calculate: function(nums) {
        return `${this.prefix} ${nums.reduce((acc, val) => acc + val, 0)}`;
      },
    };
    const unspreadCalculate = unspread(obj.calculate);

    const result = unspreadCalculate.call({ prefix: 'Total:' }, 1, 2, 3);
    expect(result).toBe('Total: 6');
  });

  it('should handle no arguments correctly', () => {
    const logArgs = jest.fn((arr) => `Args count: ${arr.length}`);
    const unspreadLogArgs = unspread(logArgs);

    expect(unspreadLogArgs()).toBe('Args count: 0');
    expect(logArgs).toHaveBeenCalledWith([]);
  });

  it('should work with a single argument', () => {
    const processSingle = jest.fn((arr) => arr[0] * 2);
    const unspreadProcessSingle = unspread(processSingle);

    expect(unspreadProcessSingle(5)).toBe(10);
    expect(processSingle).toHaveBeenCalledWith([5]);
  });
});
