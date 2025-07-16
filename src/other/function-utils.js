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
