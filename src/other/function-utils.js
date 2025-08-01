/**
 * Creates a new function that is the composition of a list of functions.
 * The functions are applied from right to left.
 *
 * @param fns The functions to compose.
 * @returns A new function that is the composition of the input functions.
 */
export function compose(...fns) {
    return function(...args) {
        const [firstFn, ...restFns] = fns.reverse();
        return restFns.reduce((acc, fn) => fn(acc), firstFn(...args));
    };
}

/**
 * Creates a new function that is the pipe of a list of functions.
 * The functions are applied from left to right.
 *
 * @param fns The functions to pipe.
 * @returns A new function that is the pipe of the input functions.
 */
export function pipe(...fns) {
    return function(...args) {
        const [firstFn, ...restFns] = fns;
        return restFns.reduce((acc, fn) => fn(acc), firstFn(...args));
    };
}

/**
 * Curries a function.
 *
 * @param fn The function to curry.
 * @returns A curried version of the function.
 */
export function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

/**
 * Creates a function that invokes `func` with its arguments transformed by `transforms`.
 * Each `transform` function is applied to the argument at the corresponding index.
 *
 * @param func The function to invoke.
 * @param transforms An array of functions to transform arguments.
 * @returns A new function that applies transformations to its arguments before invoking `func`.
 */
export function applyTransforms(func, transforms) {
    return function(...args) {
        const transformedArgs = args.map((arg, index) => {
            return transforms[index] ? transforms[index](arg) : arg;
        });
        return func(...transformedArgs);
    };
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns A new debounced function.
 */
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 *
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @returns A new throttled function.
 */
export function throttle(func, wait) {
    let inThrottle, lastFn, lastTime;
    return function() {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if (Date.now() - lastTime >= wait) {
                    func.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}

/**
 * Creates a memoized function that caches the result of the given function.
 * @param {Function} func The function to memoize.
 * @returns {Function} The memoized function.
 */
export function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}


/**
 * Creates a function that invokes `func` with arguments arranged according to the `indexes` array.
 * @param {Function} func The function to rearrange arguments for.
 * @param {number[]} indexes An array of indexes specifying the new order of arguments.
 * @returns {Function} A new function with rearranged arguments.
 */
export function rearg(func, indexes) {
  return function(...args) {
    const newArgs = indexes.map(index => args[index]);
    return func.apply(this, newArgs);
  };
}

/**
 * Creates a function that invokes `func` with `partials` prepended to the arguments it receives.
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partials The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 */
export function partial(func, ...partials) {
  return function(...args) {
    return func.apply(this, partials.concat(args));
  };
}

/**
 * Delays the execution for a specified number of milliseconds.
 * @param {number} ms The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a function that is restricted to invoking `func` once.
 * Repeat calls to the function return the value of the first invocation.
 * The `func` is invoked with the `this` binding and arguments of the created function.
 *
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
export function once(func) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

/**
 * Defers invoking the `func` until the current call stack has cleared.
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 */
export function defer(func, ...args) {
  return setTimeout(func, 1, ...args);
}

/**
 * Creates a function that invokes `func` with `partials` appended to the arguments it receives.
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partials The arguments to be partially applied from the right.
 * @returns {Function} Returns the new partially applied function.
 */
export function partialRight(func, ...partials) {
  return function(...args) {
    return func.apply(this, args.concat(partials));
  };
}

/**
 * Creates a function that negates the result of the given function.
 * @param {Function} predicate The function to negate.
 * @returns {Function} Returns the new negated function.
 */
export function negate(predicate) {
  return function(...args) {
    return !predicate.apply(this, args);
  };
}

/**
 * A no-operation function. Returns undefined.
 * @returns {undefined} Nothing.
 */
export function noop() {}

