/**
 * 指定したミリ秒数だけ処理を遅延させます。
 * @param {number} ms - 遅延させるミリ秒数。
 * @returns {Promise<void>} 指定時間後に解決するPromise。
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
