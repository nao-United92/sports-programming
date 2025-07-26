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
export function logInfo(...args) {
    if (enableLogging) {
        console.info(...args);
    }
}

/**
 * Logs a warning message.
 * @param {...any} args - The arguments to log.
 */
export function logWarning(...args) {
    if (enableLogging) {
        console.warn(...args);
    }
}

/**
 * Logs an error message.
 * @param {...any} args - The arguments to log.
 */
export function logError(...args) {
    if (enableLogging) {
        console.error(...args);
    }
}

/**
 * Logs a debug message.
 * @param {...any} args - The arguments to log.
 */
export function logDebug(...args) {
    if (enableLogging) {
        console.debug(...args);
    }
}

/**
 * Logs tabular data as a table.
 * @param {Array<object>} data - The data to log as a table.
 * @param {string[]} [properties] - An optional array of properties to display as columns.
 */
export function logTable(data, properties) {
  if (enableLogging && console.table) {
    console.table(data, properties);
  }
}

/**
 * Starts a timer for a named operation.
 * @param {string} label - The label for the timer.
 */
export function logTime(label) {
  if (enableLogging && console.time) {
    console.time(label);
  }
}

/**
 * Stops a timer and logs the elapsed time.
 * @param {string} label - The label for the timer to stop.
 */
export function logTimeEnd(label) {
  if (enableLogging && console.timeEnd) {
    console.timeEnd(label);
  }
}

/**
 * Logs a message with a timestamp.
 * @param {...any} args - The arguments to log.
 */
export function logWithTimestamp(...args) {
  if (enableLogging) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]`, ...args);
  }
}
