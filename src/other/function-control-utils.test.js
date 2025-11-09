const { debounce, throttle, once } = require('./function-control-utils');

jest.useFakeTimers();

describe('Function Control Utilities', () => {
    describe('debounce', () => {
        it('should call the function only once after the wait time', () => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 1000);

            debouncedFn();
            debouncedFn();
            debouncedFn();

            expect(mockFn).not.toHaveBeenCalled();

            jest.advanceTimersByTime(1000);

            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('should reset the timer if called again within the wait time', () => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 1000);

            debouncedFn();
            jest.advanceTimersByTime(500);
            debouncedFn();
            jest.advanceTimersByTime(500);
            debouncedFn();

            expect(mockFn).not.toHaveBeenCalled();

            jest.advanceTimersByTime(1000);
            expect(mockFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('throttle', () => {
        it('should call the function immediately on the first call', () => {
            const mockFn = jest.fn();
            const throttledFn = throttle(mockFn, 1000);

            throttledFn();
            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('should not call the function again within the limit time', () => {
            const mockFn = jest.fn();
            const throttledFn = throttle(mockFn, 1000);

            throttledFn();
            throttledFn();
            throttledFn();

            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('should call the function again after the limit time has passed', () => {
            const mockFn = jest.fn();
            const throttledFn = throttle(mockFn, 1000);

            throttledFn();
            expect(mockFn).toHaveBeenCalledTimes(1);

            jest.advanceTimersByTime(1000);

            throttledFn();
            expect(mockFn).toHaveBeenCalledTimes(2);
        });
    });

    describe('once', () => {
        it('should call the original function only once', () => {
            const mockFn = jest.fn();
            const onceFn = once(mockFn);

            onceFn();
            onceFn();
            onceFn();

            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('should return the result of the first call on subsequent calls', () => {
            let i = 0;
            const func = () => ++i;
            const onceFn = once(func);

            const result1 = onceFn();
            const result2 = onceFn();
            const result3 = onceFn();

            expect(result1).toBe(1);
            expect(result2).toBe(1);
            expect(result3).toBe(1);
        });
    });
});