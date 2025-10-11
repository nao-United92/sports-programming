/**
 * DOMが完全にロードされたときにコールバックを実行します。
 * @param {Function} callback - DOMがロードされた後に実行する関数。
 */
export const domReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};
