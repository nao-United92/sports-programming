export const throttle = (func, limit) => {
    let timeout;
    let lastArgs;
    let lastThis;
    let result;
    let previous = 0;

    const later = () => {
        previous = Date.now();
        timeout = null;
        result = func.apply(lastThis, lastArgs);
    };

    return function(...args) {
        const now = Date.now();
        if (!previous) {
          previous = now;
        }
        const remaining = limit - (now - previous);
        
        lastArgs = args;
        lastThis = this;

        if (remaining <= 0 || remaining > limit) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(lastThis, lastArgs);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }

        return result;
    };
};