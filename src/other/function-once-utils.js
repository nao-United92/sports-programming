/**
 * 指定された関数を一度だけ実行する新しい関数を返します。
 * @param {Function} func - 一度だけ実行したい関数。
 * @returns {Function} 一度だけ実行される新しい関数。
 */
export function once(func) {
  let hasBeenCalled = false;
  let result;
  let errorOccurred = false;
  let storedError;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      try {
        result = func.apply(this, args);
      } catch (error) {
        errorOccurred = true;
        storedError = error;
        throw error;
      }
    } else if (errorOccurred) {
      throw storedError;
    }
    return result;
  };
}
