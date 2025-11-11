/**
 * 指定された時間、関数の実行を遅延させ、連続する呼び出しを1回にまとめる debounce 関数
 * @param {Function} func - デバウンス対象の関数
 * @param {number} delay - 遅延させる時間 (ミリ秒)
 * @returns {Function} - デバウンス化された関数
 */
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 指定された時間間隔内で、関数が最大1回しか実行されないように制限する throttle 関数
 * @param {Function} func - スロットル対象の関数
 * @param {number} limit - 制限する時間間隔 (ミリ秒)
 * @returns {Function} - スロットル化された関数
 */
function throttle(func, limit) {
  let inThrottle;
  let lastFunc;
  let lastRan;

  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

module.exports = {
  debounce,
  throttle,
};