import { once } from './once-utils.js';

// Mocking a simple spy function since jest.fn() is not available in this context.
const createSpy = () => {
  let callCount = 0;
  const calls = [];
  const spy = (...args) => {
    callCount++;
    calls.push({ context: this, args });
  };

  spy.getCallCount = () => callCount;
  spy.getCall = (index) => calls[index];

  return spy;
};

describe('once', () => {
  it('should invoke the original function only once', () => {
    const spy = createSpy();
    const onceFn = once(spy);

    onceFn();
    onceFn();
    onceFn();

    expect(spy.getCallCount()).toBe(1);
  });

  it('should return the value of the first invocation on subsequent calls', () => {
    let count = 0;
    const increment = () => ++count;
    const onceIncrement = once(increment);

    const firstResult = onceIncrement();
    const secondResult = onceIncrement();
    const thirdResult = onceIncrement();

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(1);
    expect(thirdResult).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const spy = createSpy();
    const onceFn = once(spy);

    onceFn(1, 'a', true);

    expect(spy.getCall(0).args).toEqual([1, 'a', true]);
  });

  it('should maintain the `this` context', () => {
    const spy = createSpy();
    const onceFn = once(spy);
    const context = { onceFn };

    context.onceFn(123);

    // Check if the context (`this`) of the call was correct
    expect(spy.getCall(0).context).toBe(context);
    // Check if arguments were still passed correctly
    expect(spy.getCall(0).args).toEqual([123]);
  });

  it('should work with functions that do not return a value', () => {
    const spy = createSpy();
    const onceFn = once(spy);

    const result1 = onceFn();
    const result2 = onceFn();

    expect(spy.getCallCount()).toBe(1);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
  });
});