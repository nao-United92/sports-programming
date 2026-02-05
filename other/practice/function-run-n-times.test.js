const { runFunctionNTimes } = require('./function-run-n-times');

describe('runFunctionNTimes', () => {
  it('should run the function N times and collect results', () => {
    const mockFunc = jest.fn(x => x * 2);
    expect(runFunctionNTimes(mockFunc, 3)).toEqual([0, 2, 4]);
    expect(mockFunc).toHaveBeenCalledTimes(3);
    expect(mockFunc).toHaveBeenCalledWith(0);
    expect(mockFunc).toHaveBeenCalledWith(1);
    expect(mockFunc).toHaveBeenCalledWith(2);
  });

  it('should return an empty array if N is 0', () => {
    const mockFunc = jest.fn();
    expect(runFunctionNTimes(mockFunc, 0)).toEqual([]);
    expect(mockFunc).not.toHaveBeenCalled();
  });

  it('should return an array of results from a function with no arguments', () => {
    const mockFunc = jest.fn(() => Math.random() > 0.5 ? 'heads' : 'tails');
    const results = runFunctionNTimes(mockFunc, 2);
    expect(results.length).toBe(2);
    expect(['heads', 'tails']).toContain(results[0]);
    expect(['heads', 'tails']).toContain(results[1]);
  });
  
  it('should throw an error if the first argument is not a function', () => {
    expect(() => runFunctionNTimes('not a function', 2)).toThrow(TypeError);
    expect(() => runFunctionNTimes(null, 2)).toThrow(TypeError);
  });

  it('should throw an error if N is not a non-negative integer', () => {
    const mockFunc = jest.fn();
    expect(() => runFunctionNTimes(mockFunc, -1)).toThrow(TypeError);
    expect(() => runFunctionNTimes(mockFunc, 1.5)).toThrow(TypeError);
    expect(() => runFunctionNTimes(mockFunc, 'two')).toThrow(TypeError);
  });
});
