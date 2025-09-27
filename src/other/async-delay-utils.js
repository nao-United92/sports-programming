/**
 * 指定したミリ秒数だけ処理を遅延させ、指定された値を返します。
 * @param {number} ms - 遅延させるミリ秒数。
 * @param {*} [value] - 遅延後に解決される値。
 * @returns {Promise<*>} 指定時間後に指定された値で解決するPromise。
 */
export function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
