/**
 * Delays the execution for a specified number of milliseconds.
 *
 * @param ms The number of milliseconds to wait.
 * @returns A Promise that resolves after the delay.
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a promise-returning function a specified number of times with a delay between retries.
 *
 * @param fn The function to retry. It must return a Promise.
 * @param retries The maximum number of retries.
 * @param delayMs The delay in milliseconds between retries.
 * @returns A Promise that resolves with the result of `fn` or rejects if all retries fail.
 */
export async function retry(fn, retries = 3, delayMs = 1000) {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            console.warn(`Retrying after error: ${error.message}. Retries left: ${retries}`);
            await delay(delayMs);
            return retry(fn, retries - 1, delayMs);
        } else {
            throw error; // No more retries, re-throw the last error
        }
    }
}

/**
 * Creates a Promise that rejects with a timeout error if the given promise does not resolve within the specified time.
 *
 * @param promise The promise to race against the timeout.
 * @param ms The timeout in milliseconds.
 * @returns A new Promise that resolves with the value of the input promise or rejects with a timeout error.
 */
export function timeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, ms);

        promise.then(
            value => {
                clearTimeout(timer);
                resolve(value);
            },
            error => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}
