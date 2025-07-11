let enableLogging = true; // Default to true

/**
 * Enables or disables logging.
 * @param {boolean} enable - True to enable logging, false to disable.
 */
export function setLoggingEnabled(enable) {
    enableLogging = enable;
}

/**
 * Logs an informational message.
 * @param {...any} args - The arguments to log.
 */
export function info(...args) {
    if (enableLogging) {
        console.info(...args);
    }
}

/**
 * Logs a warning message.
 * @param {...any} args - The arguments to log.
 */
export function warn(...args) {
    if (enableLogging) {
        console.warn(...args);
    }
}

/**
 * Logs an error message.
 * @param {...any} args - The arguments to log.
 */
export function error(...args) {
    if (enableLogging) {
        console.error(...args);
    }
}

/**
 * Logs a debug message.
 * @param {...any} args - The arguments to log.
 */
export function debug(...args) {
    if (enableLogging) {
        console.debug(...args);
    }
}
