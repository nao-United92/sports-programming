const { once, memoize } = require('./function-utils.js');

describe('once', () => {
  it('should only invoke the function once', () => {
    const myMock = jest.fn();
    const onceFn = once(myMock);

    onceFn();
    onceFn();
    onceFn();

    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should return the value of the first invocation', () => {
    let i = 1;
    const onceFn = once(() => i++);

    const val1 = onceFn();
    const val2 = onceFn();
    const val3 = onceFn();

    expect(val1).toBe(1);
    expect(val2).toBe(1);
    expect(val3).toBe(1);
  });
});

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    const myMock = jest.fn((x) => x * 2);
    const memoizedFn = memoize(myMock);

    memoizedFn(2);
    memoizedFn(2);
    memoizedFn(3);
    memoizedFn(3);

    expect(myMock.mock.calls.length).toBe(2);
  });

  it('should return the cached result', () => {
    const expensiveFn = (x) => {
      // simulate expensive calculation
      return x * 10;
    };
    const memoizedFn = memoize(expensiveFn);

    const res1 = memoizedFn(5);
    const res2 = memoizedFn(5);

    expect(res1).toBe(50);
    expect(res2).toBe(50);
  });

  it('should work with different arguments', () => {
    const myMock = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(myMock);

    memoizedFn(1, 2);
    memoizedFn(1, 2);
    memoizedFn(2, 3);
    memoizedFn(2, 3);

    expect(myMock.mock.calls.length).toBe(2);
  });
});
