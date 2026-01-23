import { spread } from './function-spread-utils.js';

describe('spread', () => {
  it('should pass arguments from `start` index as a single array to the original function', () => {
    // Original function expects leading args and then an array
    const sumArray = jest.fn((id, dataArray) => {
      return dataArray.reduce((acc, val) => acc + val, id);
    });
    const spreadSum = spread(sumArray, 1); // Group arguments from index 1 into an array

    // Call spreadSum with multiple arguments
    expect(spreadSum(10, 1, 2, 3)).toBe(16); // id=10, dataArray=[1,2,3]
    expect(sumArray).toHaveBeenCalledWith(10, [1, 2, 3]);
  });

  it('should work with start index 0', () => {
    const sumAll = jest.fn((dataArray) => dataArray.reduce((acc, val) => acc + val, 0));
    const spreadSumAll = spread(sumAll, 0); // Group all arguments into an array

    expect(spreadSumAll(1, 2, 3, 4)).toBe(10);
    expect(sumAll).toHaveBeenCalledWith([1, 2, 3, 4]);
  });

  it('should preserve `this` context', () => {
    const obj = {
      prefix: 'Values:',
      process: function(id, dataArray) {
        return `${this.prefix} ID:${id}, Sum:${dataArray.reduce((acc, val) => acc + val, 0)}`;
      },
    };
    const spreadProcess = spread(obj.process, 1);

    const result = spreadProcess.call({ prefix: 'Client Data:' }, 5, 10, 20);
    expect(result).toBe('Client Data: ID:5, Sum:30');
  });

  it('should handle cases where no arguments are passed after the start index', () => {
    const logId = jest.fn((id, dataArray) => `ID: ${id}, Data Count: ${dataArray.length}`);
    const spreadLogId = spread(logId, 1);

    expect(spreadLogId(99)).toBe('ID: 99, Data Count: 0');
    expect(logId).toHaveBeenCalledWith(99, []);
  });

  it('should handle original function with no spreadable arguments', () => {
    const greet = jest.fn((name) => `Hello, ${name}!`);
    const spreadGreet = spread(greet, 1); // No arguments to spread, just pass 'name' as leading

    expect(spreadGreet('Alice')).toBe('Hello, Alice!');
    expect(greet).toHaveBeenCalledWith('Alice', []); // 'Alice' is leading, [] is spreadable
  });
});