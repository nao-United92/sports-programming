/**
 * Performs left-to-right function composition.
 *
 * @param {...Function} funcs The functions to pipe.
 * @returns {Function} Returns the new composite function.
 */
export const pipe = (...funcs) => input => funcs.reduce((acc, fn) => fn(acc), input);
