
/**
 * 指定された要素にスムーズスクロールします。
 * @param {string} selector - スクロール先の要素のCSSセレクタ。
 * @param {object} [options] - スクロールオプション。
 * @param {string} [options.behavior] - スクロールのアニメーション。'auto'、'instant'、または 'smooth'。
 * @param {string} [options.block] - 垂直方向のアライメント。'start'、'center'、'end'、または 'nearest'。
 * @param {string} [options.inline] - 水平方向のアライメント。'start'、'center'、'end'、または 'nearest'。
 */
export function smoothScrollTo(selector, options = { behavior: 'smooth', block: 'start' }) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView(options);
  }
}
