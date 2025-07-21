import { compose, pipe, curry, applyTransforms, debounce, throttle, memoize, once, rearg, partial, sleep } from './function-utils.js';

describe('sleep', () => {
  test('should resolve after the specified time', async () => {
    const startTime = Date.now();
    await sleep(100);
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(100);
  });
});

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

  it('should debounce a function', (done) => {
    let callCount = 0;
    const debounced = debounce(() => {
      callCount++;
    }, 100);

    debounced();
    debounced();
    debounced();

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 150);
  });

  it('should throttle a function', (done) => {
    let callCount = 0;
    const throttled = throttle(() => {
      callCount++;
    }, 100);

    throttled(); // First call should execute immediately
    throttled(); // Second call should be throttled
    throttled(); // Third call should be throttled

    setTimeout(() => {
      expect(callCount).toBe(1); // Only the first call should have executed
      throttled(); // This call should execute after the wait period
      setTimeout(() => {
        expect(callCount).toBe(2);
        done();
      }, 100);
    }, 50);
  });

  describe('memoize', () => {
    it('should memoize a function' , () => {
      const mockFn = jest.fn((a, b) => a + b);
      const memoizedFn = memoize(mockFn);

      expect(memoizedFn(1, 2)).toBe(3);
      expect(mockFn).toHaveBeenCalledTimes(1);

      expect(memoizedFn(1, 2)).toBe(3);
      expect(mockFn).toHaveBeenCalledTimes(1); // Should not be called again

      expect(memoizedFn(2, 3)).toBe(5);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('should handle different arguments', () => {
      const mockFn = jest.fn((a, b) => a * b);
      const memoizedFn = memoize(mockFn);

      memoizedFn(2, 3);
      memoizedFn(3, 2);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  

  describe('rearg', () => {
    test('should reorder arguments based on indexes', () => {
      const originalFn = jest.fn((a, b, c) => `${a}-${b}-${c}`);
      const reargFn = rearg(originalFn, [2, 0, 1]); // c, a, b

      const result = reargFn('argA', 'argB', 'argC');

      expect(originalFn).toHaveBeenCalledWith('argC', 'argA', 'argB');
      expect(result).toBe('argC-argA-argB');
    });

    test('should handle fewer arguments than indexes', () => {
      const originalFn = jest.fn((a, b) => `${a}-${b}`);
      const reargFn = rearg(originalFn, [1, 0, 2]); // b, a, undefined

      const result = reargFn('argA', 'argB');

      expect(originalFn).toHaveBeenCalledWith('argB', 'argA', undefined);
      expect(result).toBe('argB-argA');
    });

    test('should maintain context', () => {
      const originalFn = jest.fn(function(a, b) { return this.value + a + b; });
      const reargFn = rearg(originalFn, [1, 0]);
      const context = { value: 10 };

      const result = reargFn.apply(context, [1, 2]);

      expect(originalFn).toHaveBeenCalledWith(2, 1);
      expect(result).toBe(13);
    });
  });

  describe('partial', () => {
    test('should partially apply arguments to a function', () => {
      const greet = (greeting, name) => `${greeting}, ${name}!`;
      const sayHello = partial(greet, 'Hello');
      expect(sayHello('John')).toBe('Hello, John!');
    });

    test('should handle multiple partial arguments', () => {
      const sum = (a, b, c) => a + b + c;
      const add5And10 = partial(sum, 5, 10);
      expect(add5And10(20)).toBe(35);
    });

    test('should maintain context', () => {
      const obj = { value: 10, add: function(a, b) { return this.value + a + b; } };
      const addPartial = partial(obj.add, 5);
      expect(addPartial.call(obj, 2)).toBe(17);
    });
  });


});
